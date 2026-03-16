import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { images } from "@/constants/theme";
import {
  ConfirmSaveFormData,
  confirmSaveSchema,
} from "@/schemas/save-online.schema";
import { useSaveStore } from "@/store/save-online.store";

const SaveOnlineConfirmScreen = () => {
  const router = useRouter();
  const { saveData } = useSaveStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfirmSaveFormData>({
    resolver: zodResolver(confirmSaveSchema),
    defaultValues: { otp: "" },
  });

  // Simulation du calcul des intérêts (ex: 5% annuel)
  const amount = Number(saveData?.amount || 0);
  const interestRate = 0.05;
  const interestEarned = amount * interestRate;
  const totalReceived = amount + interestEarned;

  useEffect(() => {
    if (saveData) {
      reset({ ...saveData, otp: "" });
    } else {
      router.back();
    }
  }, [saveData]);

  const onConfirm = (data: ConfirmSaveFormData) => {
    router.push({
      pathname: "/save-online-success",
      params: { total: totalReceived.toString() },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
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
              Confirm
            </Text>
          </View>

          <Text className="font-poppins-medium text-xs text-neutral-3">
            Confirm saving information
          </Text>

          {/* Recap Card - Style épuré conforme à la maquette */}
          <View className="gap-4">
            {[
              { label: "From", value: saveData?.fromCardNumber },
              { label: "Time deposit", value: saveData?.duration },
              { label: "Interest rate", value: "5% / 12 months" },
              { label: "Amount", value: `$${amount}` },
            ].map((item, index) => (
              <View key={index} className="gap-2">
                <Text className="ml-1 font-poppins-regular text-xs text-neutral-3">
                  {item.label}
                </Text>

                <AppInput
                  placeholder={item.label}
                  value={item.value}
                  onChangeText={() => {}}
                />

                {errors.fromCardNumber && (
                  <Text className="text-xs text-red-500">
                    {errors.fromCardNumber.message}
                  </Text>
                )}

                {errors.fromCardNumber && (
                  <Text className="text-xs text-red-500">
                    {errors.duration?.message}
                  </Text>
                )}

                {errors.fromCardNumber && (
                  <Text className="text-xs text-red-500">
                    {errors.amount?.message}
                  </Text>
                )}

                {errors.fromCardNumber && (
                  <Text className="text-xs text-red-500">
                    {errors.root?.message}
                  </Text>
                )}
              </View>
            ))}

            {/* Affichage du gain estimé */}
            <View className="rounded-2xl border border-primary-1/20 bg-primary-1/10 p-4">
              <View className="flex-row items-center justify-between">
                <Text className="font-poppins-medium text-xs text-neutral-1">
                  Estimated Interest
                </Text>

                <Text className="font-poppins-semibold text-sm text-primary-1">
                  +${interestEarned}
                </Text>
              </View>
            </View>

            {/* OTP Section */}
            <View className="mt-2 gap-2">
              <Text className="ml-1 font-poppins-regular text-xs text-neutral-3">
                Get OTP to verify transaction
              </Text>

              <View className="flex-row items-center gap-3">
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

                  {errors.fromCardNumber && (
                    <Text className="text-xs text-red-500">
                      {errors.otp?.message}
                    </Text>
                  )}
                </View>

                <Pressable className="h-[48px] items-center justify-center rounded-2xl bg-primary-1 px-6">
                  <Text className="font-poppins-medium text-xs text-white">
                    Get OTP
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View className="mt-6">
            <AppButton title="Confirm" onPress={handleSubmit(onConfirm)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SaveOnlineConfirmScreen;
