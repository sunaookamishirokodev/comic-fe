export enum Status {
  IN_PROCESS,
  COMPLETE,
  COMING_SOON,
}

export enum Genre {
  DRAMA = 'DRAMA',
  ECCHI = 'ECCHI',
  ACTION = 'ACTION',
  COMEDY = 'COMEDY',
  FANTASY = 'FANTASY',
  SHOUNEN = 'SHOUNEN',
  ADVENTURE = 'ADVENTURE',
  MANHWA = 'MANHWA',
  WEBTOON = 'WEBTOON',
  ISEKAI = 'ISEKAI',
  HAREM = 'HAREM',
  SCI_FI = 'SCI_FI',
  SEINEN = 'SEINEN',
  HORROR = 'HORROR',
  MYSTERY = 'MYSTERY',
  ROMANCE = 'ROMANCE',
  SCHOOL_LIFE = 'SCHOOL_LIFE',
  SUPERNATURAL = 'SUPERNATURAL',
  DETECTIVE = 'DETECTIVE',
  MARTIAL = 'MARTIAL',
  SWORDSMANSHIP = 'SWORDSMANSHIP',
}

// Interfaces
export interface Comic {
  id: string;
  name: string;
  aliases?: string[];
  thumbnail: string;
  banner?: string;
  description: string;
  genre: Genre[];
  translatorTeam?: TranslatorTeam;
  translatorTeamId?: string;
  author?: Author;
  authorId?: string;
  color: boolean;
  createdAt: Date;
  updatedAt: Date;
  status: Status;
  views: number;
  follows: number;
  likes: number;
  dislikes: number;
  chapters: Chapter[];
}

export interface TranslatorTeam {
  id: string;
  members: Author[];
  comics: Comic[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Author {
  id: string;
  username: string;
  displayName: string;
  createdAt: Date;
  premium: boolean;
  translatorTeam?: TranslatorTeam[];
  history?: History[];
  comic?: Comic[];
  updatedAt: Date;
}

export interface History {
  id: string;
  comicId: string;
  chapters: Chapter[];
  author?: Author;
  authorId?: string;
}

export interface Chapter {
  id: string;
  comicId: string;
  comic?: Comic;
  number: number;
  title: string;
  description?: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  history?: History;
  historyId?: string;
}