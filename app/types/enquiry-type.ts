import type { IDept } from "./dept-type";
import type { IUser } from "./user-type";

export interface IReply {
  message?: string;
  user?: string | IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEnquiry {
  customer?: string | IUser;
  dept?: string | IDept;
  message?: string;
  subject?: string;
  status?: "pending" | "processing" | "resolved" | "rejected" | "deleted";
  images?: string[];
  replies?: IReply[];
  createdAt: Date;
  updatedAt: Date;
}
