// Dans BranchList.tsx
import { Branch } from "@/types/ui.types";
import { FlatList, Pressable, Text, View } from "react-native";

interface Props {
  branches: Branch[];
  onSelect: (branch: Branch) => void;
}

export default function BranchList({ branches, onSelect }: Props) {
  return (
    <FlatList
      data={branches}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View className="items-center py-10">
          <Text className="font-poppins-medium font-medium text-neutral-3">
            No branch found
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onSelect(item)}
          className="flex-row justify-between border-b border-neutral-7 py-4"
        >
          <View className="mr-4 flex-1">
            <Text className="font-poppins-medium text-base font-semibold text-neutral-1">
              {item.name}
            </Text>

            <Text className="text-sm text-neutral-3" numberOfLines={1}>
              {item.address}
            </Text>
          </View>

          {item.distance && (
            <Text className="font-poppins-regular text-neutral-2">
              {item.distance} m
            </Text>
          )}
        </Pressable>
      )}
    />
  );
}
