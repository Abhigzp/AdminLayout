import React, { useState } from "react";
import { getNames } from "country-list";
import { createLocation } from "../../../../Components/services/adminApi";

const AddLocation = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState({
    locationType: "",
    countryState: "",
    locationName: "",
  });

  const saveCompanyData = async (e) => {
    e.preventDefault();
    try {
      const response = await createLocation("api/v1/location", formData);
      if (response.status === 200) {
        setFormData({
          locationType: "",
          countryState: "",
          locationName: "",
        });
      }
    } catch (error) {
      console.error("Error creating company data:", error);
    }
  };

  const InputHandle = (e) => {
    try {
      const { name, value, type, checked } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    } catch (error) {
      console.log("handle error", error);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Location Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Select Type:</label>
              <select
                id="categoryName"
                name="locationType"
                value={formData.locationType}
                onChange={InputHandle}
              >
                <option value="">Select options</option>
                <option value="city">city</option>
                <option value="country">country</option>
                <option value="state">state</option>
              </select>
            </div>
            <div className="form-col">
              <label className="mandatory-label">Location Name:</label>
              <input
                type="text"
                name="locationName"
                value={formData.locationName}
                onChange={InputHandle}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
              <select
                id="countryName"
                onChange={InputHandle}
                name="countryState"
                value={formData.countryState}
              >
                <option value="">Select a country</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <button
                type="submit"
                className="btn"
                onClick={(e) => saveCompanyData(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddLocation;
