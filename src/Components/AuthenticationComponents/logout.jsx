import React from 'react'
import { useDispatch } from 'react-redux'
import { adduser, adduserId } from '../../store/userSlice';
import { Navigate } from 'react-router-dom';

const logout = () => {
    const dispatch = useDispatch();
    dispatch(adduser(""));
    dispatch(adduserId(""));
    
  return (
         <Navigate to="/" replace />
  )
}

export default logout
