import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation} from '@react-navigation/native';
//import { supabase } from '../lib/supabaseClient';
//import { useAuth } from '../context/AuthContext';

export default function SignUpScreen() {
   // const { user } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [full_name, setFullName] = useState('');
    const [error, setError] = useState('');

    const navigation = useNavigation('');

    // const handleSignup = async () => {
    //     const { user, error } = await supabase.auth.signUp({ email, password });

    //     if (error) {
    //         setError(error.message);
    //     } else {
    //         // Save additional user info to your users table here
    //         const { error: profileError } = await supabase
    //             .from('users')
    //             .insert([{ id: user.id, full_name }]);
            
    //         if (profileError) {
    //             setError(profileError.message);
    //         } else {
    //             navigation.navigate('Home');
    //         }
    //     }
    // };

    const handleSignup = async () => {
        // Basic input validation
        if (!validateEmail(email)) {
          setError('Invalid email format.');
          return;
        }
    
        if (password.length < 6) {
          setError('Password must be at least 6 characters long.');
          return;
        }
    
      };

      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    


    return (
        <View style={styles.container}> 
            <Text style={styles.logo}>Xuan Nguyen</Text>
            <View style={styles.form}>
                <Text style={styles.signTitle}>Sign up</Text>
                <TextInput 
                    placeholder="Name" 
                    value={full_name} 
                    onChangeText={setFullName}
                    style={styles.input} 
                />
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
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.account}>
                    <Text style={styles.accountText}>Already have an account? 
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.accountLink}> Sign In</Text>
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
    signUpButton: {
        backgroundColor: '#6E9FFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
      },
      signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        marginTop: 20,
        backgroundColor: '#6E9FFF',
        borderRadius: 5,
        height: 40,
        width: '100%',
        alignSelf: 'center',
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
        fontWeight: 'bold',
    },
});

