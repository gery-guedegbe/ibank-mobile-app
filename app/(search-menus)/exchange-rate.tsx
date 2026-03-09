import ExchangeRateItem from "@/components/exchange/ExchangeRateItem";
import { EXCHANGE_RATES } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExchangeRateScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="flex-1 gap-6 px-6 py-8">
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
            Exchange rate
          </Text>
        </View>

        <View className="flex-row">
          <Text className="flex-1 font-poppins-semibold text-base font-semibold leading-6 text-neutral-3">
            Country
          </Text>

          <Text className="w-20 text-center font-poppins-semibold text-base font-semibold leading-6 text-neutral-3">
            Buy
          </Text>

          <Text className="w-20 text-right font-poppins-semibold text-base font-semibold leading-6 text-neutral-3">
            Sell
          </Text>
        </View>

        <FlatList
          data={EXCHANGE_RATES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExchangeRateItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExchangeRateScreen;
