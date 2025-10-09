export type UserRole = 'Admin' | 'Faculty' | 'Student' | 'Staff' | 'Guest';

export type Permission =
  | 'users.read'
  | 'users.create'
  | 'users.update'
  | 'users.delete'
  | 'roles.read'
  | 'roles.create'
  | 'roles.update'
  | 'roles.delete'
  | 'audit.read';

export interface Role {
  id: string;
  name: UserRole | string;
  description?: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface UserProfile {
  photoUrl?: string;
  department?: string;
  contactEmail?: string;
  contactPhone?: string;
  designation?: string;
  address?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[]; // role ids or names
  status: UserStatus;
  twoFactorEnabled?: boolean;
  profile: UserProfile;
  dateJoined: string; // ISO
  lastLoginAt?: string; // ISO
  // Demo-only password storage (do NOT use in production)
  password?: string;
}

export interface ActivityLogEntry {
  id: string;
  userId: string;
  type:
    | 'login.success'
    | 'login.failed'
    | 'profile.update'
    | 'password.reset'
    | 'role.changed'
    | 'status.changed'
    | 'user.created'
    | 'user.deleted';
  message: string;
  createdAt: string; // ISO
  metadata?: Record<string, unknown>;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface UserQueryParams {
  search?: string;
  role?: string;
  status?: UserStatus;
  department?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof User | 'dateJoined' | 'lastLoginAt';
  sortDir?: 'asc' | 'desc';
}


