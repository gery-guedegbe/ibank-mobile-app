import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

interface AppCheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label?: React.ReactNode;
}

const AppCheckbox = ({ value, onValueChange, label }: AppCheckboxProps) => {
  return (
    <View className="flex-row items-center gap-3">
      <Pressable
        onPress={() => onValueChange(!value)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: value }}
        hitSlop={10}
        className={`h-6 w-6 items-center justify-center rounded-md border-2 ${
          value ? "border-primary-1 bg-white" : "border-neutral-4 bg-white"
        }`}
      >
        {value && <Ionicons name="checkmark" size={16} color="#3629B7" />}
      </Pressable>

      {label && <View className="flex-1">{label}</View>}
    </View>
  );
};

export default AppCheckbox;
