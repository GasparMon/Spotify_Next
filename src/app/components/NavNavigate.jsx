import { GoHome } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function NavNavigate() {
    
  return (
    <div className="w-full h-full bg-[#121212] text-white rounded-[10px] grid grid-rows-2 gap-2 py-[15px] px-[10px]">
        <Link href={"/home"}>
      <div className="w-full h-full flex items-center justify-start border-white px-[10px] cursor-pointer hover:bg-white/10 rounded-[10px] transition-all duration-500 ease-in-out">
        <GoHome className="text-[30px] mr-[20px]" />
        <h2 className="text-[20px] mr-[20px] font-light cursor-pointer ">Home</h2>
      </div>
      </Link>
      <div className="w-full h-full flex items-center justify-start border-white px-[10px] cursor-pointer hover:bg-white/10 rounded-[10px] transition-all duration-500 ease-in-out">
        <AiOutlineSearch className="text-[30px] mr-[20px] cursor-pointer " />
        <h2 className="text-[20px] mr-[20px] font-light cursor-pointer ">Search</h2>
      </div>
    </div>
  );
}
