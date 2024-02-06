import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { MdLogout } from "react-icons/md";
export default function User_settings({data, handleSetting}) {


  return (
    <div className="bg-[#121212] w-[180px] h-[100px] absolute top-[77px] rounded-[10px] grid  grid-rows-2 gap-[7px] p-[7px]">
      <a
        href={`${data.external_urls.spotify}`}
        target="_blank"
        className="w-full h-full flex items-center rounded-[5px] pl-[5px] cursor-pointer hover:bg-white/10 justify-between transition-all duration-500 ease-in-out"
        onClick={handleSetting}
      >
        <h1 className="text-white cursor-pointer">MySpotify</h1>
        <MdOpenInNew className="text-white mr-[10px]" />
      </a>
      <Link
        href={"http://localhost:3000/"}
        className="w-full h-full flex items-center rounded-[5px] pl-[5px] cursor-pointer hover:bg-white/10 justify-between transition-all duration-500 ease-in-out "
      >
        <h1 className="text-white cursor-pointer">Logout</h1>
        <MdLogout className="text-white mr-[10px]" />
      </Link>
    </div>
  );
}
