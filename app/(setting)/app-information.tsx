import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row items-center justify-between border-b border-[#ECECEC] py-5">
    <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-1">
      {label}
    </Text>

    <Text className="font-poppins-semibold text-base font-semibold leading-6 text-primary-1">
      {value}
    </Text>
  </View>
);

const AppInformation = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 gap-4 px-6 py-4">
        {/* Header simple */}
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
            App information
          </Text>
        </View>

        <Text className=" mt-4 text-center font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
          CaBank E-mobile Banking
        </Text>

        <View className="gap-2">
          <InfoRow label="Date of manufacture" value="Dec 2019" />
          <InfoRow label="Version" value="9.0.2" />
          <InfoRow label="Language" value="English" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppInformation;
