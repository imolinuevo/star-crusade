import { Navigate, useLocation } from "react-router";

export default function Component() {
  const location = useLocation();
  return <Navigate to={"/login"} state={{ from: location }} replace />;
}
