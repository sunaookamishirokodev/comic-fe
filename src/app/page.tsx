import Main from "@/components/main";
import PrimarySideBar from "@/components/primary-sidebar";

export default function Home() {
  return (
    <div className="flex">
      <PrimarySideBar />
      <Main />
    </div>
  );
}
