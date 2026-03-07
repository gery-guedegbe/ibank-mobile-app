import CreditCard from "@/components/card/CreditCard";
import MenuCard from "@/components/MenuCard";
import { HOME_MENUS } from "@/constants/data";
import { images } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { user } = useAuth();

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="absolute inset-0 bg-primary-1" />

      <ScrollView className="flex-1">
        <View className="gap-2">
          <View className="flex flex-row items-center justify-between px-6 py-8">
            <View className="flex flex-row items-center gap-4">
              <Image
                source={images.user_profile_image}
                resizeMode="contain"
                className="h-[50px] w-[50px] "
              />

              <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-6">
                Hi, {user?.name}
              </Text>
            </View>

            <Image
              source={images.bell_icon}
              resizeMode="contain"
              className="h-[24px] w-[24px]"
            />
          </View>

          <View className="h-full gap-6 rounded-t-[30px] bg-neutral-6 p-0 shadow-xl">
            <View className="mt-8">
              <CreditCard
                bg={images.visa_card_bg}
                username="Jonh Smith"
                type="Amazon Platinium"
                card_number="4756 6784 3354 9018"
                amount="3.469.52"
              />

              <View
                style={{ width: width - 70 }}
                className="z-20 -mt-11 h-[40px] self-center rounded-b-2xl bg-semantic-1"
              />

              <View
                style={{ width: width - 100 }}
                className="z-10 -mt-9 h-[40px] self-center rounded-b-2xl bg-primary-2"
              />
            </View>

            <FlatList
              data={HOME_MENUS}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <MenuCard {...item} />}
              numColumns={3}
              contentContainerStyle={{ marginVertical: 10 }}
              columnWrapperStyle={{
                justifyContent: "space-between",
                paddingHorizontal: 20,
                marginBottom: 15,
              }}
              showsVerticalScrollIndicator={false}
              className="flex-1 bg-neutral-6"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
