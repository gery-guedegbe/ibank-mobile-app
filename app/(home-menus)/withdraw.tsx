import CardSelectionModal from "@/components/transfer/CardSelectionModal";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { MY_CARDS } from "@/constants/data";
import { images } from "@/constants/theme";
import { WithdrawFormData, withdrawSchema } from "@/schemas/withdraw.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WithdrawScreen = () => {
  const router = useRouter();

  const [cardModalVisible, setCardModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<WithdrawFormData>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: { fromCardNumber: "", phoneNumber: "", amount: "" },
  });

  const selectedCardNumber = watch("fromCardNumber");
  const currentAmount = watch("amount");
  const selectedCard = MY_CARDS.find(
    (c) => c.fullNumber === selectedCardNumber,
  );

  const onSubmit = (data: WithdrawFormData) => {
    Alert.alert("Success", `Withdrawal of $${data.amount} initiated.`);
    router.push("/(home-menus)/success-withdraw");
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-6 px-6 py-8">
          <View className="flex flex-row items-center gap-3">
            <Pressable hitSlop={16} onPress={() => router.back()}>
              <Image
                source={images.arrow_left_black}
                resizeMode="contain"
                className="h-[16px] w-[16px]"
              />
            </Pressable>

            <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
              Withdraw
            </Text>
          </View>

          <Image
            source={images.transfer_confirmed_image}
            resizeMode="contain"
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 16 / 9,
            }}
          />

          <View className="mt-6 gap-5">
            {/* Account Selection */}
            <View className="gap-2">
              <Controller
                control={control}
                name="fromCardNumber"
                render={({ field: { value } }) => (
                  <Pressable onPress={() => setCardModalVisible(true)}>
                    <View pointerEvents="none">
                      <AppInput
                        placeholder="Choose account / card"
                        value={value}
                        hasIcon
                        icon={images.exchange_switch_icon}
                        onChangeText={() => {}}
                      />
                    </View>
                  </Pressable>
                )}
              />

              {selectedCard && (
                <Text className="font-poppins-semibold text-xs text-primary-1">
                  Available balance: {selectedCard.balance}$
                </Text>
              )}

              {errors.fromCardNumber && (
                <Text className="text-xs text-red-500">
                  {errors.fromCardNumber.message}
                </Text>
              )}
            </View>

            {/* Phone Number */}
            <View className="gap-2">
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value } }) => (
                  <AppInput
                    placeholder="Phone number"
                    keyboardType="phone-pad"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              {errors.phoneNumber && (
                <Text className="text-xs text-red-500">
                  {errors.phoneNumber.message}
                </Text>
              )}
            </View>

            {/* Amount Selection */}
            <View className="gap-6">
              <Text className="font-poppins-semibold text-xs uppercase text-neutral-3">
                Choose amount
              </Text>

              <View className="gap-3">
                <View className="flex flex-row justify-between gap-2">
                  {["10", "50", "100"].map((amt) => (
                    <Pressable
                      key={amt}
                      onPress={() =>
                        setValue("amount", amt, { shouldValidate: true })
                      }
                      className={`w-[30%] items-center justify-center rounded-2xl border py-3 ${
                        currentAmount === amt
                          ? "border-primary-1 bg-primary-1"
                          : "border-neutral-7 bg-white"
                      }`}
                    >
                      <Text
                        className={`font-poppins-medium ${currentAmount === amt ? "text-white" : "text-neutral-1"}`}
                      >
                        ${amt}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                <View className="flex flex-row justify-between gap-2">
                  {["150", "200"].map((amt) => (
                    <Pressable
                      key={amt}
                      onPress={() =>
                        setValue("amount", amt, { shouldValidate: true })
                      }
                      className={`w-[30%] items-center justify-center rounded-2xl border py-3 ${
                        currentAmount === amt
                          ? "border-primary-1 bg-primary-1"
                          : "border-neutral-7 bg-white"
                      }`}
                    >
                      <Text
                        className={`font-poppins-medium ${currentAmount === amt ? "text-white" : "text-neutral-1"}`}
                      >
                        ${amt}
                      </Text>
                    </Pressable>
                  ))}

                  <View className="w-[30%] items-center justify-center rounded-2xl border border-neutral-7 py-3">
                    <Text className="font-poppins-medium text-neutral-3">
                      Other
                    </Text>
                  </View>
                </View>
              </View>

              {errors.amount && (
                <Text className="text-xs text-red-500">
                  {errors.amount.message}
                </Text>
              )}
            </View>
          </View>

          <View className="mt-4">
            <AppButton title="Verify" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>

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
    </SafeAreaView>
  );
};

export default WithdrawScreen;
