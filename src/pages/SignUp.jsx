import React from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import FlexCenter from "../components/FlexCenter";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Heading1 from "../components/Heading1";
import Label from "../components/InputLabel";
import BasicInput from "../components/BasicInput";
import { Link } from "react-router-dom";
import Span from "../components/Span";

const SignUp = () => {
  return (
    <BackgroundContainer>
      <FlexCenter>
        <Card
          sx={{ minWidth: "450px", padding: "48px 28px", borderRadius: "12px" }}
        >
          <Heading1 align="center" size="36px">
            Sign up
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
            <Box width="100%">
              <Stack gap={1}>
                <Label>Confirm password</Label>
                <BasicInput placeholder="Confirm your password" />
              </Stack>
            </Box>
          </Stack>
          <Button
            variant="contained"
            fullWidth
            sx={{ fontSize: "16px", padding: "10px", textTransform: "none" }}
          >
            Register
          </Button>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize="14px">Already signed up?</Typography>
            <Link to="/signin">
              <Span size="14px">Go to sign in</Span>
            </Link>
          </Stack>
        </Card>
      </FlexCenter>
    </BackgroundContainer>
  );
};

export default SignUp;
