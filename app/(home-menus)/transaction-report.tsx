import CreditCard from "@/components/card/CreditCard";
import { TRANSACTION_REPORT_ITEMS } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TransactionItem = ({
  item,
  isLast,
}: {
  item: (typeof TRANSACTION_REPORT_ITEMS)[0];
  isLast: boolean;
}) => (
  <View
    className={`flex flex-row items-center justify-between pb-3 ${!isLast ? "border-b border-b-[#ECECEC]" : ""}`}
  >
    <View className="flex flex-row items-center gap-2.5">
      <View
        style={{ backgroundColor: item.icon_bg }}
        className={`h-[40px] w-[40px] items-center justify-center rounded-[10px]`}
      >
        <Image source={item.icon} resizeMode="contain" className="flex-1" />
      </View>

      <View className="gap-0.5">
        <Text className="font-poppins-medium text-base font-medium leading-6 text-neutral-1">
          {item.title}
        </Text>

        <Text className="font-poppins-semibold text-xs font-semibold leading-3 text-neutral-3">
          {item.desc}
        </Text>
      </View>
    </View>

    <Text
      className={`font-poppins-semibold text-base font-semibold leading-6 ${item.type === "income" ? "text-primary-1" : "text-semantic-1"}`}
    >
      {item.amount}
    </Text>
  </View>
);

const TransactionReportScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const groupedTransactions = TRANSACTION_REPORT_ITEMS.reduce(
    (acc, item) => {
      if (!acc[item.date]) acc[item.date] = [];
      acc[item.date].push(item);
      return acc;
    },
    {} as Record<string, typeof TRANSACTION_REPORT_ITEMS>,
  );

  return (
    <SafeAreaView className="h-full flex-1 bg-white">
      <View className="absolute inset-0 bg-primary-1" />

      <View className="flex-1 ">
        <View className="flex flex-row items-center gap-3 px-6 py-8">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
              tintColor="#ffffff"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-white">
            Transaction report
          </Text>
        </View>

        <View className="-mb-32">
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

        <View className="flex-1 gap-4 rounded-t-[30px] bg-white px-6 py-4">
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
            <View
              style={{
                boxShadow: "0px 4px 30px rgba(54, 41, 183, 0.07)",
              }}
              className="mt-36 flex-1 gap-4 rounded-[30px] bg-white p-4"
            >
              <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-neutral-1">
                Balance
              </Text>

              <View className="flex flex-row items-end gap-0.5">
                <Text className="font-poppins-medium text-[32px] font-medium leading-7 text-primary-1">
                  1000
                </Text>

                <Text className="font-poppins-semibold text-xs font-semibold leading-3 text-neutral-8">
                  USD
                </Text>
              </View>

              <Image
                source={images.chart_image}
                resizeMode="contain"
                className="mt-3 h-[127px] w-[295px]"
              />

              <View className="flex flex-row items-center justify-between">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                  <Text
                    key={m}
                    className={`font-poppins-semibold text-xs ${m === "Mar" ? "text-primary-1" : "text-neutral-4"}`}
                  >
                    {m}
                  </Text>
                ))}
              </View>
            </View>

            <View className="mt-4 gap-6">
              {Object.keys(groupedTransactions).map((date) => (
                <View key={date} className="gap-4">
                  <Text className="font-poppins-semibold text-xs text-neutral-8">
                    {date}
                  </Text>

                  {groupedTransactions[date].map((item, index) => (
                    <TransactionItem
                      key={item.id}
                      item={item}
                      isLast={index === groupedTransactions[date].length - 1}
                    />
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionReportScreen;
