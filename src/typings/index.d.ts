import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Comic {
  id: string;
  name: string;
  aliases: string;
  thumbnail: Url;
  banner: Url;
  description: string;
  category: string[];
  translatorTeam: TranslatorTeam;
  author: string[];
  createAt: Date;
  updateAt: Date;
  postBy: User;
  chapters: Chapter[];
}

export interface User {
  id: string;
  username: string;
  createAt: Date;
  premium: Boolean;
}

export interface TranslatorTeam {
  id: string;
  members: User[];
}

export interface Chapter {
  id: string;
  title: string;
  description?: string;
  images: Url[];
  createAt: Date;
  updateAt: Date;
}

type Url = string;
