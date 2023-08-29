import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assignment 11",
  description: "Building a Cookie-Based Web App with Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
