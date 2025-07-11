import React, { useEffect, useState } from "react";
import { HeaderActionList } from "../../Utilis/HeaderActionList";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, adduserId } from "../../store/userSlice";
import logoutimg from "./../../assets/logout.png"


const LinksInHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const username = useSelector((state) => state.user.user)
  const dispatch = useDispatch();


  const logout = () => {

    dispatch(adduser(""));
    dispatch(adduserId(""));
    alert("Loging Out .......")

    return (
      <Navigate to="/" replace />
    )
  }





  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div className={`${isMobile ? "hidden" : "flex"}`}>
        {HeaderActionList.map((link, index) => (
          <Link key={index} to={link.url}>
            <span className=" text-blue-500 mx-2 border  px-2 py-1 text-x font-bold hover:animate-bounce">
              {link.name}
            </span>
          </Link>
        ))}
        <div className="font-bold flex flex-row w-min mr-5" > {username ? username : ""}
          {username ? <img onClick={username ? logout : () => { }} src={logoutimg} className="w-5 h-5" /> : "Login"}
        </div>
      </div>
      {isMobile && (<div className="hover:bg-blue-300 px-5 py-2" onClick={() => { setIsOpen(!isOpen) }}>|||</div>)}
      {isOpen && (
        <div className="absolute top-16 right-4 w-44 bg-white shadow-lg rounded-md z-50">
          {HeaderActionList.map((link, index) => (
            <Link key={index} to={link.url}>
              <span className="block text-blue-500 mx-1  px-2 py-1 text-x font-bold hover:bg-blue-300">
                {link.name}
              </span>
            </Link>
          ))}
          <span className="font-bold" > {username ? username : ""}</span>
          <span className="font-bold cursor-pointer p-1 rounded hover:bg-slate-500" onClick={username ? logout : () => { }}>{username ? <img src={logoutimg} className="w-8 h-8" /> : "Login"}</span>

        </div>
      )}



    </div>
  );
};

export default LinksInHeader;
