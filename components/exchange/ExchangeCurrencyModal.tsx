import { images } from "@/constants/theme";
import React from "react";
import { FlatList, Image, Modal, Pressable, Text } from "react-native";

interface ExchangeCurrencyModalProps {
  onClose: () => void;
  onSelect: (currency: string) => void; // Ajout pour la fonctionnalité
  selectedCurrency: string; // Pour afficher le check au bon endroit
}

const CURRENCY = [
  { id: "1", title: "VND ( Viet Nam Dong )", code: "VND" },
  { id: "2", title: "HK$ ( Hong Kong Dollar )", code: "HKD" },
  { id: "3", title: "USD ( Dollar )", code: "USD" },
  { id: "4", title: "NT$ ( Taiwan Dollar )", code: "TWD" },
  { id: "5", title: "J$ ( Jamaika Dollar )", code: "JMD" },
  { id: "6", title: "KRW ( South Korean Won )", code: "KRW" },
];

const ExchangeCurrencyModal = ({
  onClose,
  onSelect,
  selectedCurrency,
}: ExchangeCurrencyModalProps) => {
  return (
    <Modal
      visible={true}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        onPress={onClose}
        className="flex-1 items-center justify-center bg-black/50 px-6"
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="relative flex max-h-[70%] w-full rounded-2xl bg-white p-6 shadow-2xl"
        >
          {/* Close Button */}
          <Pressable
            hitSlop={16}
            onPress={onClose}
            className="absolute right-5 top-5 z-10"
          >
            <Image
              source={images.close_icon}
              className="h-4 w-4"
              resizeMode="contain"
            />
          </Pressable>

          <Text className="mb-4 text-center font-poppins-semibold text-base text-neutral-1">
            Select the currency
          </Text>

          <FlatList
            data={CURRENCY}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => onSelect(item.code)}
                className="flex-row items-center justify-between border-b border-neutral-7 py-4"
              >
                <Text
                  className={`font-poppins-medium text-base ${selectedCurrency === item.code ? "text-primary-1" : "text-neutral-1"}`}
                >
                  {item.title}
                </Text>

                {selectedCurrency === item.code && (
                  <Image
                    source={images.check_blue_icon}
                    className="h-4 w-4"
                    resizeMode="contain"
                  />
                )}
              </Pressable>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ExchangeCurrencyModal;
