import { InterestRate } from "@/types/ui.types";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  item: InterestRate;
}

export default function InterestRateItem({ item }: Props) {
  return (
    <View className="flex-row items-center border-b border-b-[#ECECEC] py-4">
      {/* Colonne 1 : Kind (Prend l'espace restant) */}
      <Text className="flex-1 font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {item.kind}
      </Text>

      {/* Colonne 2 : Deposit (Largeur fixe pour l'alignement) */}
      <Text className="w-20 text-center font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {item.deposit}
      </Text>

      {/* Colonne 3 : Rate (Aligné à droite avec couleur spécifique) */}
      <Text className="w-20 text-right font-poppins-medium text-base font-medium leading-6 text-primary-1">
        {item.rate}
      </Text>
    </View>
  );
}
