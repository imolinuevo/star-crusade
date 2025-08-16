import { Link } from "react-router";

export default function Component() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Link to="/dashboard">
        <span className="text-white">Login</span>
      </Link>
    </div>
  );
}
