import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-44 bg-secondary h-screen flex flex-col justify-between">
      <div>
        <Link href={"/"} tabIndex={-1} className="flex my-6">
          <Image src="/logo.png" alt="Logo" width={75} height={75} className="mx-auto" />
        </Link>

        <ul className="flex flex-col gap-0.5">
          {[
            {
              title: "Khám phá",
              icon: "/explore.svg",
              href: "/explore",
            },
            {
              title: "Thư viện",
              icon: "/library.svg",
              href: "/library",
            },
            {
              title: "Mới & Phổ biến",
              icon: "/new.svg",
              href: "/popular",
            },
          ].map(({ title, icon, href }, i) => {
            return (
              <Link href={href} tabIndex={-1} key={i} className="before:cursor-pointer before:rounded-r-full relative before:absolute before:h-full before:w-0 before:hover:w-full before:hover:bg-white/10 before:transition-all before:duration-200">
                <div className="flex gap-3 px-2 py-1.5">
                  <Image src={icon} width={25} height={25} alt={title} />
                  <span>{title}</span>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="mb-2">
      <ul className="flex flex-col gap-0.5">
          {[
            {
              title: "Cài đặt",
              icon: "/setting.svg",
              href: "/setting",
            },
            {
              title: "Người dùng",
              icon: "/user.svg",
              href: "/user",
            }
          ].map(({ title, icon, href }, i) => {
            return (
              <Link href={href} tabIndex={-1} key={i} className="before:cursor-pointer before:rounded-r-full relative before:absolute before:h-full before:w-0 before:hover:w-full before:hover:bg-white/10 before:transition-all before:duration-200">
                <div className="flex gap-3 px-2 py-1.5">
                  <Image src={icon} width={25} height={25} alt={title} />
                  <span>{title}</span>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
