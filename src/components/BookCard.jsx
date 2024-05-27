import React from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const BookCard = ({
  title,
  cover,
  pages,
  publishedAt,
  Isbn,
  publication,
  status,
}) => {
  const color =
    status === "New" ? "danger" : status === "Reading" ? "yellow" : "success";

  return (
    <Card
      sx={{
        color: "white",
        padding: "32px",
        borderRadius: "12px",
        ":hover .hover-box": {
          display: "flex",
        },
      }}
    >
      <Typography fontSize="16px" fontWeight={600} lineHeight="20px">
        {title}
      </Typography>

      <Box mt={1}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography>Cover:</Typography>
          <Box
            component="a"
            href={cover}
            target="_blank"
            sx={{ color: "blue !important" }}
          >
            {cover}
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography>Pages:</Typography>
          <Typography>{pages}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography>Published:</Typography>
          <Typography>{publishedAt}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography>Isbn:</Typography>
          <Typography>{Isbn}</Typography>
        </Stack>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        mt={4}
      >
        <Typography fontSize="14px" lineHeight="15px" fontWeight={500}>
          {publication}/{publishedAt}
        </Typography>
        <Button
          variant="contained"
          color={color}
          sx={{
            textTransform: "none",
            padding: "2px 12px !important",
            minWidth: "inherit",
            borderRadius: "10px",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 700,
            color: "white !important",
          }}
        >
          {status}
        </Button>
      </Stack>

      <Box
        className="hover-box"
        sx={{
          position: "absolute",
          display: "none",
          flexDirection: "column",
          gap: "5px",
          top: "45px",
          right: "-18px",
          transition: "0.3s linear all",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "6px 6px 6px 0",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 !important",
            minWidth: "inherit",
          }}
        >
          <DeleteIcon color="white" sx={{ width: "20px" }} />
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "6px 6px 6px 0",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 !important",
            minWidth: "inherit",
          }}
        >
          <BorderColorIcon color="white" sx={{ width: "20px" }} />
        </Button>
      </Box>
    </Card>
  );
};

export default BookCard;
