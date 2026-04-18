export type UserItem = {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
};

export type UpdateAccountPayload = {
  fullName: string;
  email: string;
  phone: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

export type UpdateUserRolePayload = {
  isAdmin: boolean;
};

export type UpdateUserStatusPayload = {
  isActive: boolean;
};