import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - MangaVN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
