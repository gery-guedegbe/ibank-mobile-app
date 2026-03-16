import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { images } from "@/constants/theme";
import {
  mobilePrepaidData,
  mobilePrepaidSchema,
} from "@/schemas/mobile-prepaid.schema";
import { useMobilePrepaidStore } from "@/store/mobile-prepaid-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConfirmMobilerepaid = () => {
  const router = useRouter();

  const { mobilePrepaidData } = useMobilePrepaidStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<mobilePrepaidData>({
    resolver: zodResolver(mobilePrepaidSchema),
    defaultValues: { otp: "" },
  });

  useEffect(() => {
    if (mobilePrepaidData) {
      reset({
        ...mobilePrepaidData,
        otp: "",
      });
    } else {
      router.back();
    }
  }, [mobilePrepaidData]);

  const onConfirm = (data: mobilePrepaidData) => {
    router.push("/mobile-prepaid-succed");
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-6 px-6 py-8">
          {/* Header */}
          <View className="flex flex-row items-center gap-3">
            <Pressable hitSlop={16} onPress={() => router.back()}>
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
            Confirm transaction information
          </Text>

          {/* Form Fields - Styled as per Mockup Transfer #9 */}
          <View className="gap-4">
            <View className="gap-2">
              <Text className="ml-1 font-poppins-regular text-xs text-neutral-3">
                From
              </Text>

              <Controller
                control={control}
                name="fromCardNumber"
                render={({ field: { value } }) => (
                  <AppInput
                    value={value}
                    placeholder="From"
                    onChangeText={() => {}}
                  />
                )}
              />
            </View>

            <View className="gap-2">
              <Text className="ml-1 font-poppins-regular text-xs text-neutral-3">
                To
              </Text>

              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { value } }) => (
                  <AppInput
                    value={value}
                    placeholder="To"
                    onChangeText={() => {}}
                  />
                )}
              />
            </View>

            <View className="gap-2">
              <Text className="ml-1 font-poppins-regular text-xs text-neutral-3">
                Amount
              </Text>

              <Controller
                control={control}
                name="amount"
                render={({ field: { value } }) => (
                  <AppInput
                    value={value}
                    placeholder="Amount"
                    onChangeText={() => {}}
                  />
                )}
              />
            </View>

            {/* OTP Section - Conforme à la maquette Transfer #5-Confirm #2 */}
            <View className="gap-2">
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
                </View>

                <Pressable
                  className="h-[44px] items-center justify-center rounded-2xl bg-primary-1 px-6"
                  onPress={() => {
                    /* Logique pour renvoyer l'OTP */
                  }}
                >
                  <Text className="font-poppins-medium text-xs text-white">
                    Get OTP
                  </Text>
                </Pressable>
              </View>

              {errors.otp && (
                <Text className="ml-2 text-[10px] text-red-500">
                  {errors.otp.message}
                </Text>
              )}
            </View>
          </View>

          <View className="mt-56">
            <AppButton title="Confirm" onPress={handleSubmit(onConfirm)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmMobilerepaid;
