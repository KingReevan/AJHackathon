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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <CircularProgress />
        <p style={{ color: "white", marginTop: "1rem" }}>Loading destinations...</p>
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 2rem 3rem", // top, sides, bottom
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginTop: 0,
          marginBottom: "0.5rem", // ↓ reduced space
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
        }}
      >
        Explore Destinations
      </h2>

      <div
        className="card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {destinations.map((dest) => (
          <button
            key={dest._id}
            onClick={() =>
              navigate(`/destinations/${encodeURIComponent(dest.name)}`)
            }
            style={{
              all: "unset",
              cursor: "pointer",
              display: "block",
              width: "100%",
            }}
            aria-label={`View details about ${dest.name}`}
          >
            <Card
              imageUrl={
                (dest.images?.length && dest.images[0]) ||
                "https://via.placeholder.com/300x180?text=No+Image"
              }
              title={`${dest.name}, ${dest.country}`}
              description={
                dest.description.length > 120
                  ? dest.description.slice(0, 120) + "..."
                  : dest.description
              }
            />
          </button>
        ))}
      </div>
    </Box>
  );
};

export default Destination;
