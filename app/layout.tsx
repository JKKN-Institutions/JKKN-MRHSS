import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ErrorBoundary from './components/ErrorBoundary'
// import ClientErrorHandler from './components/ClientErrorHandler'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JKKN Matriculation Higher Secondary School",
  description: "A modern, interactive school website providing quality education with innovative teaching methods. Explore our curriculum, faculty, events, and more.",
  keywords: "school, education, curriculum, faculty, students, academics, events",
  authors: [{ name: "JKKN Matriculation Higher Secondary School" }],
  robots: "index, follow",
  openGraph: {
    title: "JKKN Matriculation Higher Secondary School - Excellence in Education",
    description: "A modern, interactive school website providing quality education with innovative teaching methods.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-background`}
      >
        {/* <ClientErrorHandler /> */}
        {/* <ErrorBoundary> */}
          {children}
        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}
