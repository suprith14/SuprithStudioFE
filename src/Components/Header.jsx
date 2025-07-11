import React from "react";
import SearchBar from "./FuncitionalityCompoents/SearchBar";
import LinksInHeader from "./FuncitionalityCompoents/LinksInHeader";
import useIsMobile from "../hooks/useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import logoutimg from "./../assets/logout.png"
import logoutfn from "./AuthenticationComponents/logout";
import { adduser, adduserId } from "../store/userSlice";
import { Navigate } from "react-router-dom";

const Header = () => {

  const isMobile = useIsMobile();
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


  return (
    <div className="w-full flex justify-between gap-4 bg-blue-100 p-4 items-center">
      {isMobile ? (<div className="text-left text-3xl font-bold animate-headerClrChange">SS</div>) : (<div className="sm:text-xl lg:text-4xl text-left font-bold animate-headerClrChange font-serif">Suprith Studio</div>)}
      <SearchBar />
      <LinksInHeader />

    </div>
  );
};

export default Header;
