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
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react-native";
import Avatar from "./Avatar";
import { Post as PostType, User } from "../types/types";
import colors from "@/constants/colors";
import { useAppStore } from "../store/app-store";
import { formatDistanceToNow } from "../utils/date";

interface PostProps {
  post: PostType;
  user: User;
}

export default function Post({ post, user }: PostProps) {
  const { likePost, addComment } = useAppStore();

  const handleLike = () => {
    likePost(post.id);
  };

  const handleComment = () => {
    addComment(post.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar uri={user.avatar} size={36} />
          <View style={styles.nameContainer}>
            <Text style={styles.username}>{user.username}</Text>
            {post.location && (
              <Text style={styles.location}>{post.location}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity>
          <MoreHorizontal size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      {Platform.OS === "web" ? (
        <Image
          source={{ uri: post.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <ExpoImage
          source={{ uri: post.imageUrl }}
          style={styles.image}
          contentFit="cover"
        />
      )}

      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
            <Heart size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
            <MessageCircle size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Send size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Bookmark size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.likes}>{post.likes} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.captionUsername}>{user.username}</Text>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
        {post.comments > 0 && (
          <TouchableOpacity>
            <Text style={styles.viewComments}>
              View{" "}
              {post.comments > 1
                ? `all ${post.comments} comments`
                : "1 comment"}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.timestamp}>
          {formatDistanceToNow(new Date(post.createdAt))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameContainer: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.text,
  },
  location: {
    fontSize: 12,
    color: colors.textLight,
  },
  image: {
    width: "100%",
    height: 400,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionButton: {
    marginRight: 16,
  },
  content: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    fontWeight: "600",
    marginBottom: 6,
    fontSize: 14,
    color: colors.text,
  },
  captionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },
  captionUsername: {
    fontWeight: "600",
    marginRight: 4,
    fontSize: 14,
    color: colors.text,
  },
  caption: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  viewComments: {
    color: colors.textLight,
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
});
