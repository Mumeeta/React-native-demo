import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import TimePicker from "react-native-modal-datetime-picker";

export default function KirjaaScreen() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const teamOptions = ["1", "2", "3", "4"];

  const handleDurationChange = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    setDuration({ hours, minutes });
    setTimePickerVisible(false); 
  };

  const handleSubmit = () => {
    if (!selectedTeam) {
      Alert.alert("Error", "Please select a team.");
      return;
    }

    if (duration.hours === 0 && duration.minutes === 0) {
      Alert.alert("Error", "Please select a duration.");
      return;
    }
    console.log("Form submitted");
    console.log("Selected Team:", selectedTeam);
    console.log("Selected Duration:", duration);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kirjaa liikuntasuorituksesi.</Text>
          <Text style={styles.description}>
            Valitse tiimi, ja syötä kesto minuuteissa.
          </Text>
        </View>
        <View style={styles.form}>
          <SelectDropdown
            data={teamOptions}
            defaultButtonText="Tiimisi"
            onSelect={(selectedItem) => setSelectedTeam(selectedItem)}
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
          />
          <View style={styles.timePickerContainer}>
            <Text style={styles.label}>Ilmoituksen aika</Text>
            <Button
              title="Valitse aika"
              onPress={() => setTimePickerVisible(true)}
            />
            <TimePicker
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={(value) => handleDurationChange(value)}
              onCancel={() => setTimePickerVisible(false)}
            />
          </View>
          <FlatButton text="Kirjaa" onPress={handleSubmit} />
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
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    borderRadius: 8,
    elevation: 3,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 10,
  },
  description: {
    color: "#333",
  },
  form: {
    width: "100%",
  },
  timePickerContainer: {
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
});
