import AppCheckbox from "@/components/ui/AppCheckbox";
import AppInput from "@/components/ui/AppInput";
import { CreditCardFormData } from "@/schemas/transfer.schema";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Text, View } from "react-native";

interface Props {
  control: Control<CreditCardFormData>;
  errors: FieldErrors<CreditCardFormData>;
  transactionType: "card" | "same_bank" | "other_bank";
  cardNumber: string;
}

const TransferFormFields = ({
  control,
  errors,
  transactionType,
  cardNumber,
}: Props) => {
  return (
    <View className="gap-4">
      {/* Beneficiary Name */}
      <View>
        <Controller
          control={control}
          name="beneficiaryName"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Beneficiary Name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.beneficiaryName && (
          <Text className="ml-2 mt-1 font-poppins-medium text-[10px] text-red-500">
            {errors.beneficiaryName.message}
          </Text>
        )}
      </View>

      {/* BANK SELECTION */}
      {transactionType === "other_bank" && (
        <>
          <Controller
            control={control}
            name="bankName"
            render={({ field: { onChange, value } }) => (
              <AppInput
                placeholder="Choose bank"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value } }) => (
              <AppInput
                placeholder="Choose branch"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </>
      )}

      {/* NAME */}
      <View>
        <Controller
          control={control}
          name="beneficiaryName"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Name"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.beneficiaryName && (
          <Text className="ml-2 mt-1 text-[10px] text-red-500">
            {errors.beneficiaryName.message}
          </Text>
        )}
      </View>

      {/* CARD NUMBER */}
      <View>
        <Controller
          control={control}
          name="fromCardNumber"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Card number"
              value={value}
              keyboardType="numeric"
              onChangeText={onChange}
            />
          )}
        />

        {errors.beneficiaryCardNumber && (
          <Text className="ml-2 mt-1 text-[10px] text-red-500">
            {errors.beneficiaryCardNumber.message}
          </Text>
        )}
      </View>

      {/* AMOUNT */}
      <View>
        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Amount"
              value={value}
              keyboardType="numeric"
              onChangeText={onChange}
            />
          )}
        />

        {errors.amount && (
          <Text className="ml-2 mt-1 text-[10px] text-red-500">
            {errors.amount.message}
          </Text>
        )}
      </View>

      {/* NOTE */}
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange, value } }) => (
          <AppInput
            placeholder="Content"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {/* SAVE */}
      <Controller
        control={control}
        name="saveToDirectory"
        render={({ field: { onChange, value } }) => (
          <AppCheckbox
            value={value}
            onValueChange={onChange}
            label={
              <Text className="font-poppins-regular text-xs text-neutral-3">
                Save to directory of beneficiary
              </Text>
            }
          />
        )}
      />
    </View>
  );
};

export default TransferFormFields;
