import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 min-h-20 w-full bg-primary p-5">
      <div className="flex w-full">
        <div className="basis-1/5 px-1">
          <span className="text-lg font-semibold">About us</span>
          <p className="text-sm text-white/80">
            An organization in Vietnam belonging to the GenZ generation with
            creativity and new style, bringing new experiences to you.
          </p>
        </div>
        <div className="basis-1/5 px-1">
          <span className="text-lg font-semibold">Contact us</span>
          <ul>
            {[
              {
                name: "by github",
                value: "https://github.com/sunaookamishirokodev",
              },
              {
                name: "by email",
                value: "mailto:lethanhtrung.trungle@gmail.com",
              },
              {
                name: "by telephone",
                value: "#",
              },
              {
                name: "by facebook",
                value: "https://www.facebook.com/sunaookamishirokodev",
              },
              {
                name: "by discord",
                value: "https://discord.com/users/1216624112139632711",
              },
            ].map(({ name, value }, i) => {
              return (
                <li key={i}>
                  <Link
                    href={value}
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    target="_blank"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
