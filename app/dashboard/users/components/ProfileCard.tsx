'use client';
import { User } from '../../users/types';

export default function ProfileCard({ user }: { user: User }) {
  const completion = [user.firstName, user.lastName, user.email, user.profile.department, user.profile.designation].filter(Boolean).length;
  const pct = Math.round((completion / 5) * 100);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
          <span className="text-lg font-semibold">{user.firstName[0]}{user.lastName[0]}</span>
        </div>
        <div>
          <div className="font-semibold">{user.firstName} {user.lastName}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">{user.email}</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-xs mb-1">Profile completion</div>
        <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-1 text-xs text-gray-600 dark:text-gray-300">{pct}%</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-md bg-gray-50 dark:bg-gray-900/40 p-2">
          <div className="opacity-70">Department</div>
          <div className="font-medium">{user.profile.department ?? '-'}</div>
        </div>
        <div className="rounded-md bg-gray-50 dark:bg-gray-900/40 p-2">
          <div className="opacity-70">Designation</div>
          <div className="font-medium">{user.profile.designation ?? '-'}</div>
        </div>
      </div>
    </div>
  );
}


