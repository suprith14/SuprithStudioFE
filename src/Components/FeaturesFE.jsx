import React, { useEffect, useState } from 'react';
import { FeaturesListFE } from '../Utilis/FeaturesList';
import { useSelector } from 'react-redux';


const Features = () => {

  const [data, setData] = useState([{}])
  const [defdata, defsetData] = useState([
    "Dynamic List Rendering",
    "Add/Remove Items from List",
    "Search/Filter Items",
    "Sort Items",
    "Pagination",
    "Multi-select Items with Checkboxes",
    "Drag-and-Drop Sorting",
    "Editable List Items",
    "Toggle Item States (e.g. active/inactive)",
    "Tabs or Steps Navigation",
    "Carousel/Slider from Array",
    "Accordion Panels",
    "Table with Dynamic Rows",
    "Charts & Graphs from Array Data",
    "Group Items by Category or Status",
    "Real-time List Updates (e.g. sockets)",
    "Tag/Chip Input System",
    "Nested Lists (Tree-like structure)",
    "Conditional Formatting Based on Array",
    "Bulk Actions on Selected Items"]);
  const userIDFE = useSelector((state) => state.user.userID)
  const baseURL = import.meta.env.VITE_API_BASE_URL


  const fetchTechStack = async () => {
    try {
      const queryParams = new URLSearchParams({ userID: userIDFE }).toString();
      const response = await fetch(`${baseURL}/featurefelist?${queryParams}`, { method: "GET" });
      const result = await response.json();
      const values = result.result;
      setData(values);
      console.log("ds1111", result.result)
    } catch (error) {
      console.error('Error fetching tech stack:', error);
    }
  };

  useEffect(() => {
    fetchTechStack();
  }, [])

  return (
    <div className='my-2 w-full md:w-96'>
      <div className="text-center flex text-2xl bg-blue-500 font-bold rounded-t justify-around font-serif">Features FE <div className='text-[0.75rem] rounded animate-headerClrChange'>New</div></div>
      <div className="h-40 overflow-hidden border rounded-b bg-white shadow-lg">
        {userIDFE && (<div className="animate-verticalScroll flex flex-col px-2 gap-2 items-center">
          {/* Repeat stack twice for infinite scroll illusion */}
          {data?.map((item) => (
            <div key={item._id} className="text-sm font-medium text-gray-800  bg-blue-300 border rounded min-w-min py-1 px-1 hover:animate-fade-up  hover:bg-blue-700">
              {item.description}
            </div>

          ))}
        </div>)}
        {!userIDFE && (<div className="animate-verticalScroll flex flex-col px-2 gap-2 items-center">
          {/* Repeat stack twice for infinite scroll illusion */}
          {defdata?.map((item) => (
            <div key={item} className="text-sm font-medium text-gray-800  bg-blue-300 border rounded min-w-min py-1 px-1 hover:animate-fade-up  hover:bg-blue-700">
              {item}
            </div>

          ))}
        </div>)}

      </div>
    </div>
  );
};

export default Features;
