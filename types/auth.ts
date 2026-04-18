export type AdminUser = {
  id: number;
  fullName: string;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
  avatar?: string | null;
  createdAt: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};