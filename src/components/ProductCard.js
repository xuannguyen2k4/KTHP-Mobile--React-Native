import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} VNĐ </Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(item);
          }}
        >
          {item.isFavorite ? (
            <Image
              source={require("../assets/favoriteFilled.png")}
              style={styles.faviorate}
            />
          ) : (
            <Image
              source={require("../assets/favorite.png")}
              style={styles.faviorate}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    //position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
    //fontFamily: fonts.medium,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
});
