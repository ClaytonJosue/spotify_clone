import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "A clone from Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
