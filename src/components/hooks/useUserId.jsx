import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const RedirectToLogin = () => {
  const navigate = useNavigate();
  navigate('/login');
  return null;
};

const useUserId = () => {
  if (localStorage.token) {
    const userId = localStorage.token;
    return userId;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default useUserId;
