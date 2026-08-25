import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: "⚽",
    title: "Deep Category Arenas",
    description:
      "From General Football to the Champions League, World Cup, Players, and Clubs — pick the arena that fits your knowledge.",
  },
  {
    icon: "📊",
    title: "Difficulty Tiers",
    description:
      "Easy, Medium, and Hard categories mean the harder the arena, the higher the ranking points you earn.",
  },
  {
    icon: "🏆",
    title: "Global Leaderboard",
    description:
      "Every quiz you complete counts toward your rank. Climb the leaderboard and compete with players worldwide.",
  },
];

const GREEN = "#22c55e";

export default function About() {
  return (
    <LinearGradient
      colors={["#020806", "#04140d", "#0e3324", "#04140d", "#020806"]}
      locations={[0, 0.35, 0.55, 0.75, 1]}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.emoji}>⚽</Text>
          <Text style={styles.title}>
            About the <Text style={styles.titleAccent}>Football Quiz</Text>
          </Text>
          <Text style={styles.subtitle}>
            Test your football knowledge with fun multiple-choice questions,
            riddles, and challenges — then climb the global leaderboard.
          </Text>

          <View style={styles.cardList}>
            {HIGHLIGHTS.map((item) => (
              <View key={item.title} style={styles.card}>
                <View style={styles.cardIconWrap}>
                  <Text style={styles.cardIcon}>{item.icon}</Text>
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.paragraph}>
            Whether you're a beginner or a football expert, there's an arena
            for you. Learn about teams, players, and historic matches while
            having fun — no matter your level.
          </Text>

          
          <Link href="/" style={styles.backLink}>
            Back home
          </Link>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 20,
    paddingBottom: 36,
  },
  emoji: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  titleAccent: {
    color: GREEN,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 28,
  },
  cardList: {
    gap: 14,
    marginBottom: 24,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    borderRadius: 16,
    padding: 16,
  },
  cardIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardIcon: {
    fontSize: 20,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardDescription: {
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 18,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 21,
    color: "#cbd5e1",
    marginBottom: 24,
  },
  footer: {
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 20,
  },
  backLink: {
    color: GREEN,
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
});
