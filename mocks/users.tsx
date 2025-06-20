import { User } from "../types/types";

export const users: User[] = [
  {
    id: "1",
    username: "Avishek",
    name: "Avishek's Dog",
    avatar:
      "https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/494084366_1053110073539427_8340257608296660441_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=KLzBZsKwAJUQ7kNvwFgv5Sg&_nc_oc=AdlnzU7iy8jG_B_qzbl5G0GEjj9qpfP3tHE3A6l27AIsG3lyQJqNB6oFv1KxSvLVJm8&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=8k12Lpm-H4QO9qnBtITz9Q&oh=00_AfOTgnt976-rDOQNzk1jVHlJT6S9aUNaoyVLIJ1A13j0SA&oe=6859698A",
    bio: "Dog lover and pet photographer 📸",
    followers: 1243,
    following: 567,
    postsCount: 42,
  },
  {
    id: "2",
    username: "maxpaws",
    name: "Max Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Proud cat dad 🐱",
    followers: 892,
    following: 231,
    postsCount: 28,
  },
  {
    id: "3",
    username: "petlover",
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Animal rescue volunteer 🐾",
    followers: 2567,
    following: 345,
    postsCount: 76,
  },
  {
    id: "4",
    username: "furryfriends",
    name: "James Taylor",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Rabbit enthusiast 🐰",
    followers: 754,
    following: 412,
    postsCount: 31,
  },
  {
    id: "5",
    username: "pawsandwhiskers",
    name: "Olivia Martinez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Pet nutritionist and trainer 🥗",
    followers: 3421,
    following: 267,
    postsCount: 89,
  },
];

export const currentUser: User = {
  id: "6",
  username: "Shahil",
  name: "Shahil's Dog",
  avatar:
    "https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/494084366_1053110073539427_8340257608296660441_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=KLzBZsKwAJUQ7kNvwFgv5Sg&_nc_oc=AdlnzU7iy8jG_B_qzbl5G0GEjj9qpfP3tHE3A6l27AIsG3lyQJqNB6oFv1KxSvLVJm8&_nc_zt=24&_nc_ht=scontent.fktm9-2.fna&_nc_gid=8k12Lpm-H4QO9qnBtITz9Q&oh=00_AfOTgnt976-rDOQNzk1jVHlJT6S9aUNaoyVLIJ1A13j0SA&oe=6859698A",
  bio: "Pet lover and first PetPals user 🐶🐱",
  followers: 128,
  following: 243,
  postsCount: 15,
};
