import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface MessageItemProps {
  icon: ImageSourcePropType;
  icon_bg: string;
  title: string;
  subtitle: string;
  date: string;
  onPress: () => void;
}

const MessageItem = ({
  icon,
  icon_bg,
  title,
  subtitle,
  date,
  onPress,
}: MessageItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
      className="flex-row items-center gap-4 rounded-2xl p-4"
    >
      <View
        style={{ backgroundColor: icon_bg }}
        className="h-12 w-12 items-center justify-center rounded-xl"
      >
        <Image source={icon} className="h-6 w-6" resizeMode="contain" />
      </View>

      <View className="flex-1 gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="font-poppins-semibold text-base font-semibold leading-6 text-neutral-1">
            {title}
          </Text>

          <Text className="font-poppins-medium text-xs font-medium leading-4 text-neutral-3">
            {date}
          </Text>
        </View>

        <Text
          className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3"
          numberOfLines={1}
        >
          {subtitle}
        </Text>
      </View>
    </Pressable>
  );
};

export default MessageItem;
