import React, { useState } from "react";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Stack, TextField } from "@mui/material";

const SearchWrapper = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box
      component="div"
      sx={{
        background: isFocused ? "white" : "transparent",
        transition: "background-color 0.3s ease",
        padding: "5px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <TroubleshootOutlinedIcon
          color="white"
          sx={{ color: isFocused ? "black" : "white" }}
        />
        <TextField
          InputProps={{
            style: {
              color: isFocused ? "black" : "white",
              lineHeight: "30px",
              width: "300px",
              padding: "0px",
              border: "none",
              outline: "none",
            },
            disableUnderline: true,
          }}
          variant="standard"
          placeholder="Search for anything you want"
          type="text"
          autoComplete="off"
          name="name"
          required
          fullWidth
          size="small"
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            fontSize: "16px",
            lineHeight: "19px",
            border: "none",
            outline: "none",
          }}
        />
        <CancelIcon
          sx={{
            color: "black",
            width: "20px",
            visibility: isFocused ? "visible" : "hidden",
          }}
        />
      </Stack>
    </Box>
  );
};

export default SearchWrapper;
