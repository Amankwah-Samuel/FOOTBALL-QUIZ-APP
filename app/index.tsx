import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "10k+", label: "Players" },
  { value: "50k+", label: "Quizzes Taken" },
  { value: "100+", label: "Categories" },
];

export default function Home() {
  const router = useRouter();

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
          <View style={styles.headerRow}>
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveBadgeText}>LIVE GLOBAL LEADERBOARD ACTIVE</Text>
            </View>

            <Link href="/login" style={styles.loginLink}>
              Login
            </Link>
          </View>

          <Text style={styles.title}>
            How Well Do You Know{" "}
            <Text style={styles.titleAccent}>Football?</Text>
          </Text>

          <Text style={styles.subtitle}>
            Test your football knowledge. Challenge yourself across diverse
            eras and leagues. Rise through the ranks and become a global
            football legend.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.push("/register")}
          >
            <Text style={styles.primaryButtonText}>▶  Start Quiz</Text>
          </TouchableOpacity>

         

          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.heroCard}>
            <Text style={styles.heroEmoji}>⚽</Text>
            <Text style={styles.heroCardCaption}>Rise. Compete. Become a legend.</Text>
          </View>

          <View style={styles.linksRow}>
            <Link href="/about" style={styles.footerLink}>
              About
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const BLUE = "#38bdf8";

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
    paddingTop: 12,
    paddingBottom: 36,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  loginLink: {
    color: BLUE,
    fontSize: 13,
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "rgba(56, 189, 248, 0.4)",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    overflow: "hidden",
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: BLUE,
    marginRight: 8,
  },
  liveBadgeText: {
    color: BLUE,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 40,
    marginBottom: 14,
  },
  titleAccent: {
    color: BLUE,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#94a3b8",
    marginBottom: 28,
  },
  primaryButton: {
    backgroundColor: BLUE,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 14,
  },
  primaryButtonText: {
    color: "#04140d",
    fontSize: 16,
    fontWeight: "800",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.35)",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 32,
  },
  secondaryButtonText: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  statItem: {
    flex: 1,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 4,
  },
  statLabel: {
    color: "#64748b",
    fontSize: 12,
  },
  heroCard: {
    height: 220,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  heroEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  heroCardCaption: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: "600",
  },
  linksRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerLink: {
    color: "#38bdf8",
    fontSize: 14,
    fontWeight: "600",
  },
});
