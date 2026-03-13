import SettingItem from "@/components/setting/SettingItem";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="absolute inset-0 bg-primary-1" />

      <View className="h-[20%] px-6 py-4">
        <View className="mt-4 flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              tintColor="#FFFFFF"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-white">
            Setting
          </Text>
        </View>
      </View>

      <View className="flex-1 rounded-t-[30px] bg-white">
        {/* Profile Section */}
        <View className="-mt-14 mb-6 items-center">
          <Image
            source={images.user_profile_image}
            className="h-[100px] w-[100px]"
            resizeMode="cover"
          />

          <Text className="mt-3 font-poppins-semibold text-base font-semibold leading-6 text-primary-1">
            Push Puttichai
          </Text>
        </View>

        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
        >
          <SettingItem label="Password" onPress={() => {}} />

          <SettingItem label="Touch ID" onPress={() => {}} />

          <SettingItem label="Languages" onPress={() => {}} />

          <SettingItem
            label="App information"
            onPress={() => router.push("/(setting)/app-information")}
          />

          <SettingItem
            label="Customer care"
            value="19008989"
            showArrow={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
