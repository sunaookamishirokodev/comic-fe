import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import PrimarySideBar from "@/components/primary-sidebar";
import Footer from "@/components/footer";

const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - ComicVN",
  description:
    "ComicVN là trang web đọc truyện manga miễn phí mới nhất cho người Việt Nam. Bạn có thể thưởng thức nhiều thể loại truyện tranh khác nhau, từ hành động, phiêu lưu, tình cảm, hài hước, kinh dị, đến khoa học viễn tưởng. Trang web có giao diện thân thiện và tiện lợi, giúp bạn đọc truyện dễ dàng và nhanh chóng. Trang web cũng có nhiều truyện độc quyền và chất lượng, được dịch bởi các nhóm dịch chuyên nghiệp. Hãy truy cập ComicVN để khám phá thế giới truyện tranh đầy màu sắc và hấp dẫn!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${font.className} flex text-white`}>
        <PrimarySideBar />
        <div className="relative max-h-screen flex-1 overflow-x-hidden ">
          <main className="absolute right-0 top-0 w-full bg-primary">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
