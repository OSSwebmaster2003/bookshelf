import React from "react";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import { Stack, TextField } from "@mui/material";

const SearchWrapper = () => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <TroubleshootOutlinedIcon color="white" />
      <TextField
        InputProps={{
          style: {
            color: "white",
            lineHeight: "30px",
            width: "300px",
            padding: "0",
          },
        }}
        placeholder="Search for anything you want"
        type="text"
        autoComplete="off"
        name="name"
        required
        fullWidth
        size="small"
        sx={{
          fontSize: "16px",
          lineHeight: "19px",
        }}
      />
    </Stack>
  );
};

export default SearchWrapper;
