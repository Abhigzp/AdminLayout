import React, { useState } from "react";
import styles from "./styles.module.css";

const AddNewSession = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Event Theme Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Name :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Session :</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Session Title :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Session Date :</label>
              <input
                type="date"
                value={selectedTime}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">From Time :</label>
              <input type="time" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">To Time :</label>
              <input type="time" required />
            </div>
          </div>
          
          <div className="form-row">
            
            <div className="form-col checkbox-style">
              <label htmlFor="checkbox">Is Published:</label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                style={{ height: "14px" }}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewSession;
