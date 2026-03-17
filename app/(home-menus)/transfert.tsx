import BeneficiaryCard from "@/components/transfer/BeneficiaryCard";
import CardSelectionModal from "@/components/transfer/CardSelectionModal";
import TransferCard from "@/components/transfer/TransferCard";
import TransferFormFields from "@/components/transfer/TransferFormFields";
import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import {
  BENEFICIARY_ITEMS,
  MY_CARDS,
  TRANSFERT_CARD_ITEMS,
} from "@/constants/data";
import { images } from "@/constants/theme";
import {
  CreditCardFormData,
  creditCardSchema,
} from "@/schemas/transfer.schema";
import { useTransferStore } from "@/store/transfer.store";
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

const TransfertScreen = () => {
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
  } = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      fromCardNumber: "",
      transactionType: "card",
      beneficiaryName: "",
      beneficiaryCardNumber: "5102567812345678",
      bankName: "",
      amount: "",
      content: "",
      saveToDirectory: false,
    },
  });

  const transactionType = watch("transactionType");
  const selectedCardNumber = watch("fromCardNumber");
  const selectedCard = MY_CARDS.find(
    (card) => card.fullNumber === selectedCardNumber,
  );

  const setTransferData = useTransferStore((state) => state.setTransferData);

  const onSubmit = async (data: CreditCardFormData) => {
    try {
      setTransferData(data);
      router.push("/confirm-transfert");
    } catch (error) {
      Alert.alert("Error", "Could not prepare transfer");
      throw error;
    }
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
              Transfer
            </Text>
          </View>

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

            <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
              Available balance : {selectedCard?.balance ?? "0"}$
            </Text>
          </View>

          <View className="mt-2 gap-4">
            <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
              Choose transaction
            </Text>

            <FlatList
              data={TRANSFERT_CARD_ITEMS}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TransferCard
                  icon={item.icon}
                  title={item.title}
                  isSelected={transactionType === item.slug}
                  onSelect={() => {
                    setValue("transactionType", item.slug as any);
                    setValue("bankName", "");
                    setValue("content", "");
                  }}
                />
              )}
            />
          </View>

          <View className="mt-2 gap-4">
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
          </View>

          <TransferFormFields
            control={control}
            errors={errors}
            transactionType={transactionType}
            cardNumber={selectedCardNumber}
          />

          <AppButton title="Confirm" onPress={handleSubmit(onSubmit)} />
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransfertScreen;
