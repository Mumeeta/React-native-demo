import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";

import submitFormData from "../api"; 
import SelectDropdown from "react-native-select-dropdown";

export default function LisäätiimiScreen() {
  const [formData, setFormData] = useState({
    team_name: "",
    team_lead_name: "",
    team_lead_email: "",
    team_size: "",
  });
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const team_size_options = ["5-10", "11-15", "16-20"];

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const validateForm = () => { 
    console.log("validateForm constant is called");
    let errors = {}; 

    if (!formData.team_name) { 
        errors.team_name = 'Team name is required.'; 
    } 

     if (!formData.team_lead_name) { 
      errors.team_lead_name = 'Team lead name is required.'; 
  } 

    if (!formData.team_lead_email) { 
        errors.team_lead_email = 'Team email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(formData.team_lead_email)) { 
        errors.team_lead_email = 'Team email is invalid.'; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
  }; 
  
  const handleSubmit = async () => {
    validateForm(); 
    if (formData.team_name.trim() == "") {
      console.log("team name is empty");
    } else {
      console.log("team name:" + formData.team_name.trim() + ".");
    }
    // return;
    // if (!formData.team_name.trim() || !formData.team_lead_name.trim() || !formData.team_lead_email.trim() || !formData.team_size.trim()) {
    //   Alert.alert("Error", "Please fill in all required fields111.");
    //   return;
    // }
  
    // try {
    //   // Submit the form data using the submitFormData function
    //   await submitFormData(formData);
    //   Alert.alert("Success", "Form submitted successfully!");
    // } catch (error) {
    //   // Handle any errors that occur during form submission
    //   console.error("Error submitting form:", error);
    //   Alert.alert("Error", "An error occurred. Please try again later.");
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Rekisteröi tiimisi liikuntahaasteeseen!
          </Text>
          <Text style={styles.description}>
            Kerää työkavereistasi tiimi ja osallistukaa liikuntahaasteeseen.
            Rekisteröityäsi, saat sähköpostiisi linkin vahvistaaksesi
            osallistumisesi.
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Tiimin nimi"
            value={formData.team_name}
            onChangeText={(value) => handleChange("team_name", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tiimin johtajan nimi"
            value={formData.team_lead_name}
            onChangeText={(value) => handleChange("team_lead_name", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tiimin johtajan sähköposti"
            value={formData.team_lead_email}
            onChangeText={(value) => handleChange("team_lead_email", value)}
            keyboardType="email-address"
          />
          <View style={styles.selectDropdownContainer}>
            <Text style={styles.label}>Valitse tiimi koko</Text>
            <SelectDropdown
              data={team_size_options}
              defaultButtonText="Tiimi"
              onSelect={(selectedItem) =>
                handleChange("team_size", selectedItem)
              }
              buttonTextAfterSelection={(selectedItem) => selectedItem}
              rowTextForSelection={(item) => item}
            />
            <Text></Text>
            {/* Display error messages */} 
            {Object.values(errors).map((error, index) => ( 
                <Text key={index} style={[styles.error, { color: 'green' }]}> 
                    {error} 
                </Text> 
            ))} 
            <FlatButton text="Rekisteröidy" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </View>
  );
}

const FlatButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.formButton} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  description: {
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffff",
    padding: 16,
    width: "100%",
    borderRadius: 8, // Specify the desired value for borderRadius
    elevation: 3,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
  },
  selectDropdownContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  formButton: {
    alignItems: "center",
    backgroundColor: "#2d3748",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red", // Color for error messages
    marginBottom: 8,
  },
});
