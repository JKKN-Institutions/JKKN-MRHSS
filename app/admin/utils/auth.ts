"use client";

const AUTH_TOKEN_KEY = 'admin_auth_token';
const USER_DATA_KEY = 'admin_user_data';

export const DUMMY_CREDENTIALS = {
  email: 'admin@college.com',
  password: 'admin123',
};

export const authenticate = (email: string, password: string): boolean => {
  // Prefer created users from in-memory storage; fall back to custom credentials if provided
  try {
    // dynamic import to avoid circular deps at build
    const mod = require('../../dashboard/users/utils/storage');
    if (mod && typeof mod.findUserByEmail === 'function') {
      const u = mod.findUserByEmail(email);
      if (u && u.password && u.password === password) {
        const token = btoa(`${email}:${Date.now()}`);
        const userData = {
          email: u.email,
          name: `${u.firstName} ${u.lastName}`.trim() || u.username,
          role: u.roles?.[0] ?? 'User',
        };
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        return true;
      }
    }
  } catch {}

  const storedEmail = localStorage.getItem('admin_login_email') || DUMMY_CREDENTIALS.email;
  const storedPassword = localStorage.getItem('admin_login_password') || DUMMY_CREDENTIALS.password;
  if (email === storedEmail && password === storedPassword) {
    const token = btoa(`${email}:${Date.now()}`);
    const userData = { email, name: 'Admin User', role: 'Administrator' };
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    return true;
  }
  return false;
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(AUTH_TOKEN_KEY) !== null;
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
};

export const getUser = () => {
  if (typeof window === 'undefined') return null;
  const userData = localStorage.getItem(USER_DATA_KEY);
  return userData ? JSON.parse(userData) : null;
};

