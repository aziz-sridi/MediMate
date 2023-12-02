import React, { useState } from "react";
import './AddAppointment.css';
import { NavBar } from "../Home/NavBar";

function AddAppointment() {
  const [doctorName, setDoctorName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [hospital, setHospital] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleDoctorNameChange(event) {
    setDoctorName(event.target.value);
  }

  function handleSpecialityChange(event) {
    setSpeciality(event.target.value);
  }

  function handleHospitalChange(event) {
    setHospital(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted:", { doctorName, speciality, hospital, date, time });
  }

  return (
    <form onSubmit={handleSubmit}>
      <NavBar/>
      <h2>Add Appointment</h2>
      
      <div>
        <label htmlFor="doctorName">Doctor Name:</label>
        <input type="text" id="doctorName" value={doctorName} onChange={handleDoctorNameChange} placeholder="Dr ..."/>
      </div>
      <div>
        <label htmlFor="speciality">Speciality:</label>
        <input type="text" id="speciality" value={speciality} onChange={handleSpecialityChange} placeholder="....."/>
      </div>
      <div>
        <label htmlFor="hospital">Hospital:</label>
        <input type="text" id="hospital" value={hospital} onChange={handleHospitalChange} placeholder="....."/>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange}/>
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={handleTimeChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddAppointment;
