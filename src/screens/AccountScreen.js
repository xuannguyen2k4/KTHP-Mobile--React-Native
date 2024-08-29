import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/sunflower.jpg")}
        style={styles.avatar}
      />
      <Text style={styles.name}>Xuan</Text>
      <Text style={styles.email}>nxuan2k4@gmail.com</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Major:</Text>
        <Text style={styles.value}>Software Engineering</Text>
        
        <Text style={styles.label}>University:</Text>
        <Text style={styles.value}>CMC University</Text>
        
        <Text style={styles.label}>Hobbies:</Text>
        <Text style={styles.value}>Reading, Environmental Activities</Text>
      </View>
      
      <Button
        title="Edit Profile"
        buttonStyle={styles.button}
        onPress={() => console.log('Edit Profile pressed')}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
});




