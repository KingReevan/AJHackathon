import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css'; // Optional for styling

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking backend...");
  const [dbStatus, setDbStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
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
  );
}

export default App;