import axios from "axios";

const getUser = async (username: string) => {
  const req = await axios.get(
    `https://api.shirokodev.site/users/?username=${username}`,
  );
  return req.data;
};

export default async function UserPage({
  params,
}: {
  params: { slug: string };
}) {
  const user = await getUser(params.slug);
  return <main>{user === 404 && "User not found"}</main>;
}
