import Carousel from "@/components/carousel";
import PrimarySideBar from "@/components/primary-sidebar";

export default function Home() {
  return (
    <div className="flex">
      <PrimarySideBar />
      <div className="flex flex-1 bg-primary">
        <main className="flex-1">
          <Carousel />
        </main>
      </div>
    </div>
  );
}
