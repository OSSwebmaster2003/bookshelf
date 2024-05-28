import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BackgroundContainer from "../components/BackgroundContainer";
import FlexCenter from "../components/FlexCenter";
import Heading1 from "../components/Heading1";
import Label from "../components/InputLabel";
import BasicInput from "../components/BasicInput";
import Span from "../components/Span";

import { auth } from "../api/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const { authLoading, authRes } = useSelector((state) => state.auth);

  console.log(authRes);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignUp = (e) => {
    e.preventDefault();

    const data = {
      name: username,
      email,
      key: `${username}_${email}`,
      secret: password,
    };

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    dispatch(
      auth({
        data,
      })
    );

    console.log(data);
  };

  return (
    <BackgroundContainer>
      <FlexCenter>
        <Card
          sx={{ minWidth: "450px", padding: "48px 28px", borderRadius: "12px" }}
        >
          <Box component="form" sx={{ width: "100%" }} onSubmit={handleSignUp}>
            <Heading1 align="center" size="36px">
              Sign up
            </Heading1>
            <Stack mt={4} mb={4} direction="column" gap={2}>
              <Box width="100%">
                <Stack gap={1}>
                  <Label>Username</Label>
                  <BasicInput
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                    type="text"
                  />
                </Stack>
              </Box>
              <Box width="100%">
                <Stack gap={1}>
                  <Label>Email</Label>
                  <BasicInput
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                  />
                </Stack>
              </Box>
              <Box width="100%">
                <Stack gap={1}>
                  <Label>Password</Label>
                  <BasicInput
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                  />
                </Stack>
              </Box>
              <Box width="100%">
                <Stack gap={1}>
                  <Label>Confirm password</Label>
                  <BasicInput
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    type="password"
                  />
                </Stack>
              </Box>
            </Stack>
            {error && <Typography color="danger">{error}</Typography>}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ fontSize: "16px", padding: "10px", textTransform: "none" }}
              disabled={authLoading}
            >
              {authLoading ? <CircularProgress size={24} /> : "Register"}
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
          </Box>
        </Card>
      </FlexCenter>
    </BackgroundContainer>
  );
};

export default SignUp;
