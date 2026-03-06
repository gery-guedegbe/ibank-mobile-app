import AppButton from "@/components/ui/AppButton";
import AppCheckbox from "@/components/ui/AppCheckbox";
import AppInput from "@/components/ui/AppInput";
import { images } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import { RegisterFormData, registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { signup } = useAuth();

  const router = useRouter();

  const {
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signup({
        email: data.email,
        password: data.password,
        name: data.name,
        acceptTerms: data.acceptTerms,
      });

      router.replace("/(tabs)/home");
    } catch (error) {
      console.log("Signup error", error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="absolute inset-0 bg-primary-1" />

      <View className="gap-2">
        <View className="flex flex-row items-center justify-start gap-3 px-6 py-8">
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

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-6">
            Sign up
          </Text>
        </View>

        <View className="h-full gap-8 rounded-t-[30px] bg-white p-6 shadow-xl">
          <View className="gap-2">
            <Text className="font-poppins-semibold text-[24px] font-semibold leading-7 text-primary-1">
              Welcome to us
            </Text>

            <Text className="font-poppins-medium text-xs font-medium leading-4 text-neutral-1">
              Hello there, create new account
            </Text>
          </View>

          <View className="mx-auto flex h-[165px] w-[213px] items-center justify-center">
            <Image
              source={images.sign_up_image}
              resizeMode="contain"
              className="flex-1"
            />
          </View>

          <View className="gap-5">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <AppInput
                  keyboardType="default"
                  placeholder="Name"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            {errors.name && (
              <Text className="text-xs text-red-500">
                {errors.name.message}
              </Text>
            )}

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

            <Controller
              control={control}
              name="acceptTerms"
              render={({ field: { value, onChange } }) => (
                <AppCheckbox
                  value={value}
                  onValueChange={onChange}
                  label={
                    <Text className="font-poppins-regular text-sm leading-4 text-neutral-1">
                      By creating an account your agree to our{" "}
                      <Text className="font-poppins-semibold font-semibold text-primary-1">
                        Terms and Conditions
                      </Text>
                    </Text>
                  }
                />
              )}
            />

            {errors.acceptTerms && (
              <Text className="text-xs text-red-500">
                {errors.acceptTerms.message}
              </Text>
            )}
          </View>

          <AppButton
            accessibilityRole="button"
            accessibilityLabel="Sign in to your account"
            loading={isSubmitting}
            title="Sign up"
            onPress={handleSubmit(onSubmit)}
          />

          <View className="flex flex-row items-center justify-center gap-2">
            <Text className="font-poppins-regular text-xs leading-4 text-neutral-1">
              Have an account?
            </Text>

            <Pressable onPress={() => router.push("/(auth)/login")}>
              <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
                Sign In
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

export default SignUpScreen;
