import React from "react";
import { StyleSheet, View, Image, ViewStyle } from "react-native";
import { Image as ExpoImage } from "expo-image";
import { Platform } from "react-native";

interface AvatarProps {
  uri: string;
  size?: number;
  style?: ViewStyle;
  bordered?: boolean;
}

export default function Avatar({
  uri,
  size = 40,
  style,
  bordered = false,
}: AvatarProps) {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden",
      borderWidth: bordered ? 2 : 0,
      borderColor: "#FFFFFF",
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });

  // Use different image components for web and native
  return (
    <View style={[styles.container, style]}>
      {Platform.OS === "web" ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <ExpoImage source={{ uri }} style={styles.image} contentFit="cover" />
      )}
    </View>
  );
}
