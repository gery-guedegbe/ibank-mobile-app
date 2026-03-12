import { images } from "@/constants/theme";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface BeneficiaryCardProps {
  icon: ImageSourcePropType;
  name: string;
  isPlusBtn: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const BeneficiaryCard = ({
  icon,
  name,
  isPlusBtn = false,
  isSelected,
  onSelect,
}: BeneficiaryCardProps) => {
  return (
    <Pressable
      style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
      onPress={onSelect}
      className={`mr-4 h-[120px] w-[100px] flex-1 items-center justify-center gap-3 rounded-2xl px-3 ${isSelected && !isPlusBtn ? "bg-primary-1" : "bg-neutral-6"}`}
    >
      {isPlusBtn ? (
        <View className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-neutral-4">
          <Image
            source={images.add_icon}
            resizeMode="contain"
            className="flex-1"
          />
        </View>
      ) : (
        <View className="gap-3">
          <Image
            source={icon}
            resizeMode="contain"
            className="h-[60px] w-[60px]"
          />

          <Text
            className={`text-center font-poppins-medium text-sm font-medium leading-[150%] ${isSelected ? "text-neutral-6" : "text-neutral-1"}`}
          >
            {name}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default BeneficiaryCard;
