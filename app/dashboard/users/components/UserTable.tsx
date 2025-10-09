'use client';
import { useMemo } from 'react';
import { User } from '../../users/types';

interface Props {
  users: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

export default function UserTable({ users, onEdit, onDelete }: Props) {
  const columns = useMemo(() => ['Name', 'Username', 'Email', 'Roles', 'Status', 'Joined', 'Actions'], []);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-900/40">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-gray-900/30">
              <td className="px-4 py-3 font-medium">{u.firstName} {u.lastName}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{u.username}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{u.email}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {u.roles.map((r) => (
                    <span key={r} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 px-2 py-0.5 text-xs">{r}</span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3">
                <span className={
                  'inline-flex items-center rounded-full px-2 py-0.5 text-xs ' +
                  (u.status === 'active' ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200' :
                   u.status === 'inactive' ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' :
                   'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200')
                }>
                  {u.status}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{new Date(u.dateJoined).toLocaleDateString()}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button onClick={() => onEdit?.(u)} className="rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700">Edit</button>
                  <button
                    onClick={() => {
                      const newPassword = prompt('Enter a new password for the user');
                      if (!newPassword) return;
                      fetch('/dashboard/users/api/users', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: u.id, newPassword })
                      })
                        .then(async (res) => {
                          if (!res.ok) throw new Error(await res.text());
                          alert('Password has been reset.');
                        })
                        .catch(() => alert('Failed to reset password'));
                    }}
                    className="rounded-md bg-yellow-50 text-yellow-700 px-2 py-1 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-200 dark:hover:bg-yellow-900/50"
                  >
                    Reset Password
                  </button>
                  <button onClick={() => onDelete?.(u)} className="rounded-md bg-red-50 text-red-600 px-2 py-1 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-200 dark:hover:bg-red-900/50">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


