'use client';
import { useEffect, useState } from 'react';
import { User } from '../../users/types';

interface Props {
  open: boolean;
  user?: User | null;
  onClose: () => void;
  onSubmit: (data: Partial<User>) => void;
}

export default function UserFormDrawer({ open, user, onClose, onSubmit }: Props) {
  const [form, setForm] = useState<Partial<User>>({});
  useEffect(() => { setForm(user ?? {}); }, [user]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <div className="text-lg font-semibold">{user ? 'Edit User' : 'Add User'}</div>
          <button onClick={onClose} className="rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-900">Close</button>
        </div>
        <div className="p-4 grid grid-cols-1 gap-3">
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="First Name" value={form.firstName ?? ''} onChange={(e)=>setForm(v=>({ ...v, firstName: e.target.value }))} />
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="Last Name" value={form.lastName ?? ''} onChange={(e)=>setForm(v=>({ ...v, lastName: e.target.value }))} />
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="Username" value={form.username ?? ''} onChange={(e)=>setForm(v=>({ ...v, username: e.target.value }))} />
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="Email" value={form.email ?? ''} onChange={(e)=>setForm(v=>({ ...v, email: e.target.value }))} />
          <select className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" value={(form.status as string) ?? 'active'} onChange={(e)=>setForm(v=>({ ...v, status: e.target.value as any }))}>
            {['active','inactive','suspended'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select multiple className="min-h-24 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2" value={(form.roles as string[]) ?? []} onChange={(e)=>{
            const list = Array.from(e.target.selectedOptions).map(o=>o.value);
            setForm(v=>({ ...v, roles: list }));
          }}>
            {['Admin','Faculty','Student','Staff','Guest'].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="Department" value={form.profile?.department ?? ''} onChange={(e)=>setForm(v=>({ ...v, profile: { ...(v.profile ?? {}), department: e.target.value } }))} />
          <input className="h-10 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3" placeholder="Designation" value={form.profile?.designation ?? ''} onChange={(e)=>setForm(v=>({ ...v, profile: { ...(v.profile ?? {}), designation: e.target.value } }))} />
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800">Cancel</button>
          <button onClick={()=>onSubmit(form)} className="rounded-md px-3 py-2 bg-blue-600 text-white hover:bg-blue-700">Save</button>
        </div>
      </div>
    </div>
  );
}


