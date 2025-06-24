import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image as ExpoImage } from "expo-image";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, MapPin } from "lucide-react-native";
import { useAppStore } from "@/store/app-store";
import Colors from "@/constants/colors";
import { router } from "expo-router";

export default function UploadScreen() {
  const { currentUser, pets, uploadPost } = useAppStore();
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [selectedPet, setSelectedPet] = useState(
    pets.find((pet) => pet.ownerId === currentUser.id)?.id || ""
  );

  const pickImage = async () => {
    if (Platform.OS === "web") {
      // Mock image for web
      setImage("https://images.unsplash.com/photo-1587300003388-59208cc962cb");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (!image || !selectedPet) return;

    uploadPost({
      userId: currentUser.id,
      petId: selectedPet,
      imageUrl: image,
      caption,
      location: location || undefined,
      likes: 0,
      comments: 0,
    });

    // Reset form and navigate to home
    setImage(null);
    setCaption("");
    setLocation("");
    router.push("/");
  };

  const userPets = pets.filter((pet) => pet.ownerId === currentUser.id);

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {image ? (
            Platform.OS === "web" ? (
              <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <ExpoImage
                source={{ uri: image }}
                style={styles.image}
                contentFit="cover"
              />
            )
          ) : (
            <TouchableOpacity
              style={styles.imagePlaceholder}
              onPress={pickImage}
            >
              <Camera size={40} color={Colors.textLight} />
              <Text style={styles.imagePlaceholderText}>
                Tap to select a photo
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Caption</Text>
          <TextInput
            style={styles.input}
            placeholder="Write a caption..."
            value={caption}
            onChangeText={setCaption}
            multiline
          />

          <Text style={styles.label}>Location</Text>
          <View style={styles.locationContainer}>
            <MapPin
              size={16}
              color={Colors.textLight}
              style={styles.locationIcon}
            />
            <TextInput
              style={styles.locationInput}
              placeholder="Add location"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          <Text style={styles.label}>Pet</Text>
          <View style={styles.petSelector}>
            {userPets.map((pet) => (
              <TouchableOpacity
                key={pet.id}
                style={[
                  styles.petOption,
                  selectedPet === pet.id && styles.selectedPet,
                ]}
                onPress={() => setSelectedPet(pet.id)}
              >
                <Text
                  style={[
                    styles.petOptionText,
                    selectedPet === pet.id && styles.selectedPetText,
                  ]}
                >
                  {pet.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.postButton,
              (!image || !selectedPet) && styles.disabledButton,
            ]}
            onPress={handlePost}
            disabled={!image || !selectedPet}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: Colors.card,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderText: {
    marginTop: 10,
    color: Colors.textLight,
    fontSize: 16,
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: Colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: "top",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  locationIcon: {
    marginRight: 8,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
  },
  petSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
  },
  petOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.card,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedPet: {
    backgroundColor: Colors.primary,
  },
  petOptionText: {
    color: Colors.text,
    fontSize: 14,
  },
  selectedPetText: {
    color: "#FFFFFF",
  },
  postButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: Colors.border,
  },
  postButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
