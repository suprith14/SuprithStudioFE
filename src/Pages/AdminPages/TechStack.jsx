import React, { useEffect, useState } from 'react'
import { techStackList } from '../../Utilis/TeckStackList'
import { useSelector } from 'react-redux';

const TechStack = () => {

  const [data, setData] = useState([]);
  const [newTech, setNewTech] = useState("");
  const userIDFE = useSelector((state) => state.user.userID);
  const [change, setChange] = useState(false)

  // const updateLD = ()=>{
  //   setData([...data,newTech])

  // }

  const fetchTechStack = async () => {
    try {
      const queryParams = new URLSearchParams({ userID: userIDFE }).toString();
      const response = await fetch(`http://localhost:3000/techStack?${queryParams}`, { method: "GET" });
      const result = await response.json();
      const values = result.techStacks;
      setData(values)

      console.log("TechStack  result ", result.techStacks)
      console.log("TechStack  response ", response)
      return result.techStacks
    } catch (error) {
      console.error('Error fetching tech stack:', error);
    }
  };
  useEffect(() => {
    fetchTechStack();
  }, [change])


  const handleonChange = (e) => {
    setNewTech(e.target.value);
  }

  const handleAddTechStack = async (e) => {
    e.preventDefault();
    setChange(!change);
    setNewTech("")
    try {
      const queryParams = {
        teckName: newTech,
        userID: userIDFE,
      };
      const response = await fetch("http://localhost:3000/techStack", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(queryParams) });
      const data = await response.json()

      if (data.status == 200) {
        console.log("New Tech Stack Added:", newTech);
        alert(`New Tech Stack Added: ${newTech}`);

      } else {
        alert(JSON.stringify(data.error));
      }
    } catch (error) {
      alert(JSON.stringify(error));
      // Logic to add new tech stack to the list
      // This could involve updating state or making an API call
    }
  }

  const deleteTechStack = async (ID, e) => {
    e.preventDefault();
    try {
      const queryParams = new URLSearchParams({ _id: ID }).toString();
      const response = await fetch(`http://localhost:3000/techStack?${queryParams}`, { method: "DELETE" });
      const result = await response.json();
      const values = result.techStacks;
      setData(values);
      fetchTechStack();
      setChange(!change);

      console.log("ds", values)
    } catch (error) {
      console.error('Error fetching tech stack:', error);
    }
  };


  if (data?.length == 0) {
    return <div><div>No stack available</div>
      <div>
        <input type="text" onChange={handleonChange} placeholder="Add new tech stack" className="p-2 m-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <button onClick={handleAddTechStack} className="bg-yellow-600 text-white p-2 m-1 rounded-md hover:bg-yellow-700 transition-all duration-300">
          Add Tech Stack
        </button>
      </div>
    </div>
  }



  return (
    <div>
      <div className=' flex flex-wrap'>

        {data?.map((item) => (
          <div key={item._id} className=" w-48 flex h-min justify-between bg-yellow-200 p-2 m-1 rounded-md shadow-md hover:bg-yellow-300 transition-all duration-300">
            <h2 className="text-lg font-semibold">{item.teckName}</h2>
            <span className='bg-red-500 p-1 h-min rounded hover:bg-red-900' onClick={(e) => { deleteTechStack(item._id, e) }} >Delete</span>
          </div>
        ))}
      </div>
      <div>
        <input type="text" onChange={handleonChange} value={newTech} placeholder="Add new tech stack" className="p-2 m-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        <button onClick={handleAddTechStack} className="bg-yellow-600 text-white p-2 m-1 rounded-md hover:bg-yellow-700 transition-all duration-300">
          Add Tech Stack
        </button>
      </div>


    </div>
  )
}

export default TechStack