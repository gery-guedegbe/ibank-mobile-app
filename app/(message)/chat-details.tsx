import ChatBubble from "@/components/message/ChatBubble";
import { images } from "@/constants/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatDetailScreen = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [messageText, setMessageText] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);

  // Utilisation d'un état pour rendre la liste dynamique
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Did you attempt transaction on debit card ending in 0000 at Mechan1 in NJ for $1,200? Reply YES or NO",
      isUser: false,
      time: "8/10/2018",
    },
    { id: "2", text: "Yes", isUser: true, time: "8/10/2018" },
    {
      id: "3",
      text: "Bank of America : 256486 is your authorization code which expires in 10 minutes.",
      isUser: false,
      time: "8/10/2018",
    },
  ]);

  const handleSend = () => {
    if (messageText.trim().length === 0) return;

    const newMessage = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      time: "Now",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");

    // Simulation d'une réponse automatique après 1.5 seconde
    setTimeout(() => {
      const autoReply = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your confirmation. Your transaction is being processed.",
        isUser: false,
        time: "Now",
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center gap-4 px-6 py-4">
        <Pressable hitSlop={16} onPress={() => router.back()}>
          <Image
            source={images.arrow_left_black}
            className="h-[16px] w-[16px]"
          />
        </Pressable>

        <Text className="font-poppins-semibold text-xl font-semibold leading-7 text-neutral-1">
          {name}
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-6"
          contentContainerStyle={{ paddingVertical: 20 }}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((item) => (
            <ChatBubble
              key={item.id}
              message={item.text}
              isUser={item.isUser}
              time={item.time}
            />
          ))}
        </ScrollView>

        {/* Input Bar */}
        <View className="flex-row items-center gap-3 bg-white px-6 py-4">
          <View className="h-[48px] flex-1 justify-center rounded-2xl border border-neutral-7 bg-white px-4">
            <TextInput
              placeholder="Type something..."
              placeholderTextColor="#CACACA"
              className="font-poppins-medium text-sm font-medium leading-[150%] text-neutral-1"
              value={messageText}
              onChangeText={setMessageText}
              onSubmitEditing={handleSend}
            />
          </View>

          <Pressable
            className={`h-[48px] w-[48px] items-center justify-center rounded-full shadow-lg ${
              messageText.trim() ? "bg-primary-1" : "bg-neutral-4"
            }`}
            onPress={handleSend}
            disabled={!messageText.trim()}
          >
            <Image
              source={images.right_white_icon}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetailScreen;
