import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Span = ({ children, size }) => {
  const theme = useTheme();
  return (
    <Typography
      fontWeight="700"
      fontSize={size}
      lineHeight="45px"
      sx={{ color: theme.palette.primary.main }}
    >
      {children}
    </Typography>
  );
};

export default Span;
