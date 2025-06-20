import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { Image } from "react-native";
import { Grid, Settings } from "lucide-react-native";
import { useAppStore } from "../../store/app-store";
import Avatar from "@/components/Avatar";
import PetCard from "@/components/PetCard";
import colors from "@/constants/colors";
import { Link } from "expo-router";

export default function ProfileScreen() {
  const { currentUser, posts, pets } = useAppStore();

  const userPosts = posts.filter((post: any) => post.userId === currentUser.id);
  const userPets = pets.filter((pet: any) => pet.ownerId === currentUser.id);

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Avatar uri={currentUser.avatar} size={80} bordered />
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{currentUser.postsCount}</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{currentUser.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{currentUser.following}</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>
          </View>

          <View style={styles.bioSection}>
            <Text style={styles.username}>{currentUser.name}</Text>
            <Text style={styles.handle}>@{currentUser.username}</Text>
            {currentUser.bio && (
              <Text style={styles.bio}>{currentUser.bio}</Text>
            )}
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <Link href="/modal" asChild>
              <TouchableOpacity style={styles.settingsButton}>
                <Settings size={20} color={colors.text} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Pets</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Add Pet</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.petsContainer}
          >
            {userPets.map((pet: any) => (
              <View key={pet.id} style={styles.petCardContainer}>
                <PetCard pet={pet} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.postsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Posts</Text>
            <Grid size={20} color={colors.text} />
          </View>

          <View style={styles.postsGrid}>
            {userPosts.map((post: any) => (
              <TouchableOpacity key={post.id} style={styles.postThumbnail}>
                {Platform.OS === "web" ? (
                  <Image
                    source={{ uri: post.imageUrl }}
                    style={styles.postImage}
                    resizeMode="cover"
                  />
                ) : (
                  <ExpoImage
                    source={{ uri: post.imageUrl }}
                    style={styles.postImage}
                    contentFit="cover"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  bioSection: {
    marginTop: 16,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  handle: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    marginTop: 16,
  },
  editButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: "center",
    marginRight: 8,
  },
  editButtonText: {
    fontWeight: "600",
    color: colors.text,
  },
  settingsButton: {
    backgroundColor: colors.card,
    borderRadius: 6,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  addButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: colors.primary,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  petsContainer: {
    paddingRight: 16,
  },
  petCardContainer: {
    width: 160,
    marginRight: 12,
  },
  postsSection: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  postsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -2,
  },
  postThumbnail: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 2,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
