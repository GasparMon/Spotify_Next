"use client"

import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import User_settings from "./user_settings";
import {useSelector } from "react-redux";


export default function Home_user(){

    const token = useSelector((state) => state.token.myToken);

    const [myData, setMyData] = useState(null);
    const [setting, setSettings] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/me ", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error("Error fetching data from Spotify API:", error);
      }
    };

    fetchData();
  }, [token]); 

  const handleSetting = () => {

    if(setting){

        setSettings(false)
    } else {

        setSettings(true)
    }
  }

    return(
 
        <div className="w-full h-full flex items-center justify-end pr-[25px]">
        {myData && Object.keys(myData).length > 0 && (
          <>
            <h1 className="text-[16px] text-white bg-black/60 px-[15px] py-[3px] border-[1px] border-transparent rounded-[50px]">
              {myData.display_name}
            </h1>
            <button className="ml-[15px]" onClick={handleSetting}>
              <FaUserCircle className="text-[40px] text-[#3fe68b]" />
            </button>
          </>
        )}
        {!setting? null : <User_settings data = {myData} handleSetting = {handleSetting} /> }
      </div>
      
    )
}