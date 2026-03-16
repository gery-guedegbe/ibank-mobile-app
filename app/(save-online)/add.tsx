import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GenericSelectionModal from "@/components/save-online/GenericSelectionModal";
import CardSelectionModal from "@/components/transfer/CardSelectionModal";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { MY_CARDS, TIME_DEPOSIT_OPTIONS } from "@/constants/data";
import { images } from "@/constants/theme";
import {
  SaveOnlineFormData,
  saveOnlineSchema,
} from "@/schemas/save-online.schema";
import { useSaveStore } from "@/store/save-online.store";

const SaveOnlineAddScreen = () => {
  const router = useRouter();
  const setSaveData = useSaveStore((state) => state.setSaveData);

  const [cardModalVisible, setCardModalVisible] = useState(false);
  const [durationModalVisible, setDurationModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SaveOnlineFormData>({
    resolver: zodResolver(saveOnlineSchema),
    defaultValues: { fromCardNumber: "", duration: "", amount: "" },
  });

  const selectedCardNumber = watch("fromCardNumber");
  const selectedDuration = watch("duration");
  const selectedCard = MY_CARDS.find(
    (c) => c.fullNumber === selectedCardNumber,
  );

  const onSubmit = (data: SaveOnlineFormData) => {
    setSaveData(data);
    router.push("/save-online-confirm");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="gap-6 px-6 py-8">
          {/* Header */}
          <View className="flex-row items-center gap-3">
            <Pressable onPress={() => router.back()}>
              <Image
                source={images.arrow_left_black}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </Pressable>

            <Text className="font-poppins-semibold text-xl text-neutral-1">
              Add
            </Text>
          </View>

          {/* Illustration */}
          <Image
            source={images.save_online_image}
            className="h-48 w-full"
            resizeMode="contain"
          />

          {/* Formulaire */}
          <View className="gap-5">
            {/* Sélection Compte */}
            <View className="gap-2">
              <Controller
                control={control}
                name="fromCardNumber"
                render={({ field: { value, onChange } }) => (
                  <AppInput
                    keyboardType="default"
                    secureTextEntry={false}
                    placeholder="Choose account / card"
                    hasIcon={true}
                    icon={images.exchange_switch_icon}
                    value={value}
                    onChangeText={onChange}
                    onFocus={() => setCardModalVisible(true)}
                  />
                )}
              />

              {selectedCard && (
                <Text className="ml-1 font-poppins-semibold text-xs text-primary-1">
                  Available balance : {selectedCard.balance}$
                </Text>
              )}

              {errors.fromCardNumber && (
                <Text className="text-xs text-red-500">
                  {errors.fromCardNumber.message}
                </Text>
              )}
            </View>

            {/* Sélection Durée */}
            <View className="gap-2">
              <Controller
                control={control}
                name="duration"
                render={({ field: { value, onChange } }) => (
                  <AppInput
                    placeholder="Choose time deposit"
                    value={value}
                    onChangeText={onChange}
                    onFocus={() => setDurationModalVisible(true)}
                  />
                )}
              />

              {selectedDuration && (
                <Text className="ml-1 font-poppins-medium text-xs text-primary-1">
                  Interest rate 5% / 12 months
                </Text>
              )}

              {errors.fromCardNumber && (
                <Text className="text-xs text-red-500">
                  {errors.duration?.message}
                </Text>
              )}
            </View>

            {/* Saisie Montant */}
            <View className="gap-2">
              <Controller
                control={control}
                name="amount"
                render={({ field: { onChange, value } }) => (
                  <AppInput
                    placeholder="Amount (At least $1000)"
                    keyboardType="numeric"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              {errors.fromCardNumber && (
                <Text className="text-xs text-red-500">
                  {errors.amount?.message}
                </Text>
              )}
            </View>
          </View>

          <View className="mt-4">
            <AppButton title="Verify" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>

      {/* Modal Sélection de Carte */}
      <CardSelectionModal
        visible={cardModalVisible}
        cards={MY_CARDS}
        selectedCardId={selectedCardNumber}
        onClose={() => setCardModalVisible(false)}
        onSelect={(card) => {
          setValue("fromCardNumber", card.fullNumber, { shouldValidate: true });
          setCardModalVisible(false);
        }}
      />

      {/* Modal Sélection Durée (Inspiré de l'image #4) */}
      <GenericSelectionModal
        visible={durationModalVisible}
        title="Choose time deposit"
        options={TIME_DEPOSIT_OPTIONS}
        selectedValue={selectedDuration}
        onClose={() => setDurationModalVisible(false)}
        onSelect={(val) => {
          setValue("duration", val, { shouldValidate: true });
          setDurationModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

export default SaveOnlineAddScreen;
