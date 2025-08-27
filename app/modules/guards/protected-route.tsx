import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import { selectLoginStatus } from "~/redux/slices/auth-slice";

export default function Component() {
  const storedLoggedIn = useSelector(selectLoginStatus);
  const location = useLocation();

  if (storedLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
}
