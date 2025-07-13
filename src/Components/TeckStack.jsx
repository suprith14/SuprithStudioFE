// TechStackScroller.jsx
import React, { useEffect, useState } from 'react';
import { techStackList } from '../Utilis/TeckStackList';
import { useSelector } from 'react-redux';

const TechStack = () => {
    const [data, setData]= useState([])
    const userIDFE = useSelector((state)=>state.user.userID)
    const baseURL = import.meta.env.VITE_API_BASE_URL


    const fetchTechStack = async () => {
      try {
        const queryParams = new URLSearchParams({ userID: userIDFE }).toString();
        const response = await fetch(`${baseURL}/techStack?${queryParams}`, { method: "GET" });
        const result = await response.json();
        const values = result.techStacks;
        setData(values);
        console.log("ds",values)
      } catch (error) {
        console.error('Error fetching tech stack:', error);
      }
    };
  
    useEffect(() => {
      fetchTechStack();
    }, [])


  return (
    <div className='my-2 w-full md:w-96'>
      <div className="text-center text-2xl font-bold rounded-t bg-blue-500 font-serif">Tech Stack</div>
      <div className="h-32 overflow-hidden border rounded-b bg-white shadow-lg">
        <div className="animate-verticalScroll flex flex-col gap-2 items-center">
          {/* Repeat stack twice for infinite scroll illusion */}
          {data.map((item) => (
            <div key={item._id} className="text-sm font-medium text-gray-800  bg-blue-300 border rounded min-w-min py-1 px-1 hover:animate-fade-up  hover:bg-blue-700">
              {item.teckName}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
