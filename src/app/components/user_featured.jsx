import { useEffect, useState } from "react";
import {useSelector } from "react-redux";
export default function User_feautured() {
    const token = useSelector((state) => state.token.myToken);

    const [myData, setMyData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
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

  console.log(myData)

    return(

        <div>

        </div>
    )
}