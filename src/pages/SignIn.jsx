import React from "react";
import { Link } from "react-router-dom";
import { Card, Stack, Box, Button, Typography } from "@mui/material";
import BackgroundContainer from "../components/BackgroundContainer";
import Heading1 from "../components/Heading1";
import FlexCenter from "../components/FlexCenter";
import Label from "../components/InputLabel";
import BasicInput from "../components/BasicInput";
import Span from "../components/Span";

const SignIn = () => {
  return (
    <BackgroundContainer>
      <FlexCenter>
        <Card
          sx={{ minWidth: "450px", padding: "48px 28px", borderRadius: "12px" }}
        >
          <Heading1 align="center" size="36px">
            Sign in
          </Heading1>
          <Stack mt={4} mb={4} direction="column" gap={2}>
            <Box width="100%">
              <Stack gap={1}>
                <Label>Username</Label>
                <BasicInput placeholder="Enter your username" />
              </Stack>
            </Box>
            <Box width="100%">
              <Stack gap={1}>
                <Label>Password</Label>
                <BasicInput placeholder="Enter your password" />
              </Stack>
            </Box>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            sx={{ fontSize: "16px", padding: "10px", textTransform: "none" }}
          >
            Login
          </Button>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize="14px">Not registered yet?</Typography>
            <Link to="/signup">
              <Span size="14px">Go to sign up</Span>
            </Link>
          </Stack>
        </Card>
      </FlexCenter>
    </BackgroundContainer>
  );
};

export default SignIn;
