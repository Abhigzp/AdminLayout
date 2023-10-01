import React, { useState } from "react";
import styles from "./styles.module.css";

const AddEventOrganizer = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Event Organizer Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Org Short Name :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Org Name :</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Address :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label>Alternate Address :</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Logo :</label>
              <input type="file" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Contact Person :</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Contact Person No :</label>
              <input type="number" required />
            </div>
            <div className="form-col">
              <label>Contact Email :</label>
              <input type="email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label>Contact Fax :</label>
              <input type="text" />
            </div>
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

export default AddEventOrganizer;
