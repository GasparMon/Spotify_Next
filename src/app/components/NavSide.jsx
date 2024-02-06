"use client";
import { useSelector } from "react-redux";
import PlaylistCard from "./Playlist_Card";
import { VscLibrary } from "react-icons/vsc";

export default function NavSide() {
  const token = useSelector((state) => state.token.myToken);

  return (
    <div className="bg-[#121212] w-full h-full relative flex flex-col rounded-[10px]">
      <div className=" bg-[#121212] w-full h-[150px] rounded-t-[10px] absolute z-10 shadow-lg shadow-black/40 py-[15px] px-[10px] grid grid-rows-2 gap-2 ">
        <div className=" w-full h-full flex items-center justify-start px-[10px]">
          <VscLibrary className="text-[35px] mr-[20px] text-white" />
          <h2 className="text-[20px] mr-[20px] font-light text-white ">My Library</h2>
        </div>
      </div>
      <div className=" bg-[#121212] w-full h-full  absolute z-0 pt-[150px] overflow-hidden rounded-[10px]">
        <PlaylistCard token={token} />
      </div>
    </div>
  );
}
