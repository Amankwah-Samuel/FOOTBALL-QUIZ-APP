import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Us</Text>

      <Text style={styles.text}>
        We'd love to hear your feedback, suggestions, or report any issues you
        encounter while using the Football Quiz App.
      </Text>

      <View style={styles.card}>
        <Text style={styles.info}>📧 Email: samuelamankwah157@gmail.com</Text>
        <Text style={styles.info}>📱 Phone: +233 20 123 4567</Text>
        <Text style={styles.info}>📍 Location: Accra, Ghana</Text>
      </View>

      <Text style={styles.footer}>
        ⚽ Thank you for using Football Quiz App!
      </Text>

      <Text style={styles.note}>
        This is my first React Native mobile application, built with Expo. I
        appreciate every piece of feedback as I continue learning and improving
        my development skills.
      </Text>

      <Link href="/" style={styles.link}>
        🏠 Back Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#cbd5e1",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  info: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 12,
  },
  footer: {
    fontSize: 18,
    color: "#38bdf8",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  note: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  link: {
    color: "#38bdf8",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});