import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CompanyHashScreen = () => {
  const [companyHash, setCompanyHash] = useState('');
  const [hashInputVisible, setHashInputVisible] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('companyHash')
      .then((storedHash) => {
        if (storedHash) {
          setHashInputVisible(true);
          console.log('Company has is stored now.');
        }
      })
      .catch((error) => console.error('Error reading data from AsyncStorage:', error));
  }, []);

  const handleSave = () => {
    const regex = /^\d{3}-[A-Z]{3}$/;
    if (!regex.test(companyHash)) {
      alert('Invalid company hash format. Please use the format "000-XXX".');
      return;
    }

    AsyncStorage.setItem('companyHash', companyHash)
      .then(() => {
        setHashInputVisible(false);
        console.log('Company has is stored now.!!!!');
      })
      .catch((error) => console.error('Error saving data to AsyncStorage:', error));
  };

  if (!hashInputVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hash code</Text>
      <TextInput
        style={styles.input}
        placeholder="000-XXX"
        value={companyHash}
        onChangeText={(value) => setCompanyHash(value)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default CompanyHashScreen;