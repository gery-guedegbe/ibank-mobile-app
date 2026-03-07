import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

interface MenuCardProps {
  title: string;
  icon: ImageSourcePropType;
  link: string;
}

const MenuCard = ({ title, icon, link }: MenuCardProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(link as RelativePathString)}
      style={{
        elevation: 2,
        boxShadow: "0px 4px 30px rgba(54, 41, 183, 0.07)",
      }}
      className="flex h-[100px] w-[30%] flex-col items-center justify-center gap-4 rounded-2xl p-2 shadow-card_2"
    >
      <Image source={icon} resizeMode="contain" className="h-[28px] w-[28px]" />

      <Text
        numberOfLines={2}
        className="text-center font-poppins-medium text-xs font-medium leading-4 text-neutral-8"
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default MenuCard;
