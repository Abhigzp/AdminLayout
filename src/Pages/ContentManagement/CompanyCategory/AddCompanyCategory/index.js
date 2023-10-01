import React, { useState } from "react";
import "./styles.css";
import { createCompanyData } from "../../../../Components/services/adminApi";
import 'react-toastify/dist/ReactToastify.css';
const AddCompanyCategory = () => {
  
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState({
    categoryName: "",
    seminarFee: "",
    currency: "",
    isPublished: "",
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  
  const saveCompanyData = async (e) => {
    e.preventDefault();
    try {
      const response = await createCompanyData(
        "api/v1/company-categories",
        formData
      );
      if (response.status === 200) {
        setFormData({
          categoryName: "",
          seminarFee: "",
          currency: "",
          isPublished: "",
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
  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Category Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Category Name:</label>
              <input
                type="text"
                name="categoryName"
                value={formData.categoryName}
                onChange={InputHandle}
              />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Currency:</label>
              <input
                type="text"
                name="currency"
                value={formData.currency}
                onChange={InputHandle}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Seminar Fee:</label>
              <input
                type="text"
                name="seminarFee"
                value={formData.seminarFee}
                onChange={InputHandle}
              />
            </div>
            <div className="form-col checkbox-style">
              <label>Is Published:</label>
              <input
                type="checkbox"
                name="isPublished"
                checked={formData.isPublished}
                style={{ height: "14px" }}
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

export default AddCompanyCategory;
