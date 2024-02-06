
import Home_user from "../components/Home_user";
import NavNavigate from "../components/NavNavigate";
import NavSide from "../components/NavSide";
import "../globals.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export default function HomeLayout({ children }) {


  return (
    <div className="w-screen h-screen flex flex-row min-h-[600px] min-w-[1000px] ">
      <div
        id="sidebar"
        className="bg-black h-screen w-[23%] min-w-[300px] min-h-[600px] pl-[10px] py-[5px] flex flex-col items-center justify-evenly"
      >
        <div id="menu_bar" className="bg-black w-full h-[150px] rounded-[10px] my-[10px]">
          <NavNavigate />
        </div>
        <div id="playlist_menu" className="bg-black w-full h-full rounded-[10px] mb-[15px]">
          <NavSide/>
        </div>
      </div>
      <div className="h-full w-[87%] px-[10px] py-[5px] flex flex-col bg-black relative">
      <div  className="w-[500px] end-9 top-[30px] h-[70px] absolute">
          <Home_user/>
        </div>
      {children}

      </div>
    </div>
  );
}
