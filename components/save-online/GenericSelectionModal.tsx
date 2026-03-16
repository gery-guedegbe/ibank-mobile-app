import { images } from "@/constants/theme";
import React from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Option {
  label: string;
  value: string;
}

interface GenericSelectionModalProps {
  visible: boolean;
  title: string;
  options: Option[];
  selectedValue?: string;
  onClose: () => void;
  onSelect: (value: string) => void;
}

const GenericSelectionModal = ({
  visible,
  title,
  options,
  selectedValue,
  onClose,
  onSelect,
}: GenericSelectionModalProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end">
        {/* Backdrop avec fondu */}
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          className="absolute inset-0 bg-black/50"
        >
          <Pressable className="flex-1" onPress={onClose} />
        </Animated.View>

        {/* Modal avec glissement vers le haut */}
        <Animated.View
          entering={SlideInDown.springify().stiffness(90)}
          exiting={SlideOutDown.duration(300)}
          style={{
            paddingBottom: insets.bottom > 0 ? insets.bottom : 24,
          }}
          className="max-h-[80%] rounded-t-[30px] bg-white p-6"
        >
          {/* Header de la Modal */}
          <View className="mb-6 flex-row items-center justify-between">
            <View className="w-6" />

            <Text className="font-poppins-semibold text-base font-semibold text-neutral-1">
              {title}
            </Text>

            <Pressable hitSlop={16} onPress={onClose}>
              <Image
                source={images.close_icon}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="gap-2">
              {options.map((option) => {
                const isSelected = selectedValue === option.value;

                return (
                  <Pressable
                    key={option.value}
                    onPress={() => onSelect(option.value)}
                    className={`flex-row items-center justify-between rounded-2xl p-4 ${
                      isSelected ? "bg-neutral-8" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`flex-1 text-center font-poppins-medium text-sm ${
                        isSelected ? "text-primary-1" : "text-neutral-3"
                      }`}
                    >
                      {option.label}
                    </Text>

                    {/* Petite icône Check si sélectionné (optionnel) */}
                    {isSelected && (
                      <Image
                        source={images.check_blue_icon}
                        className="absolute right-4 h-4 w-4"
                        resizeMode="contain"
                      />
                    )}
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default GenericSelectionModal;
