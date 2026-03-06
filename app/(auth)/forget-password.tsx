import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { images } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@/schemas/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

const ForgetPasswordScreen = () => {
  const router = useRouter();
  const { resetPassword } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await resetPassword(data.email);

      Alert.alert("Email sent", "Check your email to reset your password.");

      router.back();
    } catch (error) {
      Alert.alert("Error", "Unable to send reset email.");
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 gap-4 px-6 py-8 ">
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
            Forgot password
          </Text>
        </View>

        <View className="mt-6 gap-4 rounded-2xl p-4">
          <Text className="font-poppins-semibold text-sm font-semibold leading-4 text-neutral-8">
            Enter your email
          </Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <AppInput
                keyboardType="email-address"
                placeholder="Email"
                value={value}
                onChangeText={onChange}
              />
            )}
          />

          {errors.email && (
            <Text className="text-xs text-red-500">{errors.email.message}</Text>
          )}

          <Text className="font-poppins-medium text-sm font-medium leading-[150%] text-neutral-1">
            We will send you a link to reset your password.
          </Text>

          <AppButton
            title="Send reset link"
            loading={isSubmitting}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgetPasswordScreen;
