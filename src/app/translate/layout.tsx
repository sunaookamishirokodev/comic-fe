import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translator Team - NZManga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
