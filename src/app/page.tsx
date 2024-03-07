import MainCarousel from "@/components/main-carousel";
import PrimarySideBar from "@/components/primary-sidebar";

export default function Home() {
  return (
    <div className="flex">
      <PrimarySideBar />
      <div className="flex flex-1 bg-primary">
        <main className="flex-1">
          <MainCarousel />
          
        </main>
      </div>
    </div>
  );
}
