import { Permission, Role } from '../types';

export function hasPermission(userPermissions: Permission[], required: Permission | Permission[]): boolean {
  if (Array.isArray(required)) return required.every(p => userPermissions.includes(p));
  return userPermissions.includes(required);
}

export function rolePermissions(role: Role): Permission[] {
  return role.permissions;
}


