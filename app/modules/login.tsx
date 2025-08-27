import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { authSlice, selectLoginStatus } from "~/redux/slices/auth-slice";

export default function Component() {
  const storedLoggedIn = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = () => {
    dispatch(authSlice.actions.logIn());
    navigate("/app/dashboard");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <button className="text-white" onClick={() => logIn()}>
        Login
      </button>
      <p className="text-white italic">
        Stored login value: {String(storedLoggedIn)}
      </p>
    </div>
  );
}
