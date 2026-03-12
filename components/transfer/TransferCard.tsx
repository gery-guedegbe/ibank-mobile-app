import React from "react";
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

interface TransferCardProps {
  icon: ImageSourcePropType;
  title: string;
  isSelected: boolean;
  onSelect: () => void;
}

const TransferCard = ({
  icon,
  title,
  isSelected,
  onSelect,
}: TransferCardProps) => {
  return (
    <Pressable
      onPress={onSelect}
      style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
      className={`mr-4 h-[100px] w-[120px] flex-1 items-start justify-center gap-3 rounded-2xl px-3 ${isSelected ? "bg-primary-1" : "bg-neutral-5"}`}
    >
      <Image source={icon} resizeMode="contain" className="h-[28px] w-[28px]" />

      <Text className="w-[80%] text-left font-poppins-medium text-xs font-medium leading-4 text-neutral-6">
        {title}
      </Text>
    </Pressable>
  );
};

export default TransferCard;
