import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Skip Hire",
  description: "Professional skip hire services for businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Toaster position="top-right" />
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
