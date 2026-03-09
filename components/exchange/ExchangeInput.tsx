import { images } from "@/constants/theme";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  value: string;
  currency: string;
  onChangeText?: (text: string) => void;
  onCurrencyPress: () => void;
  editable?: boolean;
}

const ExchangeInput = ({
  label,
  value,
  currency,
  onChangeText,
  onCurrencyPress,
  editable = true,
}: Props) => {
  return (
    <View className="w-full gap-2">
      <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-8">
        {label}
      </Text>

      <View className="h-[44px] w-full flex-row items-center rounded-2xl border border-neutral-5 bg-white px-4 focus:border-primary-1">
        <TextInput
          keyboardType="numeric"
          value={value}
          onChangeText={onChangeText}
          placeholder="0.00"
          editable={editable}
          placeholderTextColor="#CACACA"
          className="flex-1 font-poppins-medium text-base text-neutral-1"
        />

        <View className="mx-3 h-6 w-[1px] bg-neutral-5" />

        <Pressable
          onPress={onCurrencyPress}
          className="ml-2.5 flex-row items-center gap-2"
          hitSlop={12}
        >
          <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-4">
            {currency}
          </Text>

          <Image
            source={images.exchange_switch_icon}
            className="h-[24px] w-[12px]"
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ExchangeInput;
