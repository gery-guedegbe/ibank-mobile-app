import MessageItem from "@/components/message/MessageItem";
import { MESSAGES_DATA } from "@/constants/data";
import { images } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-4">
        <View className="flex flex-row items-center gap-3">
          <Pressable hitSlop={16} onPress={() => router.back()}>
            <Image
              source={images.arrow_left_black}
              resizeMode="contain"
              className="h-[16px] w-[16px]"
            />
          </Pressable>

          <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
            Message
          </Text>
        </View>

        <ScrollView
          className="mt-4 flex-1"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 gap-3">
            {MESSAGES_DATA.map((item) => (
              <MessageItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                icon={item.icon}
                icon_bg={item.icon_bg}
                onPress={() =>
                  router.push({
                    pathname: "/chat-details",
                    params: { name: item.title },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
