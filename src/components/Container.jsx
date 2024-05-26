import { Box } from "@mui/material";
import React from "react";

const Container = ({ children }) => {
  return <Box sx={{ padding: "0 100px", width: "100%" }}>{children}</Box>;
};

export default Container;
