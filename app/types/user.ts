export type UserRole = "admin" | "customer";

export type User = {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  role?: UserRole;
};

export type CreateUserData = {
  name: string;
  email: string;
  mobile: string;
  role?: UserRole;
};

export type UpdateUserData = Partial<CreateUserData>;

export type UserResponse = {
  success: boolean;
  message: string;
  user?: User;
};

export type UsersResponse = {
  success: boolean;
  message: string;
  users: User[];
};