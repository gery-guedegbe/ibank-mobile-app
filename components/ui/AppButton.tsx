import { AppButtonProps } from "@/types/ui.types";
import React from "react";
import { Pressable, Text } from "react-native";
import Loading from "./Loading";

const AppButton = ({
  style,
  onPress,
  children,
  title,
  loading = false,
}: AppButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessible={true}
      onPress={onPress}
      style={[style]}
      className={`${loading ? "bg-transparent" : "bg-primary-1"} h-[44px] w-full items-center justify-center rounded-2xl font-bold`}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text className="font-poppins-medium text-sm font-medium leading-6 text-white">
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default AppButton;
