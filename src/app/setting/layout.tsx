import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting - MangaVN",
};

export default function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
