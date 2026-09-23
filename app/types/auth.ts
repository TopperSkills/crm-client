export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = {
  name: string;
  email: string;
  mobile: string;
  password: string;
};

export type ForgotPasswordData = {
  email: string;
};

export type ResetPasswordData = {
  token: string;
  password: string;
};

export type ChangePasswordData = {
  currentPassword: string;
  newPassword: string;
};

export type AuthUser = {
  id?: string;
  name: string;
  email: string;
  mobile?: string;
  role?: "admin" | "customer";
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user?: AuthUser;
  token?: string;
};