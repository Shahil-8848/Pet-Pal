export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  postsCount: number;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed?: string;
  age?: string;
  photos: string[];
  ownerId: string;
}

export interface Post {
  id: string;
  userId: string;
  petId: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  createdAt: string;
  location?: string;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  text: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  userId: string; // user who triggered the notification
  targetId: string; // post id, comment id, etc.
  read: boolean;
  createdAt: string;
}