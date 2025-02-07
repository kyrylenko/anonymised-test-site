import "./globals.css";
import type { Metadata } from "next";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "Testing Website",
  description:
    "A website for testing different tag installations and CMP scripts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
