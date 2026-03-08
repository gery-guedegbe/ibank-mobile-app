import { ImageSourcePropType, PressableProps, ViewStyle } from "react-native";

export interface AppButtonProps extends PressableProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}

export interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distance?: number;
}
