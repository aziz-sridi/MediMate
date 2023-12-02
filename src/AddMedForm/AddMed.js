import React, { useState } from "react";
import './AddMedd.css';
import { NavBar } from "../Home/NavBar";
function MedForm() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState({ days: "", months: "", years: "" });
  const [dailyPills, setDailyPills] = useState(0);
  const [isTakenForever, setIsTakenForever] = useState(true);
  const [timelines, setTimelines] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDurationChange(event) {
    const { name, value } = event.target;
    let newValue = value;
    if (value < 0) {
      newValue = 0;
    }
    setDuration((prevDuration) => ({ ...prevDuration, [name]: newValue }));
  }

  function handleDailyPillsChange(event) {
    const newDailyPills = event.target.value;
    if (newDailyPills <= 1) {
      setDailyPills(1);
      const newTimelines = [{ name: "", time: "" }];
      setTimelines(newTimelines);
    }
    else if (newDailyPills > 5) {
      setDailyPills(5);
      const newTimelines = Array.from({ length: 5 }, (_, index) => ({
        name: "",
        time: "",
      }));
      setTimelines(newTimelines);
    } else {
      setDailyPills(newDailyPills);
      const newTimelines = Array.from({ length: newDailyPills }, (_, index) => ({
        name: "",
        time: "",
      }));
      setTimelines(newTimelines);
    }
  }
  

  function handleIsTakenForeverChange(event) {
    setIsTakenForever(event.target.value === "true");
  }

  function handleTimelineChange(event, index) {
    const { name, value } = event.target;
    const updatedTimelines = [...timelines];
    updatedTimelines[index][name] = value;
    setTimelines(updatedTimelines);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted:", { name, duration, dailyPills, isTakenForever, timelines });
  }

  return (        
    <form onSubmit={handleSubmit}>
      <NavBar/>
    
      <h2> fill the Medication infos</h2>
      <div>
        <label htmlFor="medName">Name of Medication:</label>
        <input type="text" id="medName" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <fieldset>
          <legend>Duration of Medication:</legend>
        <div>
         
        <input
            type="radio"
            id="takenForever"
            value="true"
            onChange={handleIsTakenForeverChange}
            checked={isTakenForever === true}
          />
          <label htmlFor="takenForever">chronic</label>  
        <input
            type="radio"
            id="takenForDuration"
            value="false"
            onChange={handleIsTakenForeverChange}
            checked={isTakenForever === false}
          />
          <label htmlFor="takenForDuration">not chronic</label>
        </div>
        {!isTakenForever && (
          <div className="added">
            
              <legend>Duration:</legend>
            <div>
              <label htmlFor="durationDays">Days:</label>
              <input type="number" id="durationDays" name="days" value={duration.days} onChange={handleDurationChange} />
            </div>
            <div>
              <label htmlFor="durationMonths">Months:</label>
              <input
                type="number"
                id="durationMonths"
                name="months"
                value={duration.months}
                onChange={handleDurationChange}
              />
            </div>
            <div>
              <label htmlFor="durationYears">Years:</label>
              <input 
                type="number"
                id="durationYears"
                name="years"
                value={duration.years}
                onChange={handleDurationChange}
              />
            </div>
            
          </div>
         
          
        )}
         </fieldset>
      </div>
      
      
      <div>
        <label htmlFor="dailyPills">Number of Pills per Day:</label>
        <input type="number"
      id="dailyPills"
      value={dailyPills}
      onChange={handleDailyPillsChange}
/>
</div>
<div>
    {timelines.map((timeline, index) => (
      <div key={index}>
        <label>{`Time for pill ${index + 1}:`}</label>
        <input
          type="time"
          value={timeline.time}
          onChange={(event) => handleTimelineChange(event, index)}
        />
      </div>
    ))}
  </div>

  <button type="submit">Submit</button>
</form>
);
}

export default MedForm;