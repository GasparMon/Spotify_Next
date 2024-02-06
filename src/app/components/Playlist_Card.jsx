"use client"
import React, { useState, useEffect } from "react";
import Playlist_ from "./Playlist_";
import {useSelector } from "react-redux";

export default function PlaylistCard() {
  const token = useSelector((state) => state.token.myToken);
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    // Función para realizar la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
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

    // Llamamos a la función para obtener los datos
    fetchData();
  }, [token]); 
  


  return (
<div className=" w-full h-full absolute z-0 overflow-scroll pb-[50px] rounded-[10px]">
  {myData && myData.items && 
    myData.items.map((element, key) => (
      <Playlist_
      key={key}
      id={element.id}
      name={element.name}
      type={element.type}
      tracks={element.tracks}
      owner={element.owner.display_name}
      img={element.images[2] ? element.images[2] : element.images[0]}
      />
    ))}
</div>

  );
}
