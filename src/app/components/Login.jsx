"use client";
import React from "react";

export default function LoginButton() {
  const handleLogin = () => {

    const clientId = "e0dc871aeac345c0962cb051ed2800e3";
    const clientURL = "http://localhost:3000/home";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${clientURL}&scope=${scope.join(
      " "
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <>
      <button class="overflow-hidden relative w-[350px] p-2 h-[100px] rounded-[75px] bg-black text-white text-xl font-bold cursor-pointer z-10 group border-white border-2 m-[50px]" onClick={handleLogin}>
        Connect to Spotify
        <span class="absolute w-[350px] h-[200px] -top-[50px] -left-[1px] bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
        <span class="absolute w-[350px] h-[200px] -top-[50px] -left-[1px] bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
        <span class="absolute w-[350px] h-[200px] -top-[50px] -left-[1px] bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-[37px] left-[82px] z-10 flex items-center justify-center"> Connect to Spotify </span>
      </button>
    </>
  );
}
