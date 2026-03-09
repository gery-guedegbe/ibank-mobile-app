import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  item: {
    country: string;
    flag: ImageSourcePropType;
    buy: string;
    sell: string;
  };
}

export default function ExchangeRateItem({ item }: Props) {
  return (
    <View className="flex-row items-center border-b border-[#ECECEC] py-4">
      {/* Colonne Pays avec Drapeau */}
      <View className="flex-1 flex-row items-center gap-4">
        <Image
          source={item.flag}
          className="h-[30px] w-[40px] rounded-sm"
          resizeMode="cover"
        />

        <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-1">
          {item.country}
        </Text>
      </View>

      {/* Colonne Achat (Buy) */}
      <Text className="w-20 text-center font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {item.buy}
      </Text>

      {/* Colonne Vente (Sell) */}
      <Text className="w-20 text-right font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {item.sell}
      </Text>
    </View>
  );
}
