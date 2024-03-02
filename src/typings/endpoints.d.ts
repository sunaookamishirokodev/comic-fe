interface Comic {
  id: String;
  name: String;
  aliases: String | String[];
  thumbnail: Url;
  banner: Url;
  description: String;
  category: String[];
  translatorTeam: String | String[];
  author: String | String[];
  createAt: Date;
  updateAt: Date;
  postBy: User;
  chapters: Chapter[];
}

interface User {
  id: String;
  username: String;
  createAt: String;
  premium: Boolean;
}

interface Chapter {
  id: String;
  title: String;
  description?: String;
  images: Url[];
  createAt: Date;
  updateAt: Date;
}

type Url = String;
