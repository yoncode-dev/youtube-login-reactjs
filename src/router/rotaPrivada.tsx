import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface RouteProps {
  component: React.FC<RouteComponentProps>;
  path: string;
}

const Rotaprivada: React.FC<RouteProps> = ({
  component: Component, path, ...rest
}) => {

  const isAuth = !!localStorage.getItem('@yoncode:user');

  return (
    <Route {...rest} render={props=> (
      isAuth ? 
        <Component {...props} />
        : <Redirect to="/logar" />
    )} />
  )
}

export default Rotaprivada;