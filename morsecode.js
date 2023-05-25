import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const morseCodeMap = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  _: '..--.-',
  '"': '.-..-.',
  $: '...-..-',
  '@': '.--.-.',
  ' ': '/',
};

const reverseMorseCodeMap = {};
for (const key in morseCodeMap) {
  if (morseCodeMap.hasOwnProperty(key)) {
    const value = morseCodeMap[key];
    reverseMorseCodeMap[value] = key;
  }
}

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const convertToMorse = () => {
    let convertedText = '';
    const upperCaseText = inputText.toUpperCase();

    for (let i = 0; i < upperCaseText.length; i++) {
      const char = upperCaseText.charAt(i);
      if (char in morseCodeMap) {
        convertedText += morseCodeMap[char] + ' ';
      } else {
        convertedText += char;
      }
    }

    setOutputText(convertedText.trim());
  };

  const convertToText = () => {
    const words = inputText.trim().split(' ');
    let convertedText = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const chars = word.split('/');
      for (let j = 0; j < chars.length; j++) {
        const char = chars[j];
        if (char in reverseMorseCodeMap) {
          convertedText += reverseMorseCodeMap[char];
        } else {
          convertedText += char;
        }
      }
      convertedText += ' ';
    }

    setOutputText(convertedText.trim());
  };

  const clearFields = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Morse Code Converter</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter text or Morse code"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button title="Convert to Morse" onPress={convertToMorse} />
      <Button title="Convert to Text" onPress={convertToText} />
      <TextInput
        style={styles.outputField}
        placeholder="Result"
        value={outputText}
        editable={false}
      />
      <Button title="Clear" onPress={clearFields} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b1441',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  inputField: {
    width: '100%',
    height: 40,
    fontSize: 18,
    backgroundColor: '#7d2e85',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  outputField: {
    width: '100%',
    height: 100,
    fontSize: 18,
    backgroundColor: '#7d2e85',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default App;
