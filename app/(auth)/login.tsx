import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import { images } from "@/constants/theme";
import { useBiometricAuth } from "@/hooks/useBiometricAuth";
import { useLoginForm } from "@/hooks/useLoginForm";
import { LoginFormData } from "@/schemas/auth.schema";
import { secureStorage } from "@/services/secure-storage.service";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "expo-router";
import React from "react";
import { Controller } from "react-hook-form";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const router = useRouter();
  const canGoBack = router.canGoBack();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const { login } = useAuth();

  const { loginWithBiometric } = useBiometricAuth();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);

      router.replace("/(tabs)/home");
    } catch (error) {
      console.log("Login error", error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="absolute inset-0 bg-primary-1" />

      <View className="gap-2">
        <View className="flex flex-row items-center justify-start gap-3 px-6 py-8">
          {canGoBack && (
            <Pressable
              hitSlop={16}
              onPress={() => router.back()}
              className="h-[16] w-[16]"
            >
              <Image
                source={images.arrow_left}
                resizeMode="contain"
                className="flex-1"
              />
            </Pressable>
          )}

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-6">
            Sign in
          </Text>
        </View>

        <View className="h-full gap-8 rounded-t-[30px] bg-white  p-6  shadow-xl">
          <View className="gap-2">
            <Text className="font-poppins-semibold text-[24px] font-semibold leading-7 text-primary-1">
              Welcome Back
            </Text>

            <Text className="font-poppins-medium text-xs font-medium leading-4 text-neutral-1">
              Hello there, sign in to continue
            </Text>
          </View>

          <View className="mx-auto flex h-[165px] w-[213px] items-center justify-center">
            <Image
              source={images.sign_in_image}
              resizeMode="contain"
              className="flex-1"
            />
          </View>

          <View className="gap-4">
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
              <Text className="text-xs text-red-500">
                {errors.email.message}
              </Text>
            )}

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <AppInput
                  keyboardType="default"
                  placeholder="Password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            {errors.password && (
              <Text className="text-xs text-red-500">
                {errors.password.message}
              </Text>
            )}

            <Pressable onPress={() => router.push("/(auth)/forget-password")}>
              <Text className="self-end font-poppins-medium text-xs font-medium leading-4 text-neutral-4">
                Forgot password?
              </Text>
            </Pressable>
          </View>

          <AppButton
            accessibilityRole="button"
            accessibilityLabel="Sign in to your account"
            title="Sign in"
            onPress={handleSubmit(onSubmit)}
          />

          <View className="gap-2">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Login with fingerprint"
              onPress={async () => {
                const token = await loginWithBiometric();

                if (token !== null) {
                  try {
                    const token = "fake_token";

                    await secureStorage.saveToken(token);

                    router.replace("/(tabs)/home");
                  } catch (error) {
                    console.log("[Biometric Login] error:", error);
                  }
                }
              }}
              className="items-center justify-center"
            >
              <Image
                source={images.fingerprint_icon}
                resizeMode="contain"
                className="h-16 w-16"
              />
            </Pressable>
          </View>

          <View className="flex flex-row items-center justify-center gap-2">
            <Text className="font-poppins-regular text-xs leading-4 text-neutral-1">
              Don't have an account?
            </Text>

            <Pressable onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
                Sign Up
              </Text>
            </Pressable>
          </View>

          {/* <View className="h-[34] w-full flex-1 bg-white">
            <View className="mx-auto  h-[5px] w-[134px] rounded-full bg-neutral-4"></View>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
