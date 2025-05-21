import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cassive",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
};

export default RootLayout;
