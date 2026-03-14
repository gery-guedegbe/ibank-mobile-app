import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SuccessWithdrawScreen = () => {
  const router = useRouter();

  const handleConfirm = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <View className="mb-10 w-full items-center">
          <Image
            source={images.transfer_confirmed_image}
            resizeMode="contain"
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 16 / 9,
            }}
          />
        </View>

        <View className="items-center gap-4">
          <Text className="text-center font-poppins-semibold text-base font-semibold leading-6 text-primary-1">
            Successful withdrawal!
          </Text>

          <Text className="px-4 text-center font-poppins-medium text-sm font-medium leading-[150%] text-neutral-1">
            You have successfully withdrawn money! Please check the balance in
            the card management section.
          </Text>
        </View>

        <View className="mt-12 w-full">
          <AppButton title="Confirm" onPress={handleConfirm} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessWithdrawScreen;
