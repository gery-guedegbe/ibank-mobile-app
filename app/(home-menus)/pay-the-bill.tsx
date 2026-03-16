import SearchMenu from "@/components/SearchMenu";
import { PAY_THE_BILL_MENUS } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PayTheBillScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="flex-1 gap-4 px-6 py-8">
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
            Pay the bill
          </Text>
        </View>

        <FlatList
          data={PAY_THE_BILL_MENUS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SearchMenu {...item} />}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        />
      </View>
    </SafeAreaView>
  );
};

export default PayTheBillScreen;
