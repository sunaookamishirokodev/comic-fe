import SideBar from "@/components/sidebar";
import localFont from "next/font/local";

const AppleJuicesFont = localFont({ src: "../fonts/AppleJuice.ttf" });

export default function Home() {
  return (
    <main className={`flex`}>
      <SideBar />
    </main>
  );
}
