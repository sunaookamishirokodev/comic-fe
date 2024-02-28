import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - NZManga",
  description: "NZManga là trang web đọc truyện manga miễn phí mới nhất cho người Việt Nam. Bạn có thể thưởng thức nhiều thể loại truyện tranh khác nhau, từ hành động, phiêu lưu, tình cảm, hài hước, kinh dị, đến khoa học viễn tưởng. Trang web có giao diện thân thiện và tiện lợi, giúp bạn đọc truyện dễ dàng và nhanh chóng. Trang web cũng có nhiều truyện độc quyền và chất lượng, được dịch bởi các nhóm dịch chuyên nghiệp. Hãy truy cập NZManga để khám phá thế giới truyện tranh đầy màu sắc và hấp dẫn!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${font.className} text-white`}>{children}</body>
    </html>
  );
}
