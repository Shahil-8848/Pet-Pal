import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppStore } from "@/store/app-store";
import NotificationItem from "@/components/NotificationItem";
import Colors from "@/constants/colors";
import { Check } from "lucide-react-native";

export default function NotificationsScreen() {
  const { notifications, users, markAllNotificationsAsRead } = useAppStore();

  const sortedNotifications = [...notifications].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const getUserById = (userId: string) => {
    return users.find((user) => user.id === userId) || users[0];
  };

  const hasUnreadNotifications = notifications.some((n) => !n.read);

  return (
    <SafeAreaView style={styles.container} edges={["right", "left"]}>
      {hasUnreadNotifications && (
        <TouchableOpacity
          style={styles.markAllReadButton}
          onPress={markAllNotificationsAsRead}
        >
          <Check size={16} color="#FFFFFF" />
          <Text style={styles.markAllReadText}>Mark all as read</Text>
        </TouchableOpacity>
      )}

      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No notifications yet</Text>
        </View>
      ) : (
        <FlatList
          data={sortedNotifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationItem
              notification={item}
              user={getUserById(item.userId)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  markAllReadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 8,
  },
  markAllReadText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: 8,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.border,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textLight,
  },
});
