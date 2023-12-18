import {
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image,
        FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Cart = () => {
        const [counter, setcounter] = useState(0);

        const cards = [
                {
                        id: 1,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 2,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 3,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 4,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 5,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 6,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 7,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 8,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
                {
                        id: 9,
                        name: "shoes1",
                        price: "INR 1074",
                        img: "https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg",
                },
        ];

        const renderitems = ({ item }) => {
                return (
                        <View style={styles.cards}>
                                <View style={styles.leftcard}>
                                        <Text style={styles.leftone}>
                                                {item.name}
                                        </Text>
                                        <Text style={styles.lefttwo}>
                                                {item.price}
                                        </Text>
                                        <TouchableOpacity
                                                style={styles.cardbtn}
                                                onPress={() => {
                                                        setcounter(counter + 1);
                                                }}
                                        >
                                                <Text
                                                        style={{
                                                                color: "white",
                                                        }}
                                                >
                                                        Add to Cart
                                                </Text>
                                        </TouchableOpacity>
                                </View>
                                <View style={styles.imageContainer}>
                                        <Image
                                                source={{ uri: item.img }}
                                                style={styles.image}
                                        />
                                </View>
                        </View>
                );
        };

        return (
                <View style={{ flex: 1, backgroundColor: "#F0EEF0" }}>
                        {/* Navbar section */}
                        <View style={styles.navbar}>
                                <Text style={styles.navbartxt}>Redux App</Text>

                                <TouchableOpacity style={styles.navbarbtn}>
                                        <View>
                                                <Text style={styles.navbartxt}>
                                                        {counter}
                                                </Text>
                                        </View>
                                </TouchableOpacity>
                        </View>
                        {/* Cart section */}
                        <View style={styles.cart}>
                                <FlatList
                                        data={cards}
                                        renderItem={renderitems}
                                        keyExtractor={(item) => item.id}
                                />
                        </View>
                </View>
        );
};

const styles = StyleSheet.create({
        navbar: {
                flex: 0.12,
                justifyContent: "space-between",
                flexDirection: "row",
                backgroundColor: "#F0EEF0",
        },
        navbartxt: {
                marginHorizontal: 50,
                marginTop: 70,
                fontWeight: "800",
                fontSize: 20,
        },

        cart: {
                flex: 0.88,
                // backgroundColor:"green"
        },
        cards: {
                marginTop: 20,
                marginHorizontal: 30,
                borderWidth: 1,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
        },
        image: {
                width: 100,
                height: 100,
        },
        cardbtn: {
                backgroundColor: "#0B720E",
                borderRadius: 10,
                padding: 5,
                marginTop: 13,
        },
});

export default Cart;
