import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Principal's Message | NV School",
  description: "A personal message from our Principal about our educational vision, values, and commitment to student excellence at NV School.",
  keywords: "Principal message, school leadership, educational vision, NV School principal",
};

export default function PrincipalMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 