import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MobilePrepaidSucced = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="flex-1 gap-6 px-6 py-8">
        <View className="mt-10 flex-1 gap-8">
          <Image
            source={images.payment_successfull_image}
            resizeMode="contain"
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 16 / 9,
            }}
            // className="h-[188px] w-[342px]"
          />

          <View className="gap-4">
            <Text className="text-center font-poppins-semibold text-base font-semibold leading-6 text-primary-1">
              Payment successful!
            </Text>

            <Text className="text-center font-poppins-medium text-sm font-medium leading-[150%] text-neutral-1">
              You have successfully paid mobile prepaid!
            </Text>
          </View>

          <View className="mt-auto">
            <AppButton
              title="Back to Home"
              onPress={() => router.replace("/(tabs)/home")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobilePrepaidSucced;
