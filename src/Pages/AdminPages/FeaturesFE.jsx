import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const FeaturesFE = () => {

  const [data, setData] = useState([]);
  const [newdescription, setDescription] = useState("");
  const userIDFE = useSelector((state) => state.user.userID);
  const [change, setChange] = useState(false)
  const baseURL = import.meta.env.VITE_API_BASE_URL




  const handleonChange = (e) => {
    setDescription(e.target.value);
  }








  const fetchTechStack = async () => {
    try {
      const queryParams = new URLSearchParams({ userID: userIDFE }).toString();
      const response = await fetch(`${baseURL}/featurefelist?${queryParams}`, { method: "GET" });
      const result = await response.json();
      const values = result.result;
      setData(values)
      console.log(values)
    } catch (error) {
      console.error('Error fetching tech stack:', error);
    }
  };
  useEffect(() => {
    fetchTechStack();
  }, [change])

  const handleAddNewDescription = async (e) => {
    e.preventDefault();
    console.log("change :", change)

    try {
      const queryParams = {
        userID: userIDFE,
        description: newdescription
      };
      const response = await fetch(`${baseURL}/featurefelist`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(queryParams) });
      const data = await response.json()
      fetchTechStack();

      if (data.status == 200) {
        console.log("New Tech Stack Added:", newdescription);
        setChange(!change);
        setDescription("")

        // alert(`New Tech Stack Added: ${newdescription}`);

      } else {
        alert(JSON.stringify(data.error));
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  const deleteFEdescription = async (ID, e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams({ _id: ID }).toString();
      const response = await fetch(`${baseURL}/featurefelist?${queryParams}`, { method: "DELETE" });
      const result = await response.json();
      const values = result.result;

      console.log("fe del ", result)
      fetchTechStack();
      setChange(!change);

      console.log("ds", values)
    } catch (error) {
      console.error('Error fetching tech stack:', error);
    }
  };





  return (
    <div>
      <div className=' flex flex-wrap justify-center'>

        {data?.map((item) => (
          <div key={item._id} className=" w-[80%] flex h-min justify-between bg-yellow-200 p-2 m-1 rounded-md shadow-md hover:bg-yellow-300 transition-all duration-300">
            <h2 className="text-lg ">{item.description}</h2>
            <span className='bg-red-500 p-1 h-min rounded hover:bg-red-900' onClick={(e) => { deleteFEdescription(item._id, e) }} >Delete</span>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <input type="text" onChange={handleonChange} value={newdescription} placeholder="Add new tech stack" className="p-2 m-1 w-[70%] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <button onClick={handleAddNewDescription} className="bg-yellow-600 text-white p-2 m-1 rounded-md hover:bg-yellow-700 transition-all duration-300">
          Add Tech Stack
        </button>
      </div>


    </div>)
}

export default FeaturesFE