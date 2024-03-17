import Link from "next/link";
import Contact from "./contact";

export default function Footer() {
  return (
    <footer className="mt-10 min-h-20 w-full bg-primary p-5">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <span className="text-md font-semibold">Về chúng tôi</span>
          <p className="text-sm text-white/80">
            Một tổ chức phát triển công nghệ thông tin thế hệ GenZ đến từ Việt
            Nam, với niềm đam mê và sáng tạo, đem lại cho bạn những trải nghiệm
            mới mẻ.
          </p>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <span className="text-md font-semibold">Liên hệ với chúng tôi</span>
          <ul>
            {[
              {
                name: "Github: Sunaookami Shiroko",
                value: "https://github.com/sunaookamishirokodev",
              },
              {
                name: "Email: me@shirokodev.site",
                value: "mailto:me@shirokodev.site",
              },
              {
                name: "Điện thoại: #",
                value: "#",
              },
              {
                name: "Facebook: Xiro Tư Bản",
                value: "https://www.facebook.com/sunaookamishirokodev",
              },
              {
                name: "Discord: Liras",
                value: "https://discord.com/users/1216624112139632711",
              },
              {
                name: "Vị trí: Việt Nam",
                value: "#",
              },
            ].map(({ name, value }, i) => {
              return (
                <li key={i}>
                  <Link
                    href={value}
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    target="_blank"
                    className="text-sm text-white/80 hover:sm:text-white"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <span className="text-md font-semibold">Sản phẩm khác (beta)</span>
          <ul>
            {[
              {
                name: "Github: Sunaookami Shiroko",
                value: "https://github.com/sunaookamishirokodev",
              },
              {
                name: "Email: me@shirokodev.site",
                value: "mailto:me@shirokodev.site",
              },
              {
                name: "Điện thoại: #",
                value: "#",
              },
              {
                name: "Facebook: Xiro Tư Bản",
                value: "https://www.facebook.com/sunaookamishirokodev",
              },
              {
                name: "Discord: Liras",
                value: "https://discord.com/users/1216624112139632711",
              },
              {
                name: "Vị trí: Việt Nam",
                value: "#",
              },
            ].map(({ name, value }, i) => {
              return (
                <li key={i}>
                  {/* <Link
                    href={value}
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    target="_blank"
                    className="text-sm text-white/80 hover:sm:text-white"
                  >
                    {name}
                  </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4 sm:col-span-2 lg:col-span-1">
          <span className="text-md font-semibold">Đóng góp ý kiến</span>
          <Contact />
        </div>
      </div>
    </footer>
  );
}
