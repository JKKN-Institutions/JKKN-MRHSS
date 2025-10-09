import { seedIfEmpty, listRoles, listUsers } from './utils/storage';

seedIfEmpty();

export const demoRoles = listRoles();
export const demoUsersPage1 = listUsers({ page: 1, pageSize: 10 });


