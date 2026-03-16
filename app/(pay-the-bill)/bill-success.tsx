import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";

const BillSuccessScreen = () => {
  const router = useRouter();
  const { type, total } = useLocalSearchParams<{
    type: string;
    total: string;
  }>();

  // Formatage du titre selon le type de facture
  const billTypeLabel = type === "electric" ? "electric bill" : "bill";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-8">
        {/* Header - Identique aux autres pages de succès */}
        <View className="flex-row items-center gap-3">
          <Pressable
            hitSlop={16}
            onPress={() => router.replace("/(tabs)/home")}
          >
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

        <View className="flex-1 items-center justify-center">
          {/* Illustration de succès - Conforme à Electric bill #5 */}
          <Image
            source={images.payment_successfull_image}
            className="h-64 w-full"
            resizeMode="contain"
          />

          <View className="mt-8 items-center gap-4">
            <Text className="text-center font-poppins-semibold text-base text-primary-1">
              Transaction successfully!
            </Text>

            <Text className="text-center font-poppins-medium text-sm leading-6 text-neutral-1">
              You 've pay your {billTypeLabel}
              {"\n"}
              <Text className="text-secondary-1 font-poppins-bold">
                Total: ${total}
              </Text>
            </Text>
          </View>
        </View>

        <View className="mt-auto">
          <AppButton
            title="Back to Home"
            onPress={() => router.replace("/(tabs)/home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BillSuccessScreen;
