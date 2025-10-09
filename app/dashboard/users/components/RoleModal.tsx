'use client';
import { useEffect, useState } from 'react';
import { Permission, Role } from '../../users/types';

interface Props {
  open: boolean;
  role?: Role | null;
  onClose: () => void;
  onSubmit: (data: Partial<Role>) => void;
}

const ALL_PERMS: Permission[] = ['users.read','users.create','users.update','users.delete','roles.read','roles.create','roles.update','roles.delete','audit.read'];

export default function RoleModal({ open, role, onClose, onSubmit }: Props) {
  const [form, setForm] = useState<Partial<Role>>({ permissions: [] });
  const [showPermissions, setShowPermissions] = useState(false);
  useEffect(() => { setForm(role ?? { permissions: [] }); }, [role]);

  return (
    // <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
    //   <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
    //   <div className={`absolute inset-0 m-auto h-fit max-h-[85vh] w-[min(480px,100vw-2rem)] overflow-hidden rounded-xl bg-white dark:bg-gray-950 shadow-xl transition-transform ${open ? 'scale-100' : 'scale-95'}`}>
    //     <div className="p-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
    //       <div className="text-base font-semibold">{role ? 'Edit Role' : 'Create Role'}</div>
    //       <button onClick={onClose} className="rounded-md px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-900">Close</button>
    //     </div>
    //     <div className="p-3 grid gap-2.5">
    //       <input className="h-9 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 text-sm" placeholder="Role name" value={form.name ?? ''} onChange={(e)=>setForm(v=>({ ...v, name: e.target.value }))} />
    //       <textarea className="min-h-18 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Description (optional)" value={form.description ?? ''} onChange={(e)=>setForm(v=>({ ...v, description: e.target.value }))} />
    //       <div className="rounded-md border border-gray-200 dark:border-gray-800">
    //         <button type="button" onClick={()=>setShowPermissions(v=>!v)} className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-900">
    //           <span className="font-medium">Permissions (optional)</span>
    //           <span className="text-xs text-gray-500">{showPermissions ? 'Hide' : 'Show'}</span>
    //         </button>
    //         {showPermissions && (
    //           <div className="px-3 pb-3">
    //             <div className="flex items-center gap-2 mb-2">
    //               <button type="button" className="rounded-md px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800" onClick={()=>setForm(v=>({ ...v, permissions: ALL_PERMS }))}>Select all</button>
    //               <button type="button" className="rounded-md px-2 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-900" onClick={()=>setForm(v=>({ ...v, permissions: [] }))}>Clear</button>
    //             </div>
    //             <div className="grid grid-cols-2 gap-2">
    //               {ALL_PERMS.map(p => (
    //                 <label key={p} className="flex items-center gap-2 text-xs">
    //                   <input type="checkbox" checked={(form.permissions as Permission[] | undefined)?.includes(p) ?? false} onChange={(e)=>{
    //                     const has = (form.permissions as Permission[] | undefined)?.includes(p);
    //                     const next = new Set(form.permissions as Permission[] | undefined ?? []);
    //                     if (e.target.checked && !has) next.add(p); else if (!e.target.checked && has) next.delete(p);
    //                     setForm(v=>({ ...v, permissions: Array.from(next) }));
    //                   }} />
    //                   <span>{p}</span>
    //                 </label>
    //               ))}
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //     <div className="p-3 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2">
    //       <button onClick={onClose} className="rounded-md px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800">Cancel</button>
    //       <button onClick={()=>onSubmit(form)} className="rounded-md px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700">Save</button>
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
}


