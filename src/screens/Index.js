// import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
// import React, { useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigation } from '@react-navigation/native';


// export default function Index() {
//     const { user } = useAuth();
//     const navigation = useNavigation();

//     useEffect(() => {
//         if (user) {
//             navigation.navigate('Home');
//           }
//         }, [user, navigation]);

//     if (user === undefined) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Welcome, {user.email}</Text> {/* Hiển thị thông tin người dùng */}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     loadingContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: 50,
//     },
// });
