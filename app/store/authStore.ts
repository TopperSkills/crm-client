import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id?: string;
  name: string;
  email: string;
  mobile?: string;
  role?: "admin" | "customer";
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;

  login: (user: User) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (user) =>
        set({
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "crm-auth",
    }
  )
);

export default useAuthStore;