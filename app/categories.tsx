import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Category {
  id: string;
  icon: string;
  title: string;
  description: string;
  difficulty: Difficulty;
}

const CATEGORIES: Category[] = [
  {
    id: "general",
    icon: "⚽",
    title: "General Football",
    description:
      "Test your all-around knowledge of the beautiful game, from basic rules to iconic moments.",
    difficulty: "Easy",
  },
  {
    id: "champions-league",
    icon: "🏆",
    title: "Champions League",
    description:
      "Elite European nights. Rapid history, tactics, dramatic comebacks, and unforgettable finals.",
    difficulty: "Hard",
  },
  {
    id: "premier-league",
    icon: "🦁",
    title: "Premier League",
    description:
      "The fastest league in the world. Identify top scorers, invincibles, and flair players.",
    difficulty: "Medium",
  },
  {
    id: "world-cup",
    icon: "🌍",
    title: "World Cup",
    description:
      "Global glory. Relive the legends, greatest goals, penalties, and iconic tournament runs.",
    difficulty: "Medium",
  },
  {
    id: "players",
    icon: "⭐",
    title: "Players",
    description:
      "Identify the icons, legends, and rising stars across different generations and clubs.",
    difficulty: "Easy",
  },
  {
    id: "clubs",
    icon: "🛡️",
    title: "Clubs",
    description:
      "Test your knowledge of club crests, domestic history, stadiums, and more.",
    difficulty: "Medium",
  },
];

const DIFFICULTY_STYLES: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "rgba(34, 197, 94, 0.16)", text: "#22c55e" },
  Medium: { bg: "rgba(245, 158, 11, 0.16)", text: "#f59e0b" },
  Hard: { bg: "rgba(168, 85, 247, 0.16)", text: "#a855f7" },
};

const FILTERS: Array<"All" | Difficulty> = ["All", "Easy", "Medium", "Hard"];

const GREEN = "#22c55e";

export default function Categories() {
  const router = useRouter();
  const [filter, setFilter] = useState<"All" | Difficulty>("All");

  const visibleCategories =
    filter === "All"
      ? CATEGORIES
      : CATEGORIES.filter((category) => category.difficulty === filter);

  return (
    <LinearGradient
      colors={["#020806", "#04140d", "#0e3324", "#04140d", "#020806"]}
      locations={[0, 0.35, 0.55, 0.75, 1]}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            Select Your <Text style={styles.titleAccent}>Arena</Text>
          </Text>
          <Text style={styles.subtitle}>
            Choose a category to test your tactical and factual history.
            Higher difficulty yields higher ranking points.
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterRow}
            contentContainerStyle={styles.filterRowContent}
          >
            {FILTERS.map((item) => {
              const active = filter === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[styles.filterChip, active && styles.filterChipActive]}
                  activeOpacity={0.8}
                  onPress={() => setFilter(item)}
                >
                  <Text
                    style={[
                      styles.filterChipText,
                      active && styles.filterChipTextActive,
                    ]}
                  >
                    {item === "All" ? "All Categories" : item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.cardList}>
            {visibleCategories.map((category) => {
              const tag = DIFFICULTY_STYLES[category.difficulty];
              return (
                <TouchableOpacity
                  key={category.id}
                  style={styles.card}
                  activeOpacity={0.8}
                  // TODO: navigate to the quiz-play screen for this category once it exists.
                  onPress={() => {}}
                >
                  <View style={styles.cardIconWrap}>
                    <Text style={styles.cardIcon}>{category.icon}</Text>
                  </View>

                  <View style={styles.cardBody}>
                    <View style={styles.cardTitleRow}>
                      <Text style={styles.cardTitle}>{category.title}</Text>
                      <View style={[styles.tag, { backgroundColor: tag.bg }]}>
                        <Text style={[styles.tagText, { color: tag.text }]}>
                          {category.difficulty}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.cardDescription} numberOfLines={2}>
                      {category.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tabItem}
            activeOpacity={0.7}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.tabIcon}>🏠</Text>
            <Text style={styles.tabLabel}>Home</Text>
          </TouchableOpacity>

          <View style={styles.tabItem}>
            <View style={styles.tabCenterButton}>
              <Text style={styles.tabCenterIcon}>▶</Text>
            </View>
            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Play</Text>
          </View>

          {/* TODO: wire up once the leaderboard screen exists. */}
          <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
            <Text style={styles.tabIcon}>📊</Text>
            <Text style={styles.tabLabel}>Leaderboard</Text>
          </TouchableOpacity>

          {/* TODO: wire up once the profile screen exists. */}
          <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
            <Text style={styles.tabIcon}>👤</Text>
            <Text style={styles.tabLabel}>Profile</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  titleAccent: {
    color: GREEN,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: "#94a3b8",
    marginBottom: 20,
  },
  filterRow: {
    flexGrow: 0,
    marginBottom: 20,
  },
  filterRowContent: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: 10,
  },
  filterChip: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.3)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filterChipActive: {
    backgroundColor: GREEN,
    borderColor: GREEN,
  },
  filterChipText: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "600",
  },
  filterChipTextActive: {
    color: "#04140d",
  },
  cardList: {
    gap: 14,
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
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardIcon: {
    fontSize: 22,
  },
  cardBody: {
    flex: 1,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    flexShrink: 1,
    marginRight: 8,
  },
  tag: {
    borderRadius: 12,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "700",
  },
  cardDescription: {
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 18,
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "rgba(148, 163, 184, 0.18)",
    paddingTop: 10,
    paddingBottom: 6,
    backgroundColor: "rgba(2, 8, 6, 0.9)",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  tabLabel: {
    color: "#64748b",
    fontSize: 11,
    fontWeight: "600",
  },
  tabLabelActive: {
    color: GREEN,
  },
  tabCenterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GREEN,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
    marginTop: -18,
    borderWidth: 3,
    borderColor: "#04140d",
  },
  tabCenterIcon: {
    color: "#04140d",
    fontSize: 14,
    fontWeight: "800",
  },
});
