import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useNavigation} from '@react-navigation/native';

export default function SignInScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 
  const navigation = useNavigation('');

  const handleSignin = () => {
    // Kiểm tra điều kiện
    if (email === '' || password === '') {
      setError('Email hoặc mật khẩu không được để trống');
    } else if (!validateEmail(email)) {
      setError('Email không hợp lệ');
    } else if (password.length < 6) {
      setError('Mật khẩu phải ít nhất 6 ký tự');
    } else {
      // Nếu tất cả điều kiện đúng, chuyển hướng
      navigation.navigate('MainTabs');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>XUAN NGUYEN</Text>
      <View style={styles.form}>
        <Text style={styles.signTitle}>Sign in</Text>
        <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail}
          style={styles.input} 
          keyboardType="email-address"
           autoCapitalize="none"
        />
        <TextInput 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input} 
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignin}>
            <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.account}>
          <Text style={styles.accountText}>Don't have an account? 
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.accountLink}> SIGN UP </Text>
          </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 50,
    lineHeight: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6E9FFF',
  },
  form: {
    width: '80%',
    marginTop: 20,
    height: 300,
  },
  signTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6E9FFF',
    lineHeight: 30,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#EDEDED',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    marginTop: 25,
    borderRadius: 7,
    height: 50,
    width: '40%',
    alignSelf: 'center',
  },
  signInButton: {
    backgroundColor: '#6E9FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  account: {
    marginTop: 20,
    alignSelf: 'center',
  },
  accountText: {
    color: '#6E9FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  accountLink: {
    color: '#6E9FFF',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
