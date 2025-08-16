import { Link } from "react-router";

export default function Component() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Link to="/">
        <span className="text-white italic">Logout</span>
      </Link>
    </div>
  );
}
