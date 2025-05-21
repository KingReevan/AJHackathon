import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Planner.css';

const Planner = () => {
  const [tripTitle, setTripTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dailyPlans, setDailyPlans] = useState([{ day: 1, activity: "", budget: "" }]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [travelers, setTravelers] = useState(1);
  const navigate = useNavigate();

  // Calculate total budget whenever daily plans change
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
    setDailyPlans([...dailyPlans, { 
      day: dailyPlans.length + 1, 
      activity: "", 
      budget: "" 
    }]);
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
    // In a real app, you would save to your backend here
    const tripData = {
      tripTitle,
      destination,
      startDate,
      endDate,
      dailyPlans,
      totalBudget,
      travelers
    };
    console.log("Trip data:", tripData);
    alert("Your trip plan has been saved!");
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
    <div className="planner-container">
      <div className="planner-header">
        <h1>Plan Your Perfect Trip</h1>
        <p>Organize your itinerary and budget all in one place</p>
      </div>

      <form onSubmit={handleSubmit} className="planner-form">
        <div className="form-section">
          <h2>Trip Details</h2>
          <div className="form-group">
            <label>Trip Title</label>
            <input
              type="text"
              value={tripTitle}
              onChange={(e) => setTripTitle(e.target.value)}
              placeholder="e.g., European Adventure 2023"
              required
            />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              required
            />
          </div>

          <div className="date-group">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate}
                required
              />
            </div>

            <div className="form-group">
              <label>Travelers</label>
              <input
                type="number"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                min="1"
                required
              />
            </div>
          </div>

          {startDate && endDate && (
            <div className="trip-summary">
              <p><strong>Trip Duration:</strong> {calculateDuration()} days</p>
              <p><strong>Total Estimated Budget:</strong> ${totalBudget.toLocaleString()}</p>
              <p><strong>Per Traveler:</strong> ${(totalBudget / travelers).toLocaleString()}</p>
            </div>
          )}
        </div>

        <div className="form-section">
          <h2>Daily Itinerary</h2>
          {dailyPlans.map((plan, index) => (
            <div key={index} className="day-plan">
              <div className="day-header">
                <h3>Day {plan.day}</h3>
                {dailyPlans.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => removeDay(index)}
                    className="remove-day"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="form-group">
                <label>Activity</label>
                <input
                  type="text"
                  placeholder="What will you do today?"
                  value={plan.activity}
                  onChange={(e) => handlePlanChange(index, 'activity', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Estimated Budget ($)</label>
                <input
                  type="number"
                  placeholder="500"
                  value={plan.budget}
                  onChange={(e) => handlePlanChange(index, 'budget', e.target.value)}
                  min="0"
                />
              </div>
            </div>
          ))}

          <Button type="button" onClick={addDay} className="add-day-btn">
            + Add Another Day
          </Button>
        </div>

        <div className="form-actions">
          <Button type="submit" className="save-plan-btn">
            Save Trip Plan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Planner;