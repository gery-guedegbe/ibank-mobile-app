import React from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Card {
  id: string;
  label: string;
  balance: string;
  fullNumber: string;
}

interface CardSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  cards: Card[];
  onSelect: (card: Card) => void;
  selectedCardId?: string;
}

const CardSelectionModal = ({
  visible,
  onClose,
  cards,
  onSelect,
  selectedCardId,
}: CardSelectionModalProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      className="flex-1"
    >
      <View className="flex-1 justify-end">
        <Animated.View
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          className="absolute inset-0 bg-black/50"
        >
          <Pressable className="flex-1" onPress={onClose} />
        </Animated.View>

        <Animated.View
          entering={SlideInDown.springify().stiffness(90)}
          exiting={SlideOutDown.duration(300)}
          style={{
            paddingBottom: insets.bottom > 0 ? insets.bottom : 24,
          }}
          className="max-h-[70%] rounded-t-[30px] bg-white p-6 pb-10"
        >
          <View className="mb-6 flex-row items-center justify-between">
            <Text className="font-poppins-semibold text-lg text-neutral-1">
              Select account
            </Text>

            <Pressable hitSlop={16} onPress={onClose}>
              <Text className="font-poppins-medium text-primary-1">Close</Text>
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {cards.map((card) => (
              <Pressable
                key={card.id}
                className="border-b border-neutral-7 py-4"
                onPress={() => onSelect(card)}
              >
                <Text
                  className={`font-poppins-medium text-base ${selectedCardId === card.id ? "text-primary-1" : "text-neutral-1"}`}
                >
                  {card.label}
                </Text>

                <Text className="mt-1 text-xs text-neutral-3">
                  Balance: {card.balance}$
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CardSelectionModal;
