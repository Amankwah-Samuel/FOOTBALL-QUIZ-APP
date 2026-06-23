import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
   

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>⚽ Football Quiz</Text>

      <Text style={styles.subtitle}>
        Test your football knowledge with fun questions and challenges.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Link href="/about">
          <Text style={styles.buttonText}>About</Text>
        </Link>
      </TouchableOpacity>

 <TouchableOpacity style={styles.button}>
      <Link href="/contact">
        <Text style={styles.buttonText}  >Contact</Text>
      </Link>
     </TouchableOpacity>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1E90FF",
    width: 200,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
