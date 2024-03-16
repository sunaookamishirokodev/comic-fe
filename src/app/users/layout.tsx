import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User - NZManga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
