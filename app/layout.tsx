import "@ui/global.css";
import { Metadata } from "next";
import { inter } from "@ui/fonts";

export const metadata: Metadata = {
  title: "Next.js dashboard Full-Stack App",
  description: "Build dynamic, and modern dashboard app using Next.js with PostgreSQL"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}> {children} </body>
    </html>
  );
}