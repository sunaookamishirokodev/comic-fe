"use client";
import { edenFetch } from "@elysiajs/eden";

const fetch = edenFetch(
  process.env.BACKEND_SERVER_URL ?? "http://localhost:5000",
);

export default function Home() {
  const handlePost = async (event: React.MouseEvent<HTMLButtonElement>) => {
    interface data {
      name: string;
      aliases: string[];
      thumbnail: string;
      description: string;
      genre: (
        | "DRAMA"
        | "ECCHI"
        | "ACTION"
        | "COMEDY"
        | "FANTASY"
        | "SHOUNEN"
        | "ADVENTURE"
        | "MANHWA"
        | "MANHUA"
        | "WEBTOON"
        | "ISEKAI"
        | "HAREM"
        | "SCI_FI"
        | "SEINEN"
        | "HORROR"
        | "MYSTERY"
        | "ROMANCE"
        | "SCHOOL_LIFE"
        | "SUPERNATURAL"
        | "DETECTIVE"
        | "MARTIAL"
        | "SWORDSMANSHIP"
      )[];
      color: boolean;
    }

    const data: data = {
      name: "Thám tử lừng danh - Conan",
      aliases: [],
      thumbnail:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx235-XucEZpR3CRaV.jpg",
      description:
        'Kudo Shinichi là một thám tử trung học mười bảy tuổi được mọi người gọi là "Sherlock Holmes hiện đại". Tuy nhiên, vào một đêm sau buổi hẹn hò với người yêu thời thơ ấu của mình, Ran, Shinichi chứng kiến ​​một vụ buôn bán bất hợp pháp và mất cảnh giác, bị đánh bất tỉnh và cho uống một loại thuốc được cho là sẽ giết chết anh... nhưng anh tỉnh dậy và thấy mình bị thu nhỏ lại. cho một đứa trẻ bảy tuổi. Để truy tìm những kẻ đã làm điều này với mình, Shinichi đã che giấu danh tính của mình và sống với Ran, người có cha là một thám tử vô vọng, kéo theo đó là hàng loạt vụ giết người và bí ẩn mà anh phải giải quyết.',
      genre: ["DRAMA", "ACTION", "COMEDY", "SHOUNEN", "DETECTIVE"],
      color: false,
    };

    fetch("/api/dashboard", {
      method: "POST",
      params: {},
      body: data,
      query: {},
    }).then(console.log);
  };

  return (
    <button
      onClick={handlePost}
      className="border-2 border-black p-8 text-4xl text-black"
    >
      Post
    </button>
  );
}
