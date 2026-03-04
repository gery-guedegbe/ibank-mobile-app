import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../styles/global.css";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Black-Italic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Bold-Italic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
    "Poppins-Extra-Bold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Extra-Bold-Italic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "Poppins-Extra-Light": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Extra-Light-Italic": require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Medium-Italic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Semi-Bold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Semi-Italic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Thin-Italic": require("../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
