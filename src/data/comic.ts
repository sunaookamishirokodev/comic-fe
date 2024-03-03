import { Chapter, Comic, User } from "@/typings";

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
    translatorTeam: ["NZManga"],
  },
];

export default Comics;
