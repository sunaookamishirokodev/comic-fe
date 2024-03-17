import ExtraCarousel from "@/components/extra-carousel";
import MainCarousel from "@/app/main-carousel";
import axios from "axios";

const getRcmComics = async (quantity: number) => {
  const req = await axios.get(
    `https://api.shirokodev.site/comics/recommend?quantity=${quantity}`,
  );

  return req.data;
};

export default async function Home() {
  const rcmComics = await getRcmComics(3);
  return (
    <>
      <MainCarousel comics={rcmComics} />
      <ExtraCarousel data={rcmComics} title="Cập nhật gần đây" />
      <ExtraCarousel data={rcmComics} title="Nổi bật nhất" />
    </>
  );
}
