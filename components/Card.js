import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Card = ({ text, imgUrl, desc }) => {
   return (
      <View style={styles.container}>
         <View
            style={{
               display: "flex",
               flexDirection: "row",
               height: "50%",
               justifyContent: "space-between",
            }}
         >
            <View style={{position: "relative"}}>
               <Text style={styles.text}>{text}</Text>
            </View>
            <Image source={imgUrl} style={styles.img} />
            
         </View>
         <View>
            <Text style = {styles.desc}>{desc}</Text>
         </View>
         
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginRight: 20,
      borderRadius: 10,
      backgroundColor: "#EFF5F8",
      width: 170,
      height: 150,
   },
   img: {
      width: "50%",
      height: "100%",
      borderTopRightRadius: 10
   },
   text: {
      color: "#61AF2B",
      fontWeight: "600",
      position: "absolute",
      bottom: '0%',
      marginLeft: 8,
      fontWeight: "bold",
      
   },
   desc: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 8,
      marginTop: 10
   }
});

export default Card;
