import { images } from "@/constants/theme";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface Props {
  item: {
    id: string;
    name: string;
    flag: ImageSourcePropType;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export default function LanguageItem({ item, isSelected, onSelect }: Props) {
  return (
    <Pressable
      onPress={onSelect}
      className="flex-row items-center border-b border-[#ECECEC] py-5"
    >
      <View className="flex-1 flex-row items-center gap-4">
        <Image
          source={item.flag}
          className="h-[30px] w-[40px] rounded-sm"
          resizeMode="cover"
        />

        <Text
          className={`font-poppins-medium text-base font-medium ${isSelected ? "text-neutral-1" : "text-neutral-3"}`}
        >
          {item.name}
        </Text>
      </View>

      {isSelected && (
        <Image
          source={images.check_blue_icon}
          className="h-[16px] w-[16px]"
          resizeMode="contain"
        />
      )}
    </Pressable>
  );
}
