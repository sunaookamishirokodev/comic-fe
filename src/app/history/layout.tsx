import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History - MangaVN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
