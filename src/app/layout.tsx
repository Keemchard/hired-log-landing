import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://hired-log.vercel.app";

const APP_DESCRIPTION =
  "Track job applications, visualize your pipeline with Kanban boards, analyze trends, generate AI cover letters, match your resume, and prep for interviews — all in one free tool.";

export const metadata: Metadata = {
  title: "hired.log — Free AI-Powered Job Application Tracker",
  description: APP_DESCRIPTION,
  keywords: [
    "job tracker",
    "job application tracker",
    "free job tracker",
    "job hunt tracker",
    "AI cover letter generator",
    "resume match score",
    "AI interview prep",
    "kanban job tracker",
    "job search analytics",
    "career tracker",
    "interview tracker",
    "hired.log",
  ],
  authors: [{ name: "KC" }],
  openGraph: {
    type: "website",
    url: APP_URL,
    title: "hired.log — Free AI-Powered Job Application Tracker",
    description: APP_DESCRIPTION,
    siteName: "hired.log",
  },
  twitter: {
    card: "summary_large_image",
    title: "hired.log — Free AI-Powered Job Application Tracker",
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
