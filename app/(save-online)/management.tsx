import { SAVINGS_DATA } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SavingCard = ({ item }: { item: (typeof SAVINGS_DATA)[0] }) => (
  <View
    className="mb-4 rounded-2xl p-4"
    style={{ boxShadow: "0px 4px 30px rgba(54, 41, 183, 0.07)" }}
  >
    {/* Header du compte */}
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="font-poppins-semibold text-base text-neutral-1">
        Account
      </Text>

      <Text className="font-poppins-semibold text-base text-neutral-1">
        {item.accountNumber}
      </Text>
    </View>

    <View className="gap-y-2.5">
      <View className="flex-row justify-between">
        <Text className="font-poppins-medium text-xs text-neutral-3">From</Text>

        <Text className="font-poppins-semibold text-xs text-primary-1">
          {item.from}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="font-poppins-medium text-xs text-neutral-3">To</Text>

        <Text className="font-poppins-semibold text-xs text-primary-1">
          {item.to}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="font-poppins-medium text-xs text-neutral-3">
          Time deposit
        </Text>

        <Text className="font-poppins-semibold text-xs text-primary-1">
          {item.duration}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="font-poppins-medium text-xs text-neutral-3">
          Interest rate
        </Text>
        <Text className="font-poppins-semibold text-xs text-primary-1">
          {item.rate}
        </Text>
      </View>
    </View>
  </View>
);

const ManagementScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 px-6 py-8">
        {/* Header avec retour */}
        <View className="mb-6 flex-row items-center gap-4">
          <Pressable hitSlop={20} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl text-neutral-1">
            Management
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {SAVINGS_DATA.map((item) => (
            <SavingCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ManagementScreen;
