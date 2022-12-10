import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  let auth = { token: isAuthenticated };
  return (
    <Fragment>
      {loading === false &&
        (auth.token ? <Outlet /> : <Navigate to="/login" />)}
    </Fragment>
  );
};
export default ProtectedRoute;
