import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Core Values - NV School",
  description: "Explore NV School's mission, core values, and vision for educational excellence. Discover the principles that guide us in nurturing future leaders.",
  keywords: "mission, core values, vision, educational excellence, character development, academic excellence, NV School",
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 