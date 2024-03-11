import axios from "axios";

const getUser = async (username: string) => {
  const req = await axios.get(
    `https://shirokodev.site/users/?username=${username}`,
  );
  return req.data;
};

export default async function UserPage() {
  const user = await getUser('sunaookamishirokodev');
  console.log(user)
  return <main></main>
}
