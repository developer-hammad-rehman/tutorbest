import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "AI Platform For Helping Student",
  description: "Tutor Best Ai Platform For Student",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
      {children}
       </body>
    </html>
  );
}