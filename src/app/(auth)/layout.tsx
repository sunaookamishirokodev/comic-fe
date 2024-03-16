import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - NZManga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
