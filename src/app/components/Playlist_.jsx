
export default function Playlist_({id, name, type, tracks, owner, img}){



    return(
        <div className="w-full h-[80px] flex my-[5px] hover:bg-white/10 rounded-[10px] transition-all duration-500 ease-in-out cursor-pointer px-[3px]">
        <div className="h-full w-[100px] flex items-center justify-center cursor-pointer  ">
        {img && img.url && 
   <img src={`${img.url}`} className="w-[60px] h-[60px] rounded-[5px] cursor-pointer "></img>
    }
        </div>
        <div className="h-full w-[95%]  flex flex-col justify-center pl-[10px] cursor-pointer ">
            <h3 className="text-[16px] text-white cursor-pointer ">{name}</h3>
            <h4 className="text-[15px] text-white/75 cursor-pointer ">{type} • {owner} </h4>
        </div>


        </div>
    )
}