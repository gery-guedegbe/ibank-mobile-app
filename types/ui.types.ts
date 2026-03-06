import { PressableProps, ViewStyle } from "react-native";

export interface AppButtonProps extends PressableProps {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}
