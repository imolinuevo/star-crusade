import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { authSlice, selectLoginStatus } from "~/redux/slices/auth-slice";

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}

const getRandomPokemon = async (): Promise<Pokemon | undefined> => {
  const randomId = Math.floor(Math.random() * 150);
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return undefined;
    }
  }
};

export default function Component() {
  const storedLoggedIn = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authSlice.actions.logOut());
    navigate("/");
  };

  const [displayPokemon, setDisplayPokemon] = useState<Pokemon | undefined>(
    undefined,
  );
  const loadRandomPokemon = () => {
    getRandomPokemon().then((pokemon) => {
      setDisplayPokemon(pokemon);
    });
  };

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <button className="text-white italic" onClick={() => logOut()}>
        Logout
      </button>
      <p className="text-white italic">
        Stored login value: {String(storedLoggedIn)}
      </p>
      {displayPokemon !== undefined ? (
        <>
          <img
            src={displayPokemon.sprites.front_default}
            alt="Target Pokemon"
            height="96"
            width="96"
          />
          <button className="text-white" onClick={() => loadRandomPokemon()}>
            Reload
          </button>
        </>
      ) : (
        <span className="text-white">Loading...</span>
      )}
    </div>
  );
}
