import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [mode, setMode] = useState('login');
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Button title="Login" onPress={() => setMode('login')} />
        <Button title="Signup" onPress={() => setMode('register')} />
      </View>

      {/* Login Input */}
      {mode === 'login' ? (
        <TextInput
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
      ) : null}

      {/* Register Input */}
      {mode === 'register' ? (
        <TextInput
          placeholder="Enter Email"
          keyboardType="email-address"
          value={value}
          onChangeText={setValue}
          style={styles.input}
        />
      ) : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});