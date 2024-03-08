import ExtraCarousel from "@/components/extra-carousel";
import MainCarousel from "@/components/main-carousel";
import PrimarySideBar from "@/components/primary-sidebar";
import Comics from "@/data/comic";

export default function Home() {
  return (
    <div className="flex">
      <PrimarySideBar />
      <div className="relative max-h-screen flex-1 overflow-x-hidden ">
        <main className="absolute right-0 top-0 w-full bg-primary">
          <MainCarousel />
          <ExtraCarousel data={Comics} title="Cập nhật gần đây" />
        </main>
      </div>
    </div>
  );
}
