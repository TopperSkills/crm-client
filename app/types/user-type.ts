export interface IAddress {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: number;
}

export type Gender = "male" | "female" | "other";
export type Status = "active" | "inactive" | "deleted" | "blocked";
export type Role = "admin" | "customer";
export interface IUser {
  name: string;
  mobile?: string;
  email?: string;
  password?: string;
  gender?: Gender;
  address?: IAddress;
  role?: Role;
  status?: Status;
  avatar?: string;
  dob?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserQueryParams {
  status?: string;
  gender?: Gender;
  role: Role;
}
