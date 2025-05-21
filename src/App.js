import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Card from "./components/Card"; // Import the Card component
import Footer from './components/Footer';
import { footerConfig } from './config/footerConfig';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Planner from './pages/Planner';
import AboutUs from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DestinationPage from './pages/DestinationPage';
function App() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");
  const [dbStatus, setDbStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch("/api/status");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        setBackendStatus(data.status);
        setDbStatus(data.database);
      } catch (err) {
        setError(err.message);
        setBackendStatus("Backend connection failed");
      } finally {
        setIsLoading(false);
      }
    };

    checkBackend();
  }, []);

  if (isLoading) {
    return <div className="status-loading">Loading backend status...</div>;
  }

  // Sample card data (can be fetched from an API later)
  const cards = [

  ];

  if (isLoading) {
    return <div className="status-loading">Loading backend status...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home cards={cards} />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/destinations/:name" element={<DestinationPage />} />

          </Routes>
        </main>
        
        <Footer {...footerConfig} />
      </div>
    </Router>
  );
}

export default App;