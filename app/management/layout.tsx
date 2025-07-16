import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Management & Administration - NV School",
  description: "Meet our dedicated leadership team, administrative staff, and learn about our governance structure, policies, and management approach at NV School.",
  keywords: "school management, administration, leadership team, governance, school policies, educational leadership, NV School",
};

export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 