import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const RedirectToLogin = () => {
  const navigate = useNavigate();
  navigate('/login');
  return null;
};

const useUserId = () => {
  if (localStorage.token) {
    const token = localStorage.token;
    const user = localStorage.user;
    return {token,user};
  } else {
    // return <Navigate to="/login" replace />;
    window.location.href = "http://localhost:5173/login";
  }
};

export default useUserId;
