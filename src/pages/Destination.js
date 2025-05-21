import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box"; // just for padding
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../components/Card"; // your custom card component

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch destinations", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={{ padding: "2rem" }}>
      <h2>Destinations</h2>
      <div className="card-grid">
        {destinations.map((dest) => (
          <Card
            key={dest._id}
            imageUrl={dest.images?.[0] || "https://via.placeholder.com/300x180?text=No+Image"}
            title={`${dest.name}, ${dest.country}`}
            description={dest.description.length > 120 ? dest.description.slice(0, 120) + "..." : dest.description}
          />
        ))}
      </div>
    </Box>
  );
};

export default Destination;
