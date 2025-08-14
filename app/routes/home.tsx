import { Login } from "~/modules/login/login";

export function meta() {
  return [{ title: "Star Crusade" }];
}

export default function Home() {
  return <Login />;
}
