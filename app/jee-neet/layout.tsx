import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET, JEE & CUET Coaching - JKKN Matric Hr Sec School",
  description: "Achieve exam success with comprehensive NEET, JEE, and CUET coaching at JKKN Matric Hr Sec School. Expert faculty, flexible scheduling, personalized attention, and proven results for engineering, medicine, and law aspirants.",
  keywords: "NEET coaching, JEE preparation, CUET coaching, JKKN school, medical entrance, engineering entrance, law entrance, competitive exams, IIT JEE, AIIMS, NEET UG, university admission, professional courses",
  authors: [{ name: "JKKN Matriculation School" }],
  robots: "index, follow",
  openGraph: {
    title: "NEET, JEE & CUET Coaching - JKKN Matric Hr Sec School",
    description: "Achieve exam success with comprehensive NEET, JEE, and CUET coaching. Expert faculty, flexible scheduling, and personalized attention for professional course aspirants.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/jee-neet-cuet-banner.jpg",
        width: 1200,
        height: 630,
        alt: "NEET JEE CUET Coaching at JKKN School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET, JEE & CUET Coaching - JKKN Matric Hr Sec School",
    description: "Achieve exam success with comprehensive NEET, JEE, and CUET coaching at JKKN Matric Hr Sec School.",
    images: ["/images/jee-neet-cuet-banner.jpg"],
  },
};

export default function JeeNeetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 