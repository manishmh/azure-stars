
import { BsSearch } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-screen-2xl mx-auto px-4 py-8 items-center w-full">
      <div className="uppercase text-lg 2xl:text-xl font-medium">MLSA</div>
      <div className="flex items-center">
        <div className="w-20 h-[2px] bg-black"></div>
        <div className="arrow-right"></div>
      </div>
      <div className="text-xl 2xl:text-2xl flex gap-4 items-center">
        <BsSearch className="text-lg 2xl:text-2xl"/>
        <GrMenu />
      </div>
    </div>
  );
};

export default Navbar;
