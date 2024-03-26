import React from "react";
import axios from "axios";

const submitFormData = async (formData) => {
  try {
    console.log(formData);
    const response = await axios.post(
      "http://localhost:8000/api/teams",
      formData
    );
    console.log(response.data); // Log the response from the backend
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; // Propagate the error back to the caller
  }
};

export default submitFormData;
