import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


const Protected = ({element}) => {
    console.log("protected ...")
    const useriD = useSelector((state)=>state.user.userID);
    if(!useriD){
        return <Navigate to="/" replace />
    }
    return element
}
export default Protected

