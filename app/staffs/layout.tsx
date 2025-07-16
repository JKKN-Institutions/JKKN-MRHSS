import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Details | NV School - Meet Our Expert Faculty",
  description: "Meet our dedicated team of experienced educators who bring passion, expertise, and innovation to create an exceptional learning environment for every student at NV School.",
  keywords: "staff, faculty, teachers, educators, school staff, NV School, education team, academic staff",
  authors: [{ name: "NV School" }],
  robots: "index, follow",
  openGraph: {
    title: "Staff Details | NV School - Meet Our Expert Faculty",
    description: "Meet our dedicated team of experienced educators who bring passion, expertise, and innovation to create an exceptional learning environment.",
    type: "website",
    locale: "en_US",
  },
};

export default function StaffsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 