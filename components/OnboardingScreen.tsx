import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dog, Cat, Heart } from "lucide-react-native";

import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import colors from "@/constants/colors";

interface OnboardingScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

const { width } = Dimensions.get("window");

export default function OnboardingScreen({
  onGetStarted,
  onLogin,
}: OnboardingScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoBackground}
          >
            <Dog size={40} color="#FFFFFF" />
          </LinearGradient>
          <Text style={styles.logoText}>PetPals</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560743641-3914f2c45636",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Connect with Pet Lovers</Text>
          <Text style={styles.description}>
            Share photos of your pets, discover adorable animals, and join a
            community of pet enthusiasts.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={onGetStarted}
            variant="primary"
            size="large"
            style={styles.getStartedButton}
          />

          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginText}>
              Already have an account? Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View
              style={[
                styles.featureIcon,
                { backgroundColor: colors.primary + "20" },
              ]}
            >
              <Dog size={20} color={colors.primary} />
            </View>
            <Text style={styles.featureText}>Share pet photos</Text>
          </View>

          <View style={styles.featureItem}>
            <View
              style={[
                styles.featureIcon,
                { backgroundColor: colors.secondary + "20" },
              ]}
            >
              <Cat size={20} color={colors.secondary} />
            </View>
            <Text style={styles.featureText}>Connect with pet owners</Text>
          </View>

          <View style={styles.featureItem}>
            <View
              style={[
                styles.featureIcon,
                { backgroundColor: colors.primary + "20" },
              ]}
            >
              <Heart size={20} color={colors.primary} />
            </View>
            <Text style={styles.featureText}>Discover pet care tips</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  logoBackground: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginLeft: 12,
  },
  imageContainer: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: "center",
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  getStartedButton: {
    width: "100%",
    marginBottom: 16,
  },
  loginText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
  },
  featuresContainer: {
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
  },
});
