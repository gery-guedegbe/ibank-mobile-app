import { formatCardNumber } from "@/utils/format";
import React, { useMemo } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface CreditCardProps {
  bg: ImageSourcePropType;
  username: string;
  type: string;
  card_number: string;
  amount: string;
}

const CreditCard = ({
  bg,
  username,
  type,
  card_number,
  amount,
}: CreditCardProps) => {
  const { width } = useWindowDimensions();

  const { firstFour, dots, lastFour } = useMemo(
    () => formatCardNumber(card_number),
    [card_number],
  );

  return (
    <ImageBackground
      accessibilityRole="text"
      accessibilityLabel={`Carte de crédit de ${username}, solde ${amount} dollars`}
      source={bg}
      resizeMode="cover"
      style={{
        width: "100%",
        height: undefined,
        aspectRatio: 16 / 9,
      }}
      className="z-50 self-center"
    >
      <View className="flex flex-1 flex-col items-start px-12 py-6 shadow-lg">
        <Text className="font-poppins-regular text-2xl text-white">
          {username}
        </Text>

        <View className="mt-12 gap-3">
          <Text className="font-poppins-medium text-sm font-medium leading-[16px] text-white">
            {type}
          </Text>

          <View className="flex-row items-center gap-3">
            <Text className="font-poppins-regular text-lg tracking-widest text-white">
              {firstFour}
            </Text>

            <Text className="text-xl tracking-[4px] text-white">{dots}</Text>

            <Text className="text-xl tracking-[4px] text-white">{dots}</Text>

            <Text className="font-poppins-regular text-lg tracking-widest text-white">
              {lastFour}
            </Text>
          </View>

          <Text className="font-poppins-semibold text-xl font-semibold leading-6 text-white">{`$${amount}`}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CreditCard;
