import axios from 'axios';

const API_BASE_URL = 'https://1uxdd7zf9g.execute-api.ap-south-1.amazonaws.com/dev/';
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEzYjIzMmIwZTZkOGM1NzRkMmUzOWUiLCJpYXQiOjE2OTYwOTY4ODIsImV4cCI6MTcyNzYzMjg4Mn0.fw16tlU3qTrOjiZ9U7VcnmDSXh6ntJMjoTaZO-CNJVo"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});



export const companyData = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching companyData:', error);
  }
};


export const locationListData = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching companyData:', error);
  }
};

export const listOfCompanies = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching companyData:', error);
  }
};

// login
export const eventListData = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error to fetching eventListData data:', error);
  }
};

export const createCompanyData = async (endPoint, formData) => {
  try {
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating company data:', error);
  }
};

export const addCompany = async (endPoint, formData) => {
  try {
    debugger;
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating company data:', error);
  }
};

export const addEventCategory = async (endPoint, formData) => {
  try {
    debugger;
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error EventCategory data:', error);
  }
};

export const createLocation = async (endPoint, formData) => {
  try {
    debugger;
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error Create location :', error);
  }
};

export const usersData = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};


export const data = async (endPoint) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export default api;
