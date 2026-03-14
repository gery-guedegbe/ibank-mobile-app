import AccountView from "@/components/account_and_card/AccountView";
import CardView from "@/components/account_and_card/CardView";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountAndCardScreen = () => {
  const router = useRouter();

  const [activeView, setActiveView] = useState("account");

  const toggleActiveView = (view: string) => {
    switch (view) {
      case "card":
        return <CardView />;
      case "account":
        return <AccountView />;
      default:
        return <AccountView />;
    }
  };

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-1 gap-4">
          <View className="flex flex-row items-center gap-3 px-6 py-8">
            <Pressable hitSlop={16} onPress={() => router.back()}>
              <Image
                source={images.arrow_left_black}
                resizeMode="contain"
                className="h-[16px] w-[16px]"
              />
            </Pressable>

            <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
              Account and card
            </Text>
          </View>

          <View className="flex-1 gap-6">
            <View className="flex flex-row  items-center justify-between gap-4 px-6">
              <Pressable
                onPress={() => setActiveView("account")}
                className={`flex h-[44px] flex-1 items-center justify-center rounded-2xl ${activeView === "account" ? "bg-primary-1" : "bg-primary-4"}`}
              >
                <Text
                  className={`font-poppins-medium text-base font-medium leading-6 ${activeView === "account" ? "text-neutral-6" : "text-neutral-1"}`}
                >
                  Account
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setActiveView("card")}
                className={`flex h-[44px] flex-1 items-center justify-center rounded-2xl ${activeView === "card" ? "bg-primary-1" : "bg-primary-4"}`}
              >
                <Text
                  className={`font-poppins-medium text-base font-medium leading-6 ${activeView === "card" ? "text-neutral-6" : "text-neutral-1"}`}
                >
                  Card
                </Text>
              </Pressable>
            </View>

            {toggleActiveView(activeView)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountAndCardScreen;
