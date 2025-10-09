'use client';
import { useMemo } from 'react';

// Simple sparkline-like chart using CSS only (no external deps). Replace with Chart.js if needed.
export default function ActivityChart({ series }: { series: number[] }) {
  const max = useMemo(() => Math.max(1, ...series), [series]);
  return (
    <div className="h-16 w-full flex items-end gap-1">
      {series.map((v, i) => (
        <div key={i} className="flex-1 bg-blue-600/70 rounded-sm" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}


