import { Inter } from "next/font/google";
// Import globals.css to top level component
import "@/app/user_interface/globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define static metadata to be used for SEO utilizing native NextJS SEO support
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accounted",
  description: "Financial ledger",
};

// Create a Root Layout to allow modification of initial HTML returned from server
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
