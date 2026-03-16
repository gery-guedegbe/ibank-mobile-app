import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/ui/AppButton";
import { images } from "@/constants/theme";
import { useSaveStore } from "@/store/save-online.store";

const SaveOnlineSuccess = () => {
  const router = useRouter();
  const { total } = useLocalSearchParams<{ total: string }>();
  const clearSaveData = useSaveStore((state) => state.clearSaveData);

  const handleFinish = () => {
    clearSaveData();
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-8">
        {/* Header - Cohérence avec Confirm */}
        <View className="flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={handleFinish}>
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
          {/* Illustration de succès spécifique au Saving */}
          <Image
            source={images.save_online_image}
            className="h-64 w-full"
            resizeMode="contain"
          />

          <View className="mt-8 items-center gap-4">
            <Text className="text-center font-poppins-semibold text-base text-primary-1">
              Saving successful!
            </Text>

            <Text className="px-4 text-center font-poppins-medium text-sm leading-6 text-neutral-1">
              You have successfully created a new time deposit. Your estimated
              balance at maturity will be{" "}
              <Text className="text-secondary-1 font-poppins-bold">
                ${total}
              </Text>
            </Text>
          </View>
        </View>

        {/* Bouton de retour à l'accueil */}
        <View className="mt-auto">
          <AppButton title="Back to Home" onPress={handleFinish} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SaveOnlineSuccess;
