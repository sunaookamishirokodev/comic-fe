import { redirect } from "next/navigation";

const isLogin = true;

export default function LoginPage() {
  if (!isLogin) {
    redirect("/register");
  }
  return <></>;
}
