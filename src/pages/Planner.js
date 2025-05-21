import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Planner = () => {
  const [tripTitle, setTripTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dailyPlans, setDailyPlans] = useState([{ day: 1, activity: '', budget: '' }]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [travelers, setTravelers] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const calculatedTotal = dailyPlans.reduce((sum, day) => {
      return sum + (Number(day.budget) || 0);
    }, 0);
    setTotalBudget(calculatedTotal);
  }, [dailyPlans]);

  const handlePlanChange = (index, field, value) => {
    const newPlans = [...dailyPlans];
    newPlans[index][field] = value;
    setDailyPlans(newPlans);
  };

  const addDay = () => {
    setDailyPlans([...dailyPlans, { day: dailyPlans.length + 1, activity: '', budget: '' }]);
  };

  const removeDay = (index) => {
    if (dailyPlans.length > 1) {
      const newPlans = dailyPlans.filter((_, i) => i !== index)
        .map((plan, i) => ({ ...plan, day: i + 1 }));
      setDailyPlans(newPlans);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = {
      tripTitle,
      destination,
      startDate,
      endDate,
      dailyPlans,
      totalBudget,
      travelers,
    };
    console.log('Trip data:', tripData);
    alert('Your trip plan has been saved!');
    navigate('/');
  };

  const calculateDuration = () => {
    if (startDate && endDate) {
      const diffTime = new Date(endDate) - new Date(startDate);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
    return 0;
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark overlay
          zIndex: 1,
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 4,
        pt: 8,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          position: 'relative',
          zIndex: 2,
          p: 4,
          maxWidth: 800,
          width: '100%',
          bgcolor: 'rgba(255,255,255,0.9)',
          borderRadius: 2,
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#ef6812' }}>
          Plan Your Perfect Trip
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Organize your itinerary and budget all in one place
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* Trip Details */}
          <Typography variant="h6" gutterBottom sx={{ color: '#ef6812' }}>
            Trip Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Trip Title"
                variant="outlined"
                fullWidth
                required
                value={tripTitle}
                onChange={(e) => setTripTitle(e.target.value)}
                placeholder="e.g., European Adventure 2023"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Destination"
                variant="outlined"
                fullWidth
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where are you going?"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                inputProps={{ min: startDate }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Travelers"
                type="number"
                fullWidth
                required
                inputProps={{ min: 1 }}
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              />
            </Grid>
          </Grid>

          {startDate && endDate && (
            <Box sx={{ mt: 2 }}>
              <Typography>
                <strong>Trip Duration:</strong> {calculateDuration()} days
              </Typography>
              <Typography>
                <strong>Total Estimated Budget:</strong> ${totalBudget.toLocaleString()}
              </Typography>
              <Typography>
                <strong>Per Traveler:</strong> ${(totalBudget / travelers).toLocaleString()}
              </Typography>
            </Box>
          )}

          {/* Daily Itinerary */}
          <Typography variant="h6" gutterBottom sx={{ mt: 4, color: '#ef6812' }}>
            Daily Itinerary
          </Typography>

          {dailyPlans.map((plan, index) => (
            <Paper
              key={index}
              variant="outlined"
              sx={{
                p: 2,
                mb: 2,
                position: 'relative',
                backgroundColor: '#fff',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Day {plan.day}</Typography>
                {dailyPlans.length > 1 && (
                  <IconButton
                    aria-label="remove day"
                    color="error"
                    onClick={() => removeDay(index)}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                )}
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <TextField
                    label="Activity"
                    fullWidth
                    placeholder="What will you do today?"
                    value={plan.activity}
                    onChange={(e) => handlePlanChange(index, 'activity', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Estimated Budget ($)"
                    type="number"
                    fullWidth
                    placeholder="500"
                    inputProps={{ min: 0 }}
                    value={plan.budget}
                    onChange={(e) => handlePlanChange(index, 'budget', e.target.value)}
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ef6812',
              '&:hover': { backgroundColor: '#d75e0f' },
              mb: 3,
            }}
            onClick={addDay}
          >
            + Add Another Day
          </Button>

          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#ef6812',
                color: '#fff',
                '&:hover': { backgroundColor: '#d75e0f' },
                minWidth: 200,
              }}
            >
              Save Trip Plan
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Planner;
