import { images } from "@/constants/theme";
import React from "react";
import { Image, Text, View } from "react-native";

const ACCOUNTS_DATA = [
  {
    id: "1",
    name: "Account 1",
    accountNumber: "1900 8988 1234",
    balance: "$20,000",
    branch: "New York",
    isActive: true,
  },
  {
    id: "2",
    name: "Account 2",
    accountNumber: "8988 1234",
    balance: "$12,000",
    branch: "New York",
    isActive: false,
  },
  {
    id: "3",
    name: "Account 3",
    accountNumber: "1900 1234 2222",
    balance: "$230,000",
    branch: "New York",
    isActive: false,
  },
];

const AccountCard = ({ account }: { account: (typeof ACCOUNTS_DATA)[0] }) => (
  <View
    className="mb-4 rounded-2xl p-4"
    style={{ boxShadow: "0px 4px 30px rgba(54, 41, 183, 0.07)" }}
  >
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="font-poppins-semibold text-base font-semibold leading-6 text-neutral-1">
        {account.name}
      </Text>

      <Text className="font-poppins-semibold text-base font-semibold leading-6 text-neutral-1">
        {account.accountNumber}
      </Text>
    </View>

    <View className="mb-2.5 flex-row items-center justify-between">
      <Text className="font-poppins-medium text-xs font-medium leading-4 text-neutral-3">
        Available balance
      </Text>

      <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
        {account.balance}
      </Text>
    </View>

    <View className="flex-row items-center justify-between">
      <Text className="font-poppins-medium text-xs font-medium leading-4 text-neutral-3">
        Branch
      </Text>

      <Text className="font-poppins-semibold text-xs font-semibold leading-4 text-primary-1">
        {account.branch}
      </Text>
    </View>
  </View>
);

const AccountView = () => {
  return (
    <View className="mt-4 flex-1 px-6">
      <View className="items-center">
        <Image
          source={images.user_profile_image}
          className="h-[100px] w-[100px]"
          resizeMode="cover"
        />

        <Text className="mt-3 font-poppins-semibold text-base font-semibold leading-6 text-primary-1">
          Push Puttichai
        </Text>
      </View>

      <View className="mt-10">
        {ACCOUNTS_DATA.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </View>
    </View>
  );
};

export default AccountView;
