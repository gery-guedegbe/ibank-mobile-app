import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TransferSucced = () => {
  const router = useRouter();

  const { amount, beneficiary } = useLocalSearchParams<{
    amount: string;
    beneficiary: string;
  }>();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="flex-1 gap-6 px-6 py-8">
        {/* Header */}
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              className="h-4 w-4"
              resizeMode="contain"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl text-neutral-1">
            Confirm
          </Text>
        </View>

        <View className="mt-10 flex-1 gap-8">
          <Image
            source={images.transfer_confirmed_image}
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
              Transfer successful!
            </Text>

            <Text className="text-center font-poppins-medium text-sm font-medium leading-[150%] text-neutral-1">
              You have successfully transferred{" "}
              <Text className="font-poppins-bold text-sm font-bold leading-[150%] text-semantic-1">
                ${amount}
              </Text>{" "}
              to{" "}
              <Text className="font-poppins-bold text-sm font-bold leading-[150%] text-primary-1">
                {beneficiary}
              </Text>{" "}
              !
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

export default TransferSucced;
