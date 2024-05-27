import React from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import FlexCenter from "../components/FlexCenter";
import notFoundImage from "../assets/not-found.png";
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <BackgroundContainer>
      <FlexCenter>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <Box component="img" src={notFoundImage} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Button
              variant="contained"
              sx={{ textTransform: "none", width: "150px" }}
              onClick={() => navigate("/")}
            >
              Go Home Page
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: "none", width: "150px" }}
              onClick={handleReload}
            >
              Reload Page
            </Button>
          </Stack>
        </Stack>
      </FlexCenter>
    </BackgroundContainer>
  );
};

export default NotFound;
