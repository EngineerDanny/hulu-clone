import { CATEGORIES } from "../utils/constants";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center">
      <div className="-my-3" />
      <Image src="/hulu.png" className="" alt="" width="120" height="100" />
      <div className="relative ">
        <div className="  flex flex-nowrap overflow-x-scroll w-screen  scroll-smooth no-scrollbar">
          {CATEGORIES.map(({ title, genre }) => {
            return (
              <button
                className="mr-6 first:ml-5 "
                onClick={() => {
                  router.push(`?genre=${genre}`);
                }}
              >
                <span className="whitespace-nowrap transition hover:text-white cursor-pointer active:text-pink-400">
                  {title}
                </span>
              </button>
            );
          })}
        </div>
        <div className=" absolute top-0 right-0 h-10 w-10 bg-gradient-to-l from-gray-800" />
      </div>
    </div>
  );
};

export default Nav;
