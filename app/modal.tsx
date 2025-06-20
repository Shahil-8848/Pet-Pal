import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import {
  Heart,
  Info,
  Shield,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react-native";
import colors from "@/constants/colors";

export default function ModalScreen() {
  const menuItems = [
    {
      icon: <Heart size={24} color={colors.primary} />,
      title: "Saved Posts",
      subtitle: "View your saved posts",
    },
    {
      icon: <Info size={24} color={colors.primary} />,
      title: "About PetPals",
      subtitle: "Learn more about our app",
    },
    {
      icon: <Shield size={24} color={colors.primary} />,
      title: "Privacy Policy",
      subtitle: "How we protect your data",
    },
    {
      icon: <Bell size={24} color={colors.primary} />,
      title: "Notification Settings",
      subtitle: "Manage your notifications",
    },
    {
      icon: <HelpCircle size={24} color={colors.primary} />,
      title: "Help & Support",
      subtitle: "Get assistance with the app",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Manage your PetPals experience</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>{item.icon}</View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>PetPals v1.0.0</Text>
          <Text style={styles.appCopyright}>© 2023 PetPals Inc.</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#FFFFFF" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    color: colors.textLight,
  },
  appInfo: {
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  appVersion: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 4,
  },
  appCopyright: {
    fontSize: 12,
    color: colors.textLight,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.error,
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 8,
  },
});
