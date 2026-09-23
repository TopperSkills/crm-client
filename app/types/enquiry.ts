export type EnquiryStatus =
  | "Pending"
  | "In Progress"
  | "Resolved"
  | "Closed";

export type Enquiry = {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
  status?: EnquiryStatus;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateEnquiryData = {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
};

export type UpdateEnquiryData = Partial<CreateEnquiryData> & {
  status?: EnquiryStatus;
};

export type EnquiryResponse = {
  success: boolean;
  message: string;
  enquiry?: Enquiry;
};

export type EnquiriesResponse = {
  success: boolean;
  message: string;
  enquiries: Enquiry[];
};