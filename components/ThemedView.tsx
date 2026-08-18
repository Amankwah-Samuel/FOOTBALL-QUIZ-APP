import { View, ViewProps, useColorScheme } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const ThemedView = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
};

export default ThemedView;
