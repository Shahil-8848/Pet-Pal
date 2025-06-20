import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, Post, Pet, Notification } from '../types/types'
import { posts as mockPosts } from '@/mocks/posts';
import { pets as mockPets } from '@/mocks/pets';
import { users as mockUsers, currentUser as mockCurrentUser } from '@/mocks/users';
import { notifications as mockNotifications } from '../mocks/notification';

interface AppState {
  currentUser: User;
  posts: Post[];
  pets: Pet[];
  users: User[];
  notifications: Notification[];
  likePost: (postId: string) => void;
  addComment: (postId: string) => void;
  markNotificationAsRead: (notificationId: string) => void;
  markAllNotificationsAsRead: () => void;
  uploadPost: (post: Omit<Post, 'id' | 'createdAt'>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentUser: mockCurrentUser,
      posts: mockPosts,
      pets: mockPets,
      users: mockUsers,
      notifications: mockNotifications,
      
      likePost: (postId: string) => {
        set((state) => ({
          posts: state.posts.map((post) => 
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
          )
        }));
      },
      
      addComment: (postId: string) => {
        set((state) => ({
          posts: state.posts.map((post) => 
            post.id === postId ? { ...post, comments: post.comments + 1 } : post
          )
        }));
      },
      
      markNotificationAsRead: (notificationId: string) => {
        set((state) => ({
          notifications: state.notifications.map((notification) => 
            notification.id === notificationId ? { ...notification, read: true } : notification
          )
        }));
      },
      
      markAllNotificationsAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map((notification) => ({ ...notification, read: true }))
        }));
      },
      
      uploadPost: (post) => {
        const newPost: Post = {
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          ...post
        };
        
        set((state) => ({
          posts: [newPost, ...state.posts],
          currentUser: {
            ...state.currentUser,
            postsCount: state.currentUser.postsCount + 1
          }
        }));
      }
    }),
    {
      name: 'petpals-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);