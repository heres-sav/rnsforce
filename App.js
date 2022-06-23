/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>Username</Text>
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.inputStyle}
        />
        <Text style={styles.labelStyle}>Password</Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          style={styles.inputStyle}
        />
        <Text style={styles.labelStyle}>Security Token</Text>
        <TextInput
          value={token}
          onChangeText={text => setToken(text)}
          style={styles.inputStyle}
        />
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Text style={styles.buttonLabelStyle}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerStyle: {
    width: '80%',
    padding: 22,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D8DDE6',
    borderRadius: 5
  },
  labelStyle: {
    fontSize: 14,
    color: '#54698d',
    marginBottom: 12
  },
  inputStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D8DDE6',
    borderRadius: 5,
    color: '#000',
    padding: 16,
    fontSize: 18,
    marginBottom: 16
  },
  buttonStyle: {
    backgroundColor: '#0070d2',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20
  },
  buttonLabelStyle: {
    color: '#fff'
  }
});

export default App;
