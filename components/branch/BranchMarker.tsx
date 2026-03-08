import { images } from "@/constants/theme";
import { Branch } from "@/types/ui.types";
import { Image, View } from "react-native";
import { Marker } from "react-native-maps";

interface Props {
  branch: Branch;
  onPress: () => void;
}

export default function BranchMarker({ branch, onPress }: Props) {
  return (
    <Marker
      coordinate={{
        latitude: branch.latitude,
        longitude: branch.longitude,
      }}
      onPress={onPress}
    >
      <View className="h-10 w-10 items-center justify-center rounded-full  shadow-lg">
        <Image
          source={images.location_icon}
          className="h-7 w-7"
          resizeMode="contain"
        />
      </View>
    </Marker>
  );
}
