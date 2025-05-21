import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Fade,
  Stack,
} from '@mui/material';

const DestinationPage = () => {
  const { name } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`/api/destinations/${encodeURIComponent(name)}`);
        if (!response.ok) {
          throw new Error('Destination not found');
        }
        const data = await response.json();
        setDestination(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [name]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <CircularProgress size={48} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography
        variant="h5"
        color="error"
        sx={{ textAlign: 'center', mt: 8, fontWeight: 'bold' }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <Fade in={!loading}>
      <Box sx={{ maxWidth: 1000, margin: 'auto', p: 3 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 250, sm: 350 },
            borderRadius: 3,
            overflow: 'hidden',
            mb: 4,
            boxShadow: 4,
          }}
        >
          {destination.images && destination.images[0] && (
            <CardMedia
              component="img"
              src={destination.images[0]}
              alt={`${destination.name} hero`}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }}
            />
          )}
          <Box
            sx={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              color: 'white',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
              {destination.name}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500, mt: 1 }}>
              {destination.country}
            </Typography>
          </Box>
        </Box>

        {/* Description */}
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              About {destination.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: 18, lineHeight: 1.6 }}>
              {destination.longDescription || destination.description}
            </Typography>
          </Box>

          <Divider />

          {/* Cultural Highlights */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Cultural Highlights
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: 16, lineHeight: 1.5 }}>
              {destination.culturalHighlights}
            </Typography>
          </Box>

          <Divider />

          {/* Images Grid */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Gallery
            </Typography>
            <Grid container spacing={3}>
              {destination.images &&
                destination.images.map((img, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card
                      elevation={8}
                      sx={{
                        borderRadius: 3,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt={`${destination.name} image ${idx + 1}`}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ textAlign: 'center', fontWeight: 600 }}
                        >
                          {`Photo ${idx + 1}`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Fade>
  );
};

export default DestinationPage;
