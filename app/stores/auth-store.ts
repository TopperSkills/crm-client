import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware/persist";
import type { IUser } from "~/types/user-type";

type AuthStoreType = {
  user: Partial<IUser>;
  accessToken: string;
  setLogin: (user: IUser, accessToken: string) => void;
};

export const useAuth = create<AuthStoreType>()(
  persist(
    (set, get) => ({
      user: {},
      accessToken: "",
      setLogin(user, accessToken) {
        return set({
          accessToken,
          user,
        });
      },
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
