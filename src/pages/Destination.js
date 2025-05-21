import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      <div className="card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {destinations.map((dest) => (
          <div
            key={dest._id}
            onClick={() => navigate(`/destinations/${encodeURIComponent(dest.name)}`)}
            style={{ cursor: "pointer" }}
            aria-label={`View details about ${dest.name}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(`/destination/${encodeURIComponent(dest.name)}`);
              }
            }}
          >
            <Card
              imageUrl={dest.images?.[0] || "https://via.placeholder.com/300x180?text=No+Image"}
              title={`${dest.name}, ${dest.country}`}
              description={
                dest.description.length > 120
                  ? dest.description.slice(0, 120) + "..."
                  : dest.description
              }
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Destination;
