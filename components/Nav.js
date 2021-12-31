import { CATEGORIES } from "../utils/constants";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
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
              <span className="whitespace-nowrap text-sm  hover:text-white transition   cursor-pointer active:text-pink-400">
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
