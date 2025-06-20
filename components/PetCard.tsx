import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import { Image } from "react-native";
import { Pet } from "../types/types";
import colors from "@/constants/colors";

interface PetCardProps {
  pet: Pet;
  onPress?: () => void;
}

export default function PetCard({ pet, onPress }: PetCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {Platform.OS === "web" ? (
        <Image
          source={{ uri: pet.photos[0] }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <ExpoImage
          source={{ uri: pet.photos[0] }}
          style={styles.image}
          contentFit="cover"
        />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.breed}>
          {pet.type}
          {pet.breed ? ` • ${pet.breed}` : ""}
        </Text>
        {pet.age && <Text style={styles.age}>{pet.age}</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  breed: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 2,
  },
  age: {
    fontSize: 14,
    color: colors.textLight,
  },
});
