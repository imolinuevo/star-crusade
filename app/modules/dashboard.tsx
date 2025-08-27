import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { authSlice, selectLoginStatus } from "~/redux/slices/auth-slice";

export default function Component() {
  const storedLoggedIn = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authSlice.actions.logOut());
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <button className="text-white italic" onClick={() => logOut()}>
        Logout
      </button>
      <p className="text-white italic">
        Stored login value: {String(storedLoggedIn)}
      </p>
    </div>
  );
}
