import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { authSlice, selectLoginStatus } from "~/redux/slices/auth-slice";

export default function Component() {
  const storedLoggedIn = useSelector(selectLoginStatus);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Link to="/dashboard">
        <span className="text-white">Login</span>
      </Link>
      <p className="text-white italic">
        Stored login value: {String(storedLoggedIn)}
      </p>
      <button
        className="text-gray-500 bold"
        onClick={() => dispatch(authSlice.actions.logIn())}
      >
        Log In to Store
      </button>
    </div>
  );
}
