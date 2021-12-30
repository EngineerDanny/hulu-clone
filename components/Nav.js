import categories from "../utils/request";
import Image from "next/image";

function Nav() {
  return (
    <div className=" flex flex-col items-center" >
      <div className="-my-3" />
      <Image src="/hulu.png" className="" alt="" width="120" height="100" />

      <div className="flex  flex-nowrap overflow-x-scroll max-w-sm  ">
        {categories.map(({ title, url }) => {
          return <span className=" flex-1" >{title}</span>;
        })}
      </div>
    </div>
  );
}

export default Nav;
