import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  const { currentUser } = useSelector((store) => store.user);

  return (
    <Route
      {...restProps}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
