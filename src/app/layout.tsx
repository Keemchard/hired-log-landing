import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://job-tracker-one-mocha.vercel.app";

export const metadata: Metadata = {
  title: "hired.log — Free Job Application Tracker",
  description:
    "Track all your job applications in one place. Log companies, monitor statuses, track interviews, and land that offer.",
  keywords: [
    "job tracker",
    "job application tracker",
    "free job tracker",
    "job hunt tracker",
    "track job applications",
    "career tracker",
    "interview tracker",
    "hired.log",
  ],
  authors: [{ name: "KC" }],
  openGraph: {
    type: "website",
    url: APP_URL,
    title: "hired.log — Free Job Application Tracker",
    description:
      "Track all your job applications in one place. Log companies, monitor statuses, track interviews, and land that offer.",
    siteName: "hired.log",
  },
  twitter: {
    card: "summary_large_image",
    title: "hired.log — Free Job Application Tracker",
    description:
      "Track all your job applications in one place. Log companies, monitor statuses, track interviews, and land that offer.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
