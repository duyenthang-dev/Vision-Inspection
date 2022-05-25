import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },

   titleText: {
      fontSize: 18,
      fontFamily: "Inter_600SemiBold",
      color: "#021523",
      textTransform: "uppercase",
   },

   primaryText: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: "#021523",
   },

   mediumText: {
      fontSize: 15,
      fontFamily: "Inter_500Medium",
      color: "#021523",
   },
   
   subText: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: "#818EA0",
   },

   paragraph: {
      marginVertical: 8,
      lineHeight: 20,
   },
});
