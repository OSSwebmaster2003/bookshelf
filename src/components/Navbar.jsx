import React from "react";
import logo from "../assets/logo.png";
import { Box, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      gap={4}
      padding="20px 0"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={4}
      >
        <Box component="img" src={logo} alt="logo" />
      </Stack>
    </Stack>
  );
};

export default Navbar;
