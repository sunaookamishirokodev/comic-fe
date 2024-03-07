import Image from "next/image";
import Link from "next/link";

export default function PrimarySideBar() {
  return (
    <div className="flex h-screen w-44 select-none flex-col gap-2 bg-secondary">
      <Link href={"/"} tabIndex={-1} className="my-6 flex">
        <Image
          priority
          src="/logo.png"
          alt="Logo"
          width={75}
          height={75}
          className="mx-auto"
        />
      </Link>

      <ul className="flex flex-col gap-0.5">
        {[
          {
            title: "Khám phá",
            icon: "/explore.svg",
            href: "/explore",
          },
          {
            title: "Lịch sử",
            icon: "/history.svg",
            href: "/history",
          },
          {
            title: "Ưa thích",
            icon: "/favourite.svg",
            href: "/favourite",
          },
        ].map(({ title, icon, href }, i) => {
          return (
            <Link
              href={href}
              tabIndex={-1}
              key={i}
              className="relative before:absolute before:h-full before:w-0 before:cursor-pointer before:rounded-r-full before:transition-all before:duration-200 before:hover:w-full before:hover:bg-white/10"
            >
              <div className="flex gap-3 px-2 py-1.5">
                <Image src={icon} width={25} height={25} alt={title} />
                <span>{title}</span>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
