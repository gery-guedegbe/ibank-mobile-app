import { images } from "@/constants/theme";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface SettingItemProps {
  label: string;
  value?: string;
  onPress?: () => void;
  showArrow?: boolean;
}

const SettingItem = ({
  label,
  value,
  onPress,
  showArrow = true,
}: SettingItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between border-b border-[#ECECEC] py-5"
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {label}
      </Text>

      <View className="flex-row items-center gap-2">
        {value && (
          <Text className="font-poppins-semibold text-xs font-semibold leading-3 text-neutral-8">
            {value}
          </Text>
        )}

        {showArrow && (
          <Image
            source={images.arrow_left}
            className="h-4 w-4 rotate-180"
            style={{ tintColor: "#E0E0E0" }}
            resizeMode="contain"
          />
        )}
      </View>
    </Pressable>
  );
};

export default SettingItem;
