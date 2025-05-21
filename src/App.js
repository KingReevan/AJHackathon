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
    {
      imageUrl: "https://i.pinimg.com/736x/c0/76/aa/c076aa6d563f1499ed2793e6078a156a.jpg",
      title: "Awesome Product",
      description: "This is a great product with amazing features."
    },
    {
      imageUrl: "https://wallpapers.com/images/hd/cool-rainbow-neon-streaks-vnjacac3u0ugxi89.jpg",
      title: "Premium Service",
      description: "Get the best service in town with our premium package."
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/01/05/16/08/360_F_105160882_L6I6OnRkT0NZjqtnEX4oqC5BcI3j6ZuH.jpg",
      title: "Limited Edition",
      description: "Hurry! Limited stock available for this exclusive item."
    },
    {
      imageUrl: "https://m.media-amazon.com/images/I/815YTONG3jL._AC_UF1000,1000_QL80_.jpg",
      title: "Alston Endorsed",
      description: "Famous celebrities like Joywin and Alston endorse this product."
    },
    
  ];

  if (isLoading) {
    return <div className="status-loading">Loading backend status...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <div className="status-container">
          <h1>Backend Status</h1>
          {error ? (
            <div className="status-error">
              <p>❌ Error: {error}</p>
              <p>Make sure your backend server is running on port 5000</p>
            </div>
          ) : (
            <>
              <div className={`status-indicator ${error ? 'error' : 'success'}`}>
                <p>Backend: {backendStatus}</p>
                <p>Database: {dbStatus}</p>
              </div>
              <p className="status-tip">
                {!error && "✅ Frontend is successfully communicating with backend"}
              </p>
            </>
          )}
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <div className="card-grid">
                  {cards.map((card, index) => (
                    <Card
                      key={index}
                      imageUrl={card.imageUrl}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </>
            } />
            <Route path="/destination" element={<Destination />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        
        <Footer {...footerConfig} />
      </div>
    </Router>
  );
}

export default App;