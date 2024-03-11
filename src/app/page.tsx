"use server";
import ExtraCarousel from "@/components/extra-carousel";
import MainCarousel from "@/components/main-carousel";
import PrimarySideBar from "@/components/primary-sidebar";
import axios from "axios";

const getRcmComics = async (quantity: number) => {
  const req = await axios.get(
    `https://shirokodev.site/comics/recommend?quantity=${quantity}`,
  );
  return req.data;
};

export default async function Home() {
  const rcmComics = await getRcmComics(3);
  return (
    <div className="flex">
      <PrimarySideBar />
      <div className="relative max-h-screen flex-1 overflow-x-hidden ">
        <main className="absolute right-0 top-0 w-full bg-primary">
          <MainCarousel comics={rcmComics} />
          <ExtraCarousel data={rcmComics} title="Cập nhật gần đây" />
        </main>
      </div>
    </div>
  );
}
