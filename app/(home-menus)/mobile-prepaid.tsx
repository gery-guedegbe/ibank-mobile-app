import BeneficiaryCard from "@/components/transfer/BeneficiaryCard";
import CardSelectionModal from "@/components/transfer/CardSelectionModal";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { BENEFICIARY_ITEMS, MY_CARDS } from "@/constants/data";
import { images } from "@/constants/theme";
import {
  mobilePrepaidData,
  mobilePrepaidSchema,
} from "@/schemas/mobile-prepaid.schema";
import { useMobilePrepaidStore } from "@/store/mobile-prepaid-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MobilePrepaidScreen = () => {
  const router = useRouter();

  const [cardModalVisible, setCardModalVisible] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<null | string>(
    "",
  );

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<mobilePrepaidData>({
    resolver: zodResolver(mobilePrepaidSchema),
    defaultValues: {
      fromCardNumber: "",
      phoneNumber: "",
      beneficiaryName: "",
      amount: "",
    },
  });

  const selectedCardNumber = watch("fromCardNumber");
  const currentAmount = watch("amount");
  const selectedCard = MY_CARDS.find(
    (c) => c.fullNumber === selectedCardNumber,
  );

  // const onError = (errors: any) => {
  //   console.log("FORM ERRORS", errors);
  // };

  const setMobilePrepaidData = useMobilePrepaidStore(
    (state) => state.setMobilePrepaidData,
  );

  const onSubmit = async (data: mobilePrepaidData) => {
    try {
      setMobilePrepaidData(data);
      router.push("/confirm-mobile-prepaid");
    } catch (error) {
      Alert.alert("Error", "Could not prepare mobile prepaid transfer");
      throw error;
    }
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-4 px-6 py-8">
          <View className="flex flex-row items-center gap-3 ">
            <Pressable hitSlop={16} onPress={() => router.back()}>
              <Image
                source={images.arrow_left_black}
                resizeMode="contain"
                className="h-[16px] w-[16px]"
              />
            </Pressable>

            <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
              Mobile prepaid
            </Text>
          </View>

          <View className="mb-4 mt-4 gap-2">
            <Text className=" mb-1 font-poppins-semibold text-xs text-neutral-3">
              Choose account/ card
            </Text>

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

          <View className="mb-4 mt-2 gap-4">
            <View className="flex w-full flex-row items-center justify-between">
              <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
                Choose beneficiary
              </Text>

              <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
                Find beneficiary
              </Text>
            </View>

            <FlatList
              data={BENEFICIARY_ITEMS}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <BeneficiaryCard
                  isPlusBtn={item.id === "0"}
                  icon={item.icon}
                  name={item.name}
                  isSelected={item.id === selectedBeneficiary}
                  onSelect={() => {
                    if (item.id === "0") return;

                    setSelectedBeneficiary(item.id);

                    setValue("beneficiaryName", item.name, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                />
              )}
            />

            {errors.beneficiaryName && (
              <Text className="text-xs text-red-500">
                {errors.beneficiaryName.message}
              </Text>
            )}
          </View>

          <View className="mb-4 gap-2">
            <Text className="mb-1 font-poppins-semibold text-xs text-neutral-3">
              Phone number
            </Text>

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

          <View className="mb-4">
            <Text className="mb-2.5 font-poppins-semibold text-xs text-neutral-3">
              Choose amount
            </Text>

            <View className="flex flex-row justify-between gap-2">
              {["10", "20", "30"].map((amt) => (
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

            {errors.amount && (
              <Text className="mt-2 text-xs text-red-500">
                {errors.amount.message}
              </Text>
            )}
          </View>

          <View className="mt-4">
            <AppButton title="Confirm" onPress={handleSubmit(onSubmit)} />
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

export default MobilePrepaidScreen;
