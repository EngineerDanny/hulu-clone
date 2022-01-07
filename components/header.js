import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const iconList = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Home",
  },
  {
    id: 2,
    icon: LightningBoltIcon,
    title: "Trending",
  },
  {
    id: 3,
    icon: BadgeCheckIcon,
    title: "Settings",
  },
  {
    id: 4,
    icon: CollectionIcon,
    title: "Collections",
  },
  {
    id: 5,
    icon: SearchIcon,
    title: "Search",
  },
  {
    id: 6,
    icon: UserIcon,
    title: "Account",
  },
];

export const IconComponent = ({ Icon, title }) => {
  return (
    <div className="group flex flex-col  items-center tracking-wide cursor-pointer">
      <Icon className="h-7 w-15  mb-1 transition group-hover:scale-150 group-hover:text-white" />
      <p className=" -mx-4 opacity-0 group-hover:opacity-100 group-hover:text-white text-sm">
        {title}
      </p>
    </div>
  );
};

function Header() {
  return (
    <div className=" flex flex-col items-center  sm:flex-row sm:justify-between  w-full  ">
      <div className="flex  items-center space-x-2 sm:space-x-6 lg:space-x-10  text-gray-400 sm:mt-4">
        {iconList.map(({ icon, title }, id) => {
          return <IconComponent Icon={icon} title={title} key={id} />;
        })}
      </div>
      <div className="-my-3 sm:-mt-14" />
      <Image src="/hulu.png" className="" alt="" width="120" height="100" />
    </div>
  );
}

export default Header;
