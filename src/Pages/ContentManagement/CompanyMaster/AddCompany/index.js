import React, { useState } from "react";
import styles from "./styles.module.css";
import { getNames } from "country-list";
import { addCompany } from "../../../../Components/services/adminApi";

const AddCompany = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState({
    companyCategoryId: "",
    companyName: "",
    companyCode: "",
    address1: "",
    countryId: "",
    stateCityId: "",
    companyNameOnBatch: "",
    address2: "",
    pinCode: "",
    isdCode: "",
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // some issues have with end point 
  const saveCompanyData = async (e) => {
    e.preventDefault();
    try {
      const response = await addCompany(
        "api/v1/Company",
        formData
      );
      if (response.status === 200) {
        setFormData({
          companyCategoryId: "",
          companyName: "",
          companyCode: "",
          address1: "",
          countryId: "",
          stateCityId: "",
          companyNameOnBatch: "",
          address2: "",
          pinCode: "",
          isdCode: "",
        });
      }
    } catch (error) {
      console.error("Error creating company data:", error);
    }
  };

  const InputHandle = (e) => {
    try {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } catch (error) {
      console.log("handle error", error);
    }
  };
  

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Company Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Category:</label>
              <select
                id="categoryName"
                name="companyCategoryId"
                value={formData.companyCategoryId}
                onChange={InputHandle}
              >
                <option value="">Select a category</option>
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
            <div className="form-col">
              <label className="mandatory-label">Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={InputHandle}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Company Code:</label>
              <input
                type="text"
                name="companyCode"
                value={formData.companyCode}
                onChange={InputHandle}
              />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Address Line 1 :</label>
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={InputHandle}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Address Line 2 :</label>
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={InputHandle}
              />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Country :</label>
              <select
                id="countryName"
                value={formData.countryId}
                name="countryId"
                onChange={InputHandle}
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
              <label >City :</label>
              <select
                
                name="stateCityId"
                value={formData.stateCityId} 
                onChange={InputHandle}
              >
                <option value="">Select a city</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-col">
              <label htmlFor="currency">Pincode :</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={InputHandle}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Company Name on Batch :</label>
              <input
                type="text"
                name="companyNameOnBatch"
                value={formData.companyNameOnBatch}
                onChange={InputHandle}
              />
            </div>
            <div className="form-col">
              <label htmlFor="currency">ISD Code :</label>
              <input
                type="number"
                name="isdCode"
                value={formData.isdCode}
                onChange={InputHandle}
              />
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

export default AddCompany;
