import * as Font from "expo-font";

const useFonts = async () => {
   await Font.loadAsync({
      Inter_bold: require("../assets/fonts/Inter-Bold.ttf"), // Download .tff font file and use it here like this
   });
};

export default useFonts;
