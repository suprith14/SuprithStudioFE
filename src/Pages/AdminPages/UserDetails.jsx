import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const [data, setData] = useState([]);
    const Adminuseremail = useSelector((state) => state.user.useremail);
    const AdminUser = "suprithcd14@gmail.com";
    console.log("Admin user email :", !(Adminuseremail == AdminUser))
        const baseURL = import.meta.env.VITE_API_BASE_URL


    if (!(Adminuseremail == AdminUser)) {
        return (
            <div className="w-full p-2 text-center">

                <div>
                    Not a Admin User
                </div>

            </div>

        )
    }




    const fetchAllUser = async () => {
        const response = await fetch(`${baseURL}/getalluser`, { method: "GET" });
        const data = await response.json();
        console.log("getalluser data :", data.data)
        setData(data.data)
    }

    useEffect(() => {
        fetchAllUser()

    }, [])

    return (
        <div className=' flex flex-col flex-wrap mx-16'>
            <div className='flex bg-blue-400 w-40 p-3 rounded text-center flex-wrap'>Total User : {data.length}</div>
            {
                data.map((item) => (
                    <div className=' bg-yellow-200 m-2 p-2 w-64 gap-2  ' key={item._id}>
                        <div className='mr-2'>Name : {item.name}</div>
                        <div>Email : {item.email}</div>
                        <span></span>


                    </div>
                ))
            }




        </div>
    )
}

export default UserDetails
