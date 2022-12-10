import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  let auth;
  if (isAuthenticated === false) {
    auth = false;
  }
  if (isAuthenticated === true && user.role !== "admin") {
    auth = false;
  } else {
    auth = true;
  }
  return (
    <Fragment>
      {loading === false && (auth ? <Outlet /> : <Navigate to="/login" />)}
    </Fragment>
  );
};
export default ProtectedRoute;
