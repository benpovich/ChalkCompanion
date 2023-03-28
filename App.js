import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import * as db_operations from './db_operations';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');

  const handleSetPrompt = async () => {
    await db_operations.setPrompt(prompt);
    const newPrompt = await db_operations.getPrompt();
    setCurrentPrompt(newPrompt.text);
    setPrompt('');
  };

  useEffect(() => {
    const fetchCurrentPrompt = async () => {
      const prompt = await db_operations.getPrompt();
      setCurrentPrompt(prompt.text);
    };

    fetchCurrentPrompt();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.header}>Prompt Input</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter prompt"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Set Prompt" onPress={handleSetPrompt} />
      <Text style={styles.currentPrompt}>Current Prompt: {currentPrompt}</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#663399',
  },
  input: {
    borderWidth: 1,
    borderColor: '#663399',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    height: 50,
    borderRadius: 10,
    color: '#663399',
  },
  currentPrompt: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#663399',
  },
});

export default App;
