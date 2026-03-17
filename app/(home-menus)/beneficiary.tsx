import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BeneficiaryItemProps {
  image: ImageSourcePropType;
  name: string;
  phoneNumber: string;
  className?: string;
}

const BeneficiaryItem = ({
  image,
  name,
  phoneNumber,
  className,
}: BeneficiaryItemProps) => (
  <View className={`flex flex-row items-center gap-3 ${className}`}>
    <Image source={image} resizeMode="contain" className="h-[40px] w-[40px]" />

    <View className="">
      <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-1">
        {name}
      </Text>

      <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
        {phoneNumber}
      </Text>
    </View>
  </View>
);

const BeneficiaryScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-6 px-6 py-8">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <Pressable hitSlop={16} onPress={() => router.back()}>
                <Image
                  source={images.arrow_left_black}
                  resizeMode="contain"
                  className="h-[16px] w-[16px]"
                />
              </Pressable>

              <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
                Beneficiary
              </Text>
            </View>

            <Image
              source={images.search_icon}
              resizeMode="contain"
              className="h-[20px] w-[20px]"
            />
          </View>

          <View className="gap-6">
            <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
              Transfer via card number
            </Text>

            <View
              style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
              className="flex-1 gap-3 rounded-2xl px-4 py-6"
            >
              <BeneficiaryItem
                image={images.user_profile_image}
                name="Push"
                phoneNumber="12788980890"
                className="border-b border-b-[#ECECEC] pb-3"
              />

              <BeneficiaryItem
                image={images.avatar_1}
                name="Olivia"
                phoneNumber="0345976231"
              />
            </View>
          </View>

          <View className="gap-6">
            <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
              Transfer to the same bank
            </Text>

            <View
              style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
              className="flex-1 gap-3 rounded-2xl px-4 py-6"
            >
              <BeneficiaryItem
                image={images.avatar_2}
                name="Alexander"
                phoneNumber="12788980890"
                className="border-b border-b-[#ECECEC] pb-3"
              />

              <BeneficiaryItem
                image={images.avatar_3}
                name="Harper"
                phoneNumber="0345976231"
              />
            </View>
          </View>

          <View className="gap-6">
            <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-3">
              Transfer to another bank
            </Text>

            <View
              style={{ boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)" }}
              className="flex-1 gap-3 rounded-2xl px-4 py-6"
            >
              <BeneficiaryItem
                image={images.avatar_2}
                name="Thomas"
                phoneNumber="12788980890"
                className="border-b border-b-[#ECECEC] pb-3"
              />

              <BeneficiaryItem
                image={images.avatar_3}
                name="Sanmatha"
                phoneNumber="0345976231"
                className="border-b border-b-[#ECECEC] pb-3"
              />

              <BeneficiaryItem
                image={images.avatar_3}
                name="Justin Biber"
                phoneNumber="0345976231"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <Pressable className="absolute bottom-16 right-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-1">
        <Image
          source={images.add_icon}
          resizeMode="contain"
          className="h-[22px] w-[22px]"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default BeneficiaryScreen;
