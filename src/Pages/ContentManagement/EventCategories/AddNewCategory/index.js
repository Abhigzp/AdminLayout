import React, { useState } from "react";
import styles from "./styles.module.css"
import {addEventCategory} from '../../../../Components/services/adminApi'
const AddNewCategory = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData,setFormData]=useState({
    eventCategoryName:"",
    showInOrder:"",
    isPublished:""
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const saveCompanyData = async (e) => {
    e.preventDefault();
    try {
      const response = await addEventCategory(
        "api/v1/EventCategory",
        formData
      );
      if (response.status === 200) {
        setFormData({
          eventCategoryName:"",
          showInOrder:"",
          isPublished:""
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
        <div className="title"></div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            
            <div className="form-col">
              <label className="mandatory-label">Event Category Name :</label>
              <input type="text" name="eventCategoryName" value={formData.eventCategoryName} onChange={InputHandle} />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Show In Order :</label>
              <input type="text" name="showInOrder" value={formData.showInOrder}  onChange={InputHandle}/>
            </div>
          </div>
          <div className="form-row">
          <div className="form-col checkbox-style">
              <label htmlFor="checkbox">Is Published:</label>
              <input type="checkbox"  name="isPublished" value={formData.isPublished} onChange={InputHandle}  style={{height: "14px"}}/>
            </div>         
          </div>
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn" onClick={(e) => saveCompanyData(e)}>Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewCategory;
