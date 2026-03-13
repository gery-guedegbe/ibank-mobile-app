import React from "react";
import { Text, View } from "react-native";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  time?: string;
}

const ChatBubble = ({ message, isUser, time }: ChatBubbleProps) => {
  return (
    <View className="gap-3">
      {time && !isUser && (
        <Text
          className={`mt-1 text-center font-poppins-medium text-xs font-medium leading-4 text-neutral-3`}
        >
          {time}
        </Text>
      )}

      <View
        className={`my-2 max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "self-end rounded-tr-none bg-primary-1"
            : "bg-primary-4 self-start rounded-tl-none"
        }`}
      >
        <Text
          className={`font-poppins-medium text-sm font-medium leading-[150%] ${
            isUser ? "text-white" : "text-neutral-1"
          }`}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;
