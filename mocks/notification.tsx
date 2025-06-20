import { Notification } from "@/types";

export const notifications: Notification[] = [
  {
    id: "1",
    type: "like",
    userId: "1",
    targetId: "7", // post id
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
  },
  {
    id: "2",
    type: "comment",
    userId: "2",
    targetId: "7", // post id
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
  },
  {
    id: "3",
    type: "follow",
    userId: "3",
    targetId: "6", // user id
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: "4",
    type: "mention",
    userId: "4",
    targetId: "7", // post id
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
  },
  {
    id: "5",
    type: "like",
    userId: "5",
    targetId: "7", // post id
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
  },
];
