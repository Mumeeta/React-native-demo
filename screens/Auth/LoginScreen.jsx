import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';

export default function LoginScreen() {
	const [email, setEmail] = useState('');

	return (
		<View
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>This is the login screen</Text>
      </View>
	)
}
