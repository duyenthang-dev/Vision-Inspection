import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CardDetails = ({ text, imgUrl, desc }) => {
    return (
        <View style={styles.container}>
            <Image source={imgUrl} style={styles.img} />

            <View style={{
                display: "flex",
                flex: 0.8,
                justifyContent: "space-between",
            }}
            >
                <Text style={styles.text}>{text}</Text>
                <Text style = {styles.desc}>{desc}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: "#EFF5F8",
        height: 70,
        borderWidth: 1
    },
    img: {
        width: "40%",
        height: "100%",
        borderRadius: 10,
        borderWidth: 3
    },
    text: {
        color: "#61AF2B",
        fontWeight: "600",
        bottom: '0%',
        marginLeft: 8,
        fontWeight: "bold",
        flex: 0.5,
        alignItems: 'center',
    },
    desc: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
        marginRight: 8,
        flex: 0.5,
        alignItems: 'center'
    }
});

export default CardDetails;
