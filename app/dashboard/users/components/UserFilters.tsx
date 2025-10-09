'use client';
import { UserStatus } from '../../users/types';

interface Props {
  search: string;
  role: string;
  status?: UserStatus;
  department?: string;
  onChange: (next: Partial<{ search: string; role: string; status?: UserStatus; department?: string; }>) => void;
}

export default function UserFilters({ search, role, status, department, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-300">Search</label>
        <input value={search} onChange={(e) => onChange({ search: e.target.value })} placeholder="Name, email, username" className="h-9 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" />
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-300">Role</label>
        <select value={role} onChange={(e) => onChange({ role: e.target.value })} className="h-9 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3">
          <option value="">All</option>
          {['Admin','Faculty','Student','Staff','Guest'].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-300">Status</label>
        <select value={status ?? ''} onChange={(e) => onChange({ status: (e.target.value || undefined) as UserStatus })} className="h-9 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3">
          <option value="">All</option>
          {['active','inactive','suspended'].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 dark:text-gray-300">Department</label>
        <select value={department ?? ''} onChange={(e) => onChange({ department: (e.target.value || undefined) })} className="h-9 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3">
          <option value="">All</option>
          {['CSE','ECE','EEE','MECH','CIVIL'].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


