import BranchBottomSheet from "@/components/branch/BranchBottomSheet";
import BranchMap from "@/components/branch/BranchMap";
import { BRANCHES } from "@/constants/data";
import { images } from "@/constants/theme";
import { useUserLocation } from "@/hooks/useUserLocation";
import { Branch } from "@/types/ui.types";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BranchScreen() {
  const router = useRouter();

  const userLocation = useUserLocation();

  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* header */}

      <View className="flex-row items-center gap-3 px-6 py-4">
        <Pressable hitSlop={16} onPress={() => router.back()}>
          <Image source={images.arrow_left_black} className="h-4 w-4" />
        </Pressable>

        <Text className="font-poppins-semibold text-xl">Branch</Text>
      </View>

      {/* map */}

      <View className="flex-1 overflow-hidden">
        {/* Map en arrière-plan */}
        <BranchMap
          branches={BRANCHES}
          userLocation={userLocation}
          selectedBranch={selectedBranch}
          onSelectBranch={setSelectedBranch}
        />

        {/* BottomSheet au-dessus */}
        <BranchBottomSheet branches={BRANCHES} onSelect={setSelectedBranch} />
      </View>
    </SafeAreaView>
  );
}
