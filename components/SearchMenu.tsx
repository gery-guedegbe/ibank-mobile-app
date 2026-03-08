import { RelativePathString, useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface SearchMenuProps {
  id: number;
  title: string;
  desc: string;
  icon: ImageSourcePropType;
  link: string;
}

const SearchMenu = ({ title, desc, icon, link }: SearchMenuProps) => {
  const router = useRouter();

  return (
    <Pressable
      hitSlop={10}
      onPress={() => router.push(link as RelativePathString)}
      style={{
        boxShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.05)",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
      }}
      className="mb-4 flex h-[110px] flex-1 flex-row items-start justify-between p-4"
    >
      <View className="mt-3 gap-2">
        <Text className="font-poppins-semibold text-base font-semibold leading-6 text-neutral-1">
          {title}
        </Text>

        <Text className="font-poppins-medium text-sm font-medium leading-4 text-neutral-8">
          {desc}
        </Text>
      </View>

      <Image
        source={icon}
        resizeMode="contain"
        className="h-[78px] w-[100px]"
      />
    </Pressable>
  );
};

export default SearchMenu;
