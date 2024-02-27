import SecondarySideBar from "../secondary-sidebar";
import Search from "./search";

export default function Main() {
  return (
    <div className="flex flex-1">
      <main className="flex-1 bg-primary p-5">
        <Search />
      </main>
      <SecondarySideBar />
    </div>
  );
}
