import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School History & Vision - NV School",
  description: "Discover NV School's inspiring journey from 1995 to present, our vision for the future, and the values that guide us in shaping tomorrow's leaders.",
  keywords: "school history, vision, mission, core values, educational excellence, NV School",
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 