'use client';
interface Stat {
  label: string;
  value: number | string;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

const toneClasses: Record<NonNullable<Stat['tone']>, string> = {
  default: 'bg-gray-50 text-gray-700 dark:bg-gray-900/40 dark:text-gray-200',
  success: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200',
  warning: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-200',
  danger: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200',
  info: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200',
};

export default function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((s) => (
        <div key={s.label} className={`rounded-xl p-4 border border-gray-200 dark:border-gray-800 ${toneClasses[s.tone ?? 'default']}`}>
          <div className="text-xs uppercase tracking-wide opacity-80">{s.label}</div>
          <div className="mt-1 text-2xl font-semibold">{s.value}</div>
        </div>
      ))}
    </div>
  );
}


