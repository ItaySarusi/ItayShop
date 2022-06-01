import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminProtectedRoute = ({ component: Component, ...restProps }) => {
  const { currentUser } = useSelector((store) => store.user);

  if (currentUser != null) {
    return (
      <Route
        {...restProps}
        render={(props) =>
          currentUser.type === 'admin' ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/', state: { from: props.location.pathname } }}
            />
          )
        }
      />
    );
  }
  return (
    <Route
      {...restProps}
      render={(props) => (
        <Redirect
          to={{ pathname: '/', state: { from: props.location.pathname } }}
        />
      )}
    />
  );
};

export default AdminProtectedRoute;
