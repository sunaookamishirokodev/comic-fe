import SecondarySideBar from "../secondary-sidebar";
import Search from "./search";

export default function Main() {
  return (
    <div className="flex flex-1 bg-primary">
      <main className="flex-1 px-5 py-8">
        <Search />
      </main>
      <SecondarySideBar />
    </div>
  );
}
