import { View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { useColorScheme } from "react-native";

const ThemedView = ({style, ...props}) => {
   const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View 
     style={[{backgroundColor: theme.background}, style]}
     {...props}
    />
     
   
  );
};

export default ThemedView;
