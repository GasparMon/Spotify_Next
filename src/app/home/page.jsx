"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "@/redux/features/tokenSlice";
import Home_user from "../components/Home_user";
import User_feautured from "../components/user_featured";

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.myToken);

  useEffect(() => {
    const hash = window.location.hash;

    const accessTokenMatch = hash.match(/access_token=([^&]+)/);
    const accessToken = accessTokenMatch ? accessTokenMatch[1] : null;

    if (accessToken) {
      dispatch(createToken(accessToken));

    }
  }, [dispatch]);

  return (
    <div className="bg-black w-full h-full flex items-center justify-center pb-[15px] pt-[10px] pr-[10px] ">
      <div
        id="home_container"
        className=" w-full h-full bg-gray-400 rounded-[10px]"
      >
        
        <div id="home_lastest" className="bg-blue-400 w-full h-[150px]">
        <User_feautured token={token}/>
        </div>
        <h1>Home</h1>
      </div>
    </div>
  );
}
