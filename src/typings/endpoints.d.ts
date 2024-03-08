export interface Comic {
  id: string;
  name: string;
  aliases: string;
  thumbnail: Url;
  banner: Url;
  description: string;
  category: string[];
  translatorTeam: TranslatorTeam;
  author: User;
  createAt: Date;
  updateAt: Date;
  chapters: Chapter[];
}

export interface History {
  id: string;
  chapters: string[];
}

export interface User {
  id: string;
  username: string;
  createAt: Date;
  premium: Boolean;
  follow?: Follow[];
  history?: string[];
}

export interface TranslatorTeam {
  id: string;
  members: User[];
}

export interface Chapter {
  comicId: string;
  id: string;
  number: number;
  title: string;
  description?: string;
  images: Url[];
  createAt: Date;
  updateAt: Date;
}

type Url = string;
type Follow = string;
