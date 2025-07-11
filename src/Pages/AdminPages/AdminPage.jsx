import React from "react";
import TechStack from "../../Components/TeckStack";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// const AdminPage = React.lazy(() => import("../../Components/AdminComponents/Admin"));

const FeaturesList = [{ name: "TechStack", Link: "techstack" }, { name: "FeaturesFE", Link: "featuresfe" }, { name: "FeaturesBE", Link: "featuresbe" }, { name: "Users Details", Link: "userdetails" }];

const AdminPage = () => {


  const Adminuseremail = useSelector((state) => state.user.useremail);
  const AdminUser = "suprithcd14@gmail.com";
  // console.log("Admin user email :", !(Adminuseremail == AdminUser))

  // if (!(Adminuseremail == AdminUser)) {
  //   return (
  //     <div className="w-full p-2">
  //       <div className="flex justify-center items-center bg-yellow-300 text-2xl font-serif h-20 ">
  //         Admin Portal
  //       </div>
  //       <div>
  //         Not a Admin User
  //       </div>

  //     </div>

  //   )
  // }


  return (
    <div className="w-full p-2">
      <div className="flex justify-center items-center bg-yellow-300 text-2xl font-serif h-20 ">
        Admin Portal
        <div className="ml-6">Login In User : {Adminuseremail}</div>

      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4">
        {FeaturesList.map((item) => (
          <Link to={item.Link} className="bg-yellow-600 p-2 m-1">{item.name}</Link>
        ))}

      </div>
      <Outlet />
    </div>
  );
};

export default AdminPage;
