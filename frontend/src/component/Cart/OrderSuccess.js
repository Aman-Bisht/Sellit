import { Typography } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your order has been placed successfully</Typography>
      <Link to="/orders">View Order</Link>
    </div>
  );
};

export default OrderSuccess;
