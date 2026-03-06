import { COLORS } from "@/constants/theme";
import React from "react";
import { ActivityIndicator, ActivityIndicatorProps, View } from "react-native";

const Loading = ({
  size = "large",
  color = COLORS.primary[1],
}: ActivityIndicatorProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
