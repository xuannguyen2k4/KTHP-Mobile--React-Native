import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { CartContext } from '../context/CartContext'; // Adjust import path
import { useNavigation } from '@react-navigation/native';


// Define the slides array here
const slides = [
  {
    key: 1,
    title: 'Fashion Clothing!',
    text: 'E-commerce is the buying and selling of goods and services online. It allows businesses to reach customers worldwide',
    image: require('../assets/imgs/Group3.png'),
    backgroundColor: '#FFF5F5',
  },
  {
    key: 2,
    title: 'Trending fashion',
    text: 'Up to 50% off. Do not miss the deal. Get quality at affordable prices. We serve you better',
    image: require('../assets/imgs/Card.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Shop Anytime, Anywhere.',
    text: 'E-commerce reduces costs for businesses. It also provides a vast selection of products to customers. This digital marketplace is changing the way we shop and do business.',
    image: require('../assets/imgs/Group1.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Start Shopping Today!',
    text: 'Discover the Future of Shopping. Thousands of Products at Your Fingertips. Shop Now!',
    image: require('../assets/imgs/Group2.png'),
    backgroundColor: '#22bcb5',
  }
];

const OnboardingScreen = ({ navigation }) => {
  const onDone = () => {
    navigation.navigate('SignIn');

  };


  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onDone}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  dot: {
    backgroundColor: '#DDD',
  },
  activeDot: {
    backgroundColor: '#FF4081',
  },
});

export default OnboardingScreen;
