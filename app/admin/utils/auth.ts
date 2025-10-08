'use client';

const AUTH_TOKEN_KEY = 'admin_auth_token';
const USER_DATA_KEY = 'admin_user_data';

export const DUMMY_CREDENTIALS = {
  email: 'admin@college.com',
  password: 'admin123',
};

export const authenticate = (email: string, password: string): boolean => {
  // Check if custom credentials exist in localStorage
  const storedEmail = localStorage.getItem('admin_login_email') || DUMMY_CREDENTIALS.email;
  const storedPassword = localStorage.getItem('admin_login_password') || DUMMY_CREDENTIALS.password;

  if (email === storedEmail && password === storedPassword) {
    const token = btoa(`${email}:${Date.now()}`);
    const userData = {
      email,
      name: 'Admin User',
      role: 'Administrator',
    };
    
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

