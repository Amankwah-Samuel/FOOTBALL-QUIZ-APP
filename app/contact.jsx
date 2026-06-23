import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us 📞</Text>

      <Text style={styles.text}>
        We'd love to hear your feedback and suggestions!
      </Text>

      <Text style={styles.info}>📧 Email: footballquiz@gmail.com</Text>
      <Text style={styles.info}>📱 Phone: +233 20 123 4567</Text>
      <Text style={styles.info}>🌍 Location: Accra, Ghana</Text>

      <Text style={styles.footer}>
        Thank you for using Football Quiz App ⚽
      </Text>

      <Link href="/">
        <Text style={styles.link}>Back Home</Text>
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
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
  link: {
    color: "#38bdf8",
    marginTop: 20,
    textAlign: "center",
  },
});