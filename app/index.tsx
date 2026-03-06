import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-primary-1 px-6">
      <StatusBar barStyle={"light-content"} backgroundColor="#3629B7" />

      <Animated.View
        entering={FadeInDown.duration(700).springify()}
        accessibilityRole="text"
        accessibilityLabel="iBank logo"
        className="h-28 w-28 items-center justify-center rounded-2xl bg-white"
      >
        <Text className="font-poppins-bold text-[46px] font-bold text-primary-1">
          iB
        </Text>
      </Animated.View>
    </View>
  );
};

export default Index;
