import React, { useState } from 'react';
import Button from '../components/Button';

const Planner = () => {
  const [tripTitle, setTripTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dailyPlans, setDailyPlans] = useState([{ day: 1, activity: "" }]);

  const handleActivityChange = (index, value) => {
    const newPlans = [...dailyPlans];
    newPlans[index].activity = value;
    setDailyPlans(newPlans);
  };

  const addDay = () => {
    setDailyPlans([...dailyPlans, { day: dailyPlans.length + 1, activity: "" }]);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Plan Your Trip</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Trip Title: </label>
        <input type="text" value={tripTitle} onChange={(e) => setTripTitle(e.target.value)} placeholder="My Europe Trip" />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label style={{ marginLeft: "1rem" }}>End Date: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <h3>Daily Itinerary:</h3>
      {dailyPlans.map((plan, index) => (
        <div key={index} style={{ marginBottom: "0.5rem" }}>
          <label>Day {plan.day}:</label>
          <input
            type="text"
            placeholder="Visit Eiffel Tower"
            value={plan.activity}
            onChange={(e) => handleActivityChange(index, e.target.value)}
            style={{ marginLeft: "1rem", width: "60%" }}
          />
        </div>
      ))}

      <Button onClick={addDay}>Add Another Day</Button>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Button onClick={() => alert("Your plan is saved (demo)!")}>Save Plan</Button>
      </div>
    </div>
  );
};

export default Planner;
