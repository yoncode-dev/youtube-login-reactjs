import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/auth';

const Dashboard: React.FC = () => {
  let history = useHistory();
  const { user, handleLogout } = useAuth();

  const handleLoggof = useCallback(() => {
    handleLogout();
    history.push('/logar');
  },[history, handleLogout]);

  // useEffect(()=> {
  //   var userLocal = localStorage.getItem('@yoncode:user') as any;
  //   setUser(JSON.parse(userLocal));
  // },[])

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Olá {user.username}</h3>
      <button onClick={handleLoggof}>Deslogar</button>
    </>
  )
}

export default Dashboard;