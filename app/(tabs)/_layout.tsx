import { images } from "@/constants/theme";
import { useAuth } from "@/hooks/useAuth";
import { TabBarIconProps } from "@/types/ui.types";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Image, Platform, Text, View } from "react-native";

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View
    className={`flex flex-row items-center justify-center gap-2 rounded-full px-4 py-3 ${
      focused ? "bg-primary-1" : "bg-transparent"
    }`}
    style={{ minWidth: focused ? 95 : 0 }}
  >
    <Image
      source={icon}
      className="size-5"
      resizeMode="contain"
      tintColor={focused ? "#FFFFFF" : "#898989"}
    />

    {focused && (
      <Text className="font-poppins-regular text-xs leading-4 text-white">
        {title}
      </Text>
    )}
  </View>
);

const TabLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 72,
          paddingHorizontal: 24,
          shadowColor: "#3629B7",
          backgroundColor: "#FFFFFF",
          shadowOpacity: 0.05,
          shadowRadius: 20,
          elevation: 10,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 16,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Home"
              icon={images.home_icon}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Search"
              icon={images.search_icon}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Message"
              icon={images.message_icon}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Setting"
              icon={images.setting_icon}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
