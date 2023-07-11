import React from 'react'

import {Navigate, useNavigate} from 'react-router-dom'

const useUserId = () => {
    const navigate = useNavigate()
    if(localStorage.token){
        const userId = localStorage.token;
        return userId
    }else{
    //    return <Navigate to='/login' replace /> 
    navigate('/login')
    }
    // return userId;
  
}

export default useUserId