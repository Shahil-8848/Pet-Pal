import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import { User, Notification } from "../types/types";

import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react-native";
import { formatDistanceToNow } from "../utils/date";
import { useAppStore } from "../store/app-store";
import colors from "@/constants/colors";

interface NotificationItemProps {
  notification: Notification;
  user: User;
}

export default function NotificationItem({
  notification,
  user,
}: NotificationItemProps) {
  const { markNotificationAsRead } = useAppStore();

  const handlePress = () => {
    if (!notification.read) {
      markNotificationAsRead(notification.id);
    }
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "like":
        return <Heart size={16} color={colors.notification} />;
      case "comment":
        return <MessageCircle size={16} color={colors.primary} />;
      case "follow":
        return <UserPlus size={16} color={colors.secondary} />;
      case "mention":
        return <AtSign size={16} color={colors.warning} />;
      default:
        return null;
    }
  };

  const getNotificationText = () => {
    switch (notification.type) {
      case "like":
        return (
          <Text style={styles.text}>
            <Text style={styles.username}>{user.username}</Text> liked your post
          </Text>
        );
      case "comment":
        return (
          <Text style={styles.text}>
            <Text style={styles.username}>{user.username}</Text> commented on
            your post
          </Text>
        );
      case "follow":
        return (
          <Text style={styles.text}>
            <Text style={styles.username}>{user.username}</Text> started
            following you
          </Text>
        );
      case "mention":
        return (
          <Text style={styles.text}>
            <Text style={styles.username}>{user.username}</Text> mentioned you
            in a comment
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, !notification.read && styles.unread]}
      onPress={handlePress}
    >
      <View style={styles.iconContainer}>{getNotificationIcon()}</View>
      <Avatar uri={user.avatar} size={40} style={styles.avatar} />
      <View style={styles.content}>
        {getNotificationText()}
        <Text style={styles.time}>
          {formatDistanceToNow(new Date(notification.createdAt))}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
  },
  unread: {
    backgroundColor: "#F0F8FF", // Light blue background for unread notifications
  },
  iconContainer: {
    position: "absolute",
    bottom: 8,
    left: 46,
    zIndex: 1,
    backgroundColor: colors.background,
    borderRadius: 10,
    padding: 2,
  },
  avatar: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  username: {
    fontWeight: "600",
  },
  time: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
});
