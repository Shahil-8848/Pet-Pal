import { Post } from "../types/types";

export const posts: Post[] = [
  {
    id: "1",
    userId: "1",
    petId: "1",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    caption: "Buddy enjoying his day at the park! 🐕",
    likes: 124,
    comments: 23,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    location: "Central Park",
  },
  {
    id: "2",
    userId: "2",
    petId: "2",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    caption: "Luna being her majestic self 😻",
    likes: 89,
    comments: 12,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    location: "Home Sweet Home",
  },
  {
    id: "3",
    userId: "3",
    petId: "3",
    imageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    caption: "Charlie found a new toy! #BeagleLife",
    likes: 67,
    comments: 8,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    location: "Pet Store",
  },
  {
    id: "4",
    userId: "4",
    petId: "4",
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
    caption: "Whiskers munching on some fresh veggies 🥕",
    likes: 45,
    comments: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
  },
  {
    id: "5",
    userId: "5",
    petId: "5",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    caption: "Oliver looking majestic as always ✨",
    likes: 132,
    comments: 18,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    location: "Window Sill",
  },
  {
    id: "6",
    userId: "1",
    petId: "1",
    imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
    caption: "Buddy making new friends at the dog park",
    likes: 78,
    comments: 9,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), // 30 hours ago
    location: "Dog Park",
  },
  {
    id: "7",
    userId: "6",
    petId: "6",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    caption: "Max enjoying his favorite toy 🦴",
    likes: 56,
    comments: 7,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    location: "Living Room",
  },
];
