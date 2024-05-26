import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box, Stack } from "@mui/material";
import SearchWrapper from "./SearchWrapper";
import Container from "./Container";
import logo from "../assets/logo.png";
import userImage from "../assets/user-image.png";

const Navbar = () => {
  return (
    <Container>
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
          gap={8}
        >
          <Box component="img" src={logo} alt="logo" />
          <SearchWrapper />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
        >
          <NotificationsNoneOutlinedIcon color="black" />
          <Box sx={{ width: "40px", height: "40px", borderRadius: "50%" }}>
            <Box component="img" src={userImage} width="100%" height="100%" />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
