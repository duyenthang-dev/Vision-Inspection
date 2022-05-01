import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import AppLoading from "expo-app-loading";
import {
   useFonts,
   Inter_100Thin,
   Inter_200ExtraLight,
   Inter_300Light,
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_800ExtraBold,
   Inter_900Black,
} from "@expo-google-fonts/inter";

const HeaderTab = () => {
   let [fontsLoaded] = useFonts({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black,
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

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
