import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";


const HeaderTab = () => {
   

   return (
      <View style={styles.headerContainer}>
         <Text style={styles.logoText}>BK Inspector</Text>
         <View style={styles.icons}>
            <AntDesign name="search1" size={24} color="black" style={{marginRight: 15}}/>
            <AntDesign name="bars" size={24} color="black" />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
   logoText: {
      fontFamily: "Inter_700Bold",
      fontSize: 24,
   },

   icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
   }
});

export default HeaderTab;
