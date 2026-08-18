import { StyleSheet, View, ViewProps, useColorScheme } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const ThemedCard = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.background }, styles.card, style]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {},
});
