import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

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
    <div className="group flex flex-col items-center tracking-wide cursor-pointer">
      <Icon className="h-6 w-6 mb-1 transition group-hover:scale-150 group-hover:text-white" />
      <p className=" -mx-4 opacity-0 group-hover:opacity-100 group-hover:text-white text-sm">
        {title}
      </p>
    </div>
  );
};

function Header() {
  return (
    <div className="flex items-center space-x-2  text-gray-300">
      {iconList.map(({ icon, title }, id) => {
        return <IconComponent Icon={icon} title={title} key={id} />;
      })}
    </div>
  );
}

export default Header;
