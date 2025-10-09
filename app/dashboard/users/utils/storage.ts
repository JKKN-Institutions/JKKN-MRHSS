import { ActivityLogEntry, PaginatedResult, Role, User, UserQueryParams } from '../types';

// In-memory mock storage for demo/testing only
const users: User[] = [];
const roles: Role[] = [];
const logs: ActivityLogEntry[] = [];

function uid(prefix: string = 'id'): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export function seedIfEmpty() {
  if (roles.length === 0) {
    const now = new Date().toISOString();
    roles.push(
      { id: uid('role'), name: 'Admin', description: 'Full access', permissions: ['users.read','users.create','users.update','users.delete','roles.read','roles.create','roles.update','roles.delete','audit.read'], createdAt: now, updatedAt: now },
      { id: uid('role'), name: 'Faculty', description: 'Faculty access', permissions: ['users.read'], createdAt: now, updatedAt: now },
      { id: uid('role'), name: 'Student', description: 'Student access', permissions: ['users.read'], createdAt: now, updatedAt: now },
      { id: uid('role'), name: 'Staff', description: 'Staff access', permissions: ['users.read'], createdAt: now, updatedAt: now },
    );
  }
}

export function listRoles(): Role[] { return roles; }
export function createRole(data: Omit<Role, 'id'|'createdAt'|'updatedAt'>): Role {
  const now = new Date().toISOString();
  const role: Role = { ...data, id: uid('role'), createdAt: now, updatedAt: now };
  roles.push(role);
  return role;
}
export function updateRole(id: string, data: Partial<Role>): Role | null {
  const idx = roles.findIndex(r => r.id === id);
  if (idx === -1) return null;
  roles[idx] = { ...roles[idx], ...data, updatedAt: new Date().toISOString() };
  return roles[idx];
}
export function deleteRole(id: string): boolean {
  const idx = roles.findIndex(r => r.id === id);
  if (idx === -1) return false;
  roles.splice(idx,1);
  return true;
}

export function listUsers(query: UserQueryParams = {}): PaginatedResult<User> {
  const { search, role, status, department, page = 1, pageSize = 10, sortBy = 'dateJoined', sortDir = 'desc' } = query;
  let filtered = [...users];
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(u =>
      u.username.toLowerCase().includes(s) ||
      u.email.toLowerCase().includes(s) ||
      u.firstName.toLowerCase().includes(s) ||
      u.lastName.toLowerCase().includes(s)
    );
  }
  if (role) filtered = filtered.filter(u => u.roles.includes(role));
  if (status) filtered = filtered.filter(u => u.status === status);
  if (department) filtered = filtered.filter(u => u.profile.department === department);

  filtered.sort((a,b) => {
    const dir = sortDir === 'asc' ? 1 : -1;
    const av = (a as any)[sortBy] ?? '';
    const bv = (b as any)[sortBy] ?? '';
    return av > bv ? dir : av < bv ? -dir : 0;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);
  return { items, total, page, pageSize };
}

export function getUser(id: string): User | null { return users.find(u => u.id === id) ?? null; }
export function createUser(data: Omit<User, 'id'|'dateJoined'>): User {
  const user: User = { ...data, id: uid('user'), dateJoined: new Date().toISOString(), password: data.password ?? undefined };
  users.unshift(user);
  logs.unshift({ id: uid('log'), userId: user.id, type: 'user.created', message: `User ${user.username} created`, createdAt: new Date().toISOString() });
  return user;
}
export function updateUser(id: string, data: Partial<User>): User | null {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...data };
  logs.unshift({ id: uid('log'), userId: id, type: 'profile.update', message: `User updated`, createdAt: new Date().toISOString() });
  return users[idx];
}
export function deleteUser(id: string): boolean {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return false;
  const [removed] = users.splice(idx,1);
  logs.unshift({ id: uid('log'), userId: id, type: 'user.deleted', message: `User ${removed.username} deleted`, createdAt: new Date().toISOString() });
  return true;
}

export function listLogs(userId?: string): ActivityLogEntry[] {
  if (!userId) return logs.slice(0, 100);
  return logs.filter(l => l.userId === userId).slice(0, 100);
}

export function setUserStatus(id: string, status: User['status']): User | null {
  const user = updateUser(id, { status });
  if (user) logs.unshift({ id: uid('log'), userId: id, type: 'status.changed', message: `Status -> ${status}`, createdAt: new Date().toISOString() });
  return user;
}

export function adminResetPassword(id: string, newPassword: string): boolean {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return false;
  users[idx].password = newPassword; // Demo-only; never store plain text in production
  logs.unshift({ id: uid('log'), userId: id, type: 'password.reset', message: `Password reset by admin`, createdAt: new Date().toISOString() });
  return true;
}


