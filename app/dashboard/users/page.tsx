'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser, isAuthenticated } from '@/app/admin/utils/auth';
import { createUser, deleteUser, listUsers, seedIfEmpty, setUserStatus, updateUser, listRoles, createRole, updateRole } from './utils/storage';
import { User } from './types';
import UserTable from './components/UserTable';
import UserFilters from './components/UserFilters';
import StatsCards from './components/StatsCards';
import ActivityChart from './components/ActivityChart';
import UserFormDrawer from './components/UserFormDrawer';
import RoleModal from './components/RoleModal';

seedIfEmpty();

export default function UsersPage() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const u = getUser();
    if (!u || String(u.role).toLowerCase() !== 'administrator') {
      router.push('/dashboard');
    }
  }, [router]);
  const [query, setQuery] = useState({ search: '', role: '', status: undefined as any, department: undefined as any });
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [roleModal, setRoleModal] = useState<{ open: boolean; roleId?: string }>(()=>({ open: false }));

  const { items, total } = useMemo(() => listUsers({ ...query, page, pageSize: 10 }), [query, page]);

  const stats = useMemo(() => {
    const all = listUsers({ page: 1, pageSize: 9999 }).items;
    const active = all.filter(u => u.status === 'active').length;
    const inactive = all.filter(u => u.status === 'inactive').length;
    const suspended = all.filter(u => u.status === 'suspended').length;
    return [
      { label: 'Total Users', value: all.length },
      { label: 'Active', value: active, tone: 'success' as const },
      { label: 'Inactive', value: inactive, tone: 'warning' as const },
      { label: 'Suspended', value: suspended, tone: 'danger' as const },
    ];
  }, [query]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-semibold">Users</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Manage users, roles, and permissions</div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md bg-blue-600 text-white px-3 py-2 hover:bg-blue-700" onClick={()=>{ setEditing(null); setDrawerOpen(true); }}>Add User</button>
          <button className="rounded-md bg-gray-100 dark:bg-gray-900 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-800" onClick={()=>setRoleModal({ open: true })}>Manage Roles</button>
        </div>
      </div>

      <StatsCards stats={stats} />

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 space-y-3">
        <UserFilters search={query.search} role={query.role} status={query.status} department={query.department} onChange={(next)=>{ setPage(1); setQuery(v=>({ ...v, ...next })); }} />
        <UserTable users={items} onEdit={(u)=>{ setEditing(u); setDrawerOpen(true); }} onDelete={(u)=>{ deleteUser(u.id); setPage(1); setQuery(v=>({ ...v })); }} />
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600 dark:text-gray-300">Page {page} of {Math.max(1, Math.ceil(total / 10))} • {total} results</div>
          <div className="flex gap-2">
            <button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="rounded-md px-2 py-1 bg-gray-100 dark:bg-gray-900 disabled:opacity-50">Prev</button>
            <button disabled={page>=Math.ceil(total/10)} onClick={()=>setPage(p=>p+1)} className="rounded-md px-2 py-1 bg-gray-100 dark:bg-gray-900 disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
        <div className="text-sm font-medium mb-2">User Growth (demo)</div>
        <ActivityChart series={[2,3,4,3,6,5,8,7,9,12,10,14]} />
      </div>

      <UserFormDrawer
        open={drawerOpen}
        user={editing}
        onClose={()=>setDrawerOpen(false)}
        onSubmit={(data)=>{
          if (editing) updateUser(editing.id, data as any); else createUser({ ...(data as User), profile: (data as any).profile ?? {}, roles: (data as any).roles ?? ['Student'], status: (data as any).status ?? 'active', twoFactorEnabled: false });
          setDrawerOpen(false);
          setEditing(null);
          setQuery(v=>({ ...v }));
        }}
      />

      <RoleModal
        open={roleModal.open}
        onClose={()=>setRoleModal({ open: false })}
        onSubmit={(data)=>{
          if ((data as any).id) updateRole((data as any).id, data as any); else createRole({ name: String(data.name ?? 'Custom'), description: data.description, permissions: data.permissions ?? [] });
          setRoleModal({ open: false });
        }}
      />
    </div>
  );
}


