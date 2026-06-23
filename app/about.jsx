import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import Colors from '../constants/colors'

export default function About() {

   const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, {backgroundColor:theme.primary}]}>
      <Text style={styles.title}>About Football Quiz App ⚽</Text>

      <Text style={styles.text}>
        Welcome to the Football Quiz App! Test your football knowledge with fun
        multiple-choice questions, riddles, and challenges.
      </Text>

      <Text style={styles.text}>
        Learn about teams, players, and historic matches while having fun.
        Whether you're a beginner or a football expert, this app is for you.
      </Text>

      <Text style={styles.footer}>
        Made with ❤️ using Expo & React Native
      </Text>

      <Link href="/">
        <Text style={{ color: "#38bdf8", marginTop: 20 }}>
          Back home
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#cbd5e1",
    marginBottom: 15,
    lineHeight: 22,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
});