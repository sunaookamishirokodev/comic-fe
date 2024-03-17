import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translator Team - MangaVN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
