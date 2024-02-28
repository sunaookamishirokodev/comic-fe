import SecondarySideBar from "../secondary-sidebar";
import Search from "./search";

export default function Main() {
  return (
    <div className="flex flex-1">
      <main className="flex-1 bg-primary px-5 py-8">
        <Search />
      </main>
      <SecondarySideBar />
    </div>
  );
}
