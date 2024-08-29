// import React, { createContext, useState, useEffect, useContext } from "react";
// import { supabase } from '../lib/supabaseClient';
// import { useNavigation } from '@react-navigation/native';

// const AuthContext = createContext();

// export const AuthProvider = ({ children}) => {
//   const [user, setUser] = useState(null);
  
//   const navigation = useNavigation();

//   // Hàm đăng nhập
//   const signIn = async (email, password) => {
//     try {
//         const { data, error } = await supabase.auth.signInWithPassword({ email, password });
//         if (error) throw error;
//         setUser(data.user);
//     } catch (error) {
//         console.error('Sign In Error:', error);
//     }
// };

//   useEffect(() => {
//     const getSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error) {
//         console.log('Error getting session:', error.message);
//       }
//       if (data.session?.user) {
//         setUser(data.session.user);
//         navigation.navigate('Home'); // Navigate to Home immediately
//       }
//     };

//     getSession();

//     const { data: subscription } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (session?.user) {
//           setUser(session.user);
//           navigation.navigate('Home'); // Navigate to Home immediately
//         }
//       }
//     );

//     return () => {
//       if (subscription && typeof subscription.unsubscribe === 'function') {
//         subscription.unsubscribe();
//       }
//     };
//   }, [navigation]);
//   //   return () => {
//   //    subscription?.unsubscribe();
//   //   };
//   // }, []);

//   useEffect(() => {
//     if (user) {
//       navigation.navigate('Home'); 
//     } 
//   }, [user, navigation]);

//   return (
//     <AuthContext.Provider value={{ user, signIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
