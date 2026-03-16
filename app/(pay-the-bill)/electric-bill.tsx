import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CardSelectionModal from "@/components/transfer/CardSelectionModal";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { MY_CARDS } from "@/constants/data";
import { images } from "@/constants/theme";
import {
  ElectricBillFormData,
  electricBillSchema,
} from "@/schemas/pay-the-bill.schema";

const ElectricBillScreen = () => {
  const router = useRouter();
  const [cardModalVisible, setCardModalVisible] = useState(false);

  // Données simulées de la facture (provenant normalement d'une API)
  const billDetails = {
    name: "Jackson Maine",
    address: "403 East 4th Street, Santa Ana",
    phone: "+8424599721",
    code: "#2343543",
    period: "01/10/2019 - 01/11/2019",
    fee: 470,
    tax: 10,
    total: 480,
  };

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ElectricBillFormData>({
    resolver: zodResolver(electricBillSchema),
    defaultValues: { fromCardNumber: "", otp: "" },
  });

  const selectedCardNumber = watch("fromCardNumber");

  const onSubmit = (data: ElectricBillFormData) => {
    // Logique de paiement ici
    router.replace({
      pathname: "/(pay-the-bill)/bill-success",
      params: { type: "electric", total: billDetails.total },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 py-8">
          {/* Header */}
          <View className="mb-6 flex-row items-center gap-3">
            <Pressable hitSlop={16} onPress={() => router.back()}>
              <Image
                source={images.arrow_left_black}
                className="h-4 w-4"
                resizeMode="contain"
              />
            </Pressable>

            <Text className="font-poppins-semibold text-xl text-neutral-1">
              Electric bill
            </Text>
          </View>

          {/* Illustration & Period */}
          <View className="mb-6 items-center">
            <Image
              source={images.transfer_confirmed_image}
              resizeMode="contain"
              style={{
                width: "100%",
                height: undefined,
                aspectRatio: 16 / 9,
              }}
            />

            <Text className="mt-4 font-poppins-regular text-[10px] text-neutral-3">
              {billDetails.period}
            </Text>
          </View>

          {/* Bill Details Card */}
          <View className="mb-6 rounded-2xl border border-neutral-7 bg-white p-4 shadow-sm">
            <Text className="mb-4 font-poppins-semibold text-sm text-neutral-1">
              All the Bills
            </Text>

            <DetailRow label="Name" value={billDetails.name} />
            <DetailRow label="Address" value={billDetails.address} />
            <DetailRow label="Phone number" value={billDetails.phone} />
            <DetailRow label="Code" value={billDetails.code} />

            <View className="my-3 h-[1px] border-dashed bg-neutral-7" />

            <DetailRow
              label="Electric fee"
              value={`$${billDetails.fee}`}
              isBlue
            />
            <DetailRow label="Tax" value={`$${billDetails.tax}`} isBlue />

            <View className="mt-2 flex-row items-center justify-between">
              <Text className="font-poppins-bold text-base text-neutral-1">
                TOTAL
              </Text>
              <Text className="text-secondary-1 font-poppins-bold text-xl">
                ${billDetails.total}
              </Text>
            </View>
          </View>

          {/* Payment Form */}
          <View className="gap-5">
            <Controller
              control={control}
              name="fromCardNumber"
              render={({ field: { onChange, value } }) => (
                <AppInput
                  placeholder="Choose account / card"
                  hasIcon={true}
                  icon={images.exchange_switch_icon}
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setCardModalVisible(true)}
                />
              )}
            />

            <View>
              <Text className="mb-2 font-poppins-regular text-xs text-neutral-3">
                Get OTP to verify transaction
              </Text>

              <View className="flex-row gap-3">
                <View className="flex-1">
                  <Controller
                    control={control}
                    name="otp"
                    render={({ field: { onChange, value } }) => (
                      <AppInput
                        placeholder="OTP"
                        value={value}
                        onChangeText={onChange}
                        keyboardType="numeric"
                      />
                    )}
                  />
                </View>

                <Pressable className="h-[48px] items-center justify-center rounded-2xl bg-primary-1 px-6">
                  <Text className="font-poppins-medium text-xs text-white">
                    Get OTP
                  </Text>
                </Pressable>
              </View>
              {errors.otp && (
                <Text className="mt-1 text-[10px] text-red-500">
                  {errors.otp.message}
                </Text>
              )}
            </View>

            <AppButton title="Pay the bill" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>

      <CardSelectionModal
        visible={cardModalVisible}
        cards={MY_CARDS}
        selectedCardId={selectedCardNumber}
        onClose={() => setCardModalVisible(false)}
        onSelect={(card) => {
          setValue("fromCardNumber", card.fullNumber);
          setCardModalVisible(false);
        }}
      />
    </SafeAreaView>
  );
};

// Petit composant interne pour les lignes de détails
const DetailRow = ({
  label,
  value,
  isBlue = false,
}: {
  label: string;
  value: string;
  isBlue?: boolean;
}) => (
  <View className="mb-2 flex-row justify-between">
    <Text className="font-poppins-regular text-[11px] text-neutral-3">
      {label}
    </Text>
    <Text
      className={`ml-4 flex-1 text-right font-poppins-medium text-[11px] ${isBlue ? "text-primary-1" : "text-neutral-1"}`}
    >
      {value}
    </Text>
  </View>
);

export default ElectricBillScreen;
