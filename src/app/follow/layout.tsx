import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Follow - MangaVN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
