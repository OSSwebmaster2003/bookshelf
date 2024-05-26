import { Typography } from "@mui/material";
import React from "react";

const Heading1 = ({ children, align, size }) => {
  return (
    <Typography
      fontWeight="700"
      fontSize={size}
      lineHeight="45px"
      align={align}
    >
      {children}
    </Typography>
  );
};

export default Heading1;
