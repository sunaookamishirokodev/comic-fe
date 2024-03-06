import { Chapter, Comic, TranslatorTeam, User } from "@/typings/endpoints";

const Shiroko: User = {
  id: "01",
  createAt: new Date(),
  premium: true,
  username: "sunaookamishiroko.dev",
};

const SoloLevelingChapter: Chapter[] = [
  {
    id: "001",
    description: "",
    createAt: new Date(),
    updateAt: new Date(),
    images: [""],
    title: "Chapter 1",
  },
];

const NZMnagaTeam: TranslatorTeam = {
  id: "1",
  members: [Shiroko],
};

const Comics: Comic[] = [
  {
    id: "1",
    name: "Solo Leveling",
    description:
      "Known as the Weakest Hunter of All Mankind, E-rank hunter Jinwoo Sung’s contribution to raids amounts to trying not to get killed. Unfortunately, between his mother’s hospital bills, his sister’s tuition, and his own lack of job prospects, he has no choice but to continue to put his life on the line. So when an opportunity arises for a bigger payout, he takes it…only to come face-to-face with a being whose power outranks anything he’s ever seen! With the party leader missing an arm and the only healer a quivering mess, can Jinwoo some­how find them a way out?",
    aliases: "Tôi thăng cấp một mình",
    author: ["Chugong"],
    createAt: new Date(),
    updateAt: new Date(),
    category: ["Action", "Magic", "Fantasy", "Supernatural"],
    banner:
      "https://images.fptplay.net/media/OTT/VOD/2023/12/28/solo-leveling-toi-thang-cap-mot-minh-phan-1-fpt-play-1703737812530_Landscape.jpg",
    thumbnail:
      "https://mangadex.org/covers/d6c1f26b-095a-411e-ae8f-faca5c39538a/f85d10d1-8e3c-4e38-9e38-008e6bc24502.jpg",
    chapters: SoloLevelingChapter,
    postBy: Shiroko,
    translatorTeam: NZMnagaTeam,
  },
  {
    id: "1",
    name: "Tonikaku Kawaii",
    description:
      "Yuzaki Nasa (bầu trời đầy sao theo tiếng Nhật) là một người rất tài giỏi và đa năng. Vào ngày định mệnh ấy, khi đang chuẩn bị cho kì thi đầu vào quan trọng thì cậu gặp được một cô gái xinh đẹp. Với Nasa, đó dường như là định mệnh đang vẫy gọi cậu bước tới một cuộc sống mới khi có người vợ Tsukasa bên cạnh. Tuy nhiên, mọi chuyện lại không đơn giản như vậy...",
    aliases: "Tôi thăng cấp một mình",
    author: ["Chugong"],
    createAt: new Date(),
    updateAt: new Date(),
    category: ["Action", "Magic", "Fantasy", "Supernatural"],
    banner:
      "https://anime.atsit.in/l/wp-content/uploads/2023/03/tonikawa-over-the-moon-for-you-phan-2-tiet-lo-doan-gioi-thieu-moi-va-buoi-ra-mat-ngay-7-thang-4.webp",
    thumbnail:
      "https://mangadex.org/covers/30f3ac69-21b6-45ad-a110-d011b7aaadaa/0dddf687-95ec-4e88-acd7-cd90a4c9749a.jpg",
    chapters: SoloLevelingChapter,
    postBy: Shiroko,
    translatorTeam: NZMnagaTeam,
  },
];

export default Comics;
