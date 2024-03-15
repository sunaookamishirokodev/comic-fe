import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History - NZManga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
