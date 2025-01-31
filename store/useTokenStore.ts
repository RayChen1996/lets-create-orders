import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

interface TokenState {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      token: null,
      setToken: async (token) => {
        await SecureStore.setItemAsync("token", token);
        set({ token });
      },
      removeToken: async () => {
        await SecureStore.deleteItemAsync("token");
        set({ token: null });
      },
    }),
    {
      name: "token-storage",
      storage: {
        getItem: async (name) => {
          const value = await SecureStore.getItemAsync(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await SecureStore.setItemAsync(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await SecureStore.deleteItemAsync(name);
        },
      },
      // storage: async (key, value) => {
      //   if (value === undefined) {
      //     await SecureStore.deleteItemAsync(key);
      //   } else {
      //     await SecureStore.setItemAsync(key, value);
      //   }
      // },
    }
  )
);

export default useTokenStore;
