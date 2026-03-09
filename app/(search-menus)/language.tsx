import LanguageItem from "@/components/language/LanguageItem";
import { LANGUAGES } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LanguageScreen = () => {
  const router = useRouter();

  const [selectedId, setSelectedId] = useState("3");

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
            Language
          </Text>
        </View>

        <FlatList
          data={LANGUAGES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <LanguageItem
              item={item}
              isSelected={item.id === selectedId}
              onSelect={() => setSelectedId(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
