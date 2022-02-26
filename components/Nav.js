import { CATEGORIES } from "../utils/constants";
import { useRouter } from "next/router";

const Nav = ({ currentGenre }) => {
  const router = useRouter();
  return (
    <div className="relative ">
      <div className="  flex flex-nowrap overflow-x-scroll w-screen  scroll-smooth no-scrollbar">
        {CATEGORIES.map(({ title, genre }) => {
          return (
            <button
              key={genre}
              className="mr-6 sm:mr-9 lg:mr-12 first:ml-5 hover:scale-125 transition"
              onClick={() => {
                router.push(`?genre=${genre}`);
              }}
            >
              <span
                className={`whitespace-nowrap  hover:text-white transition cursor-pointer active:text-pink-400 leading-8 ${
                  genre === currentGenre
                    ? " text-white font-semibold"
                    : "text-gray-400  "
                }`}
              >
                {title}
              </span>
            </button>
          );
        })}
      </div>
      <div className=" absolute top-0 right-0 h-10 w-16 bg-gradient-to-l from-gray-800" />
    </div>
  );
};

export default Nav;
