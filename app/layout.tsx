import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import { Providers } from "@/components/Providers";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "AVI Enterprises",
  description: "A high-tech company specializing in manufacturing and distributing welding & cutting equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head />
      <body>
        <Providers>
          <Toaster />
          <Sonner />
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}