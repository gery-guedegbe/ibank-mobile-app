import { images } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import CreditCard from "../card/CreditCard";
import AppButton from "../ui/AppButton";

const CardView = () => {
  return (
    <View className="mt-4 flex-1 ">
      <View className="mb-10 flex-1 gap-4">
        <CreditCard
          bg={images.visa_card_bg}
          username="Jonh Smith"
          type="Amazon Platinium"
          card_number="4756 6784 3354 9018"
          amount="3.469.52"
        />

        <CreditCard
          bg={images.master_card_bg}
          username="Jonh Smith"
          type="Amazon Platinium"
          card_number="4756 6784 3354 9018"
          amount="3.469.52"
        />
      </View>

      <View className="px-6">
        <AppButton title="Add card" />
      </View>
    </View>
  );
};

export default CardView;
