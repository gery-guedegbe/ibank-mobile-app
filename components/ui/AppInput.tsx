import { images } from "@/constants/theme";
import React, { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Pressable,
  TextInput,
  View,
} from "react-native";

interface AppInputProps {
  value: string | undefined;
  hasIcon?: boolean;
  icon?: ImageSourcePropType;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
}

const AppInput = ({
  value,
  hasIcon = false,
  icon,
  keyboardType = "default",
  placeholder,
  secureTextEntry = false,
  onChangeText,
  onFocus,
}: AppInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecured, setIsSecured] = useState(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecured(!isSecured);
  };

  return (
    <View className="h-[44px] w-full flex-row items-center justify-between rounded-2xl border border-neutral-7 px-2.5">
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel={placeholder}
        accessibilityHint="Tap to edit"
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isSecured}
        onChangeText={onChangeText}
        onBlur={() => setIsFocused(false)}
        onFocus={() => {
          setIsFocused(true);
          onFocus?.();
        }}
        placeholderTextColor="#CACACA"
        className="flex-1 font-poppins-medium font-medium leading-[150%] text-neutral-1"
      />

      {secureTextEntry && (
        <Pressable hitSlop={16} onPress={toggleSecureEntry}>
          <Image
            source={isSecured ? images.eye_close_icon : images.eye_open}
            resizeMode="contain"
            className="h-[20px] w-[20px]"
          />
        </Pressable>
      )}

      {hasIcon && (
        <Pressable hitSlop={16}>
          <Image
            source={icon}
            resizeMode="contain"
            className="h-[16px] w-[16px]"
          />
        </Pressable>
      )}
    </View>
  );
};

export default AppInput;
