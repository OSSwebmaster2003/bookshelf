import React, { useState } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Span from "../components/Span";
import BookCard from "../components/BookCard";

const Home = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    background: "white",
    borderRadius: "12px",
    p: "24px 28px",
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <BackgroundContainer>
      <Navbar />
      <Container>
        <Stack
          mt={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" gap={1}>
            {/* <Heading1 size="36px">You've got</Heading1> */}
            <Typography
              fontSize="36px"
              fontWeight={700}
              lineHeight="45px"
              sx={{ color: "white !important" }}
            >
              You've got
            </Typography>
            <Span size="36px">7 book</Span>
          </Stack>
          {/* create modal */}
          <Button variant="contained" onClick={handleOpenModal}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <AddIcon sx={{ width: "20px" }} />
              <Typography
                fontSize="16px"
                lineHeight="20px"
                fontWeight={500}
                color="white"
                textTransform="none"
              >
                Create a book
              </Typography>
            </Stack>
          </Button>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={4}
              >
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  lineHeight="25px"
                  color="black"
                >
                  Create a book
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <CancelOutlinedIcon color="black" />
                </IconButton>
              </Stack>
              <Box mt={2}>
                <Typography fontSize="14px" fontWeight={500} lineHeight="17px">
                  ISBN
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-start"
                  gap={2}
                  mt={1}
                  sx={{
                    width: "100%",
                    borderRadius: "6px",
                    border: "1px solid #EBEBEB",
                    padding: "14px 16px",
                    height: "47px",
                  }}
                >
                  <IconButton>
                    <AttachFileOutlinedIcon />
                  </IconButton>
                  <TextField variant="standard" sx={{ width: "200px" }} />
                </Stack>
                <Stack
                  mt={4}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none", width: "150px" }}
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none", width: "150px" }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Modal>
        </Stack>
        <Typography
          mt={1}
          fontSize="20px"
          lineHeight="25px"
          sx={{ color: "white !important" }}
        >
          Your books today
        </Typography>

        <Grid spacing={3} mt={4} container>
          <Grid
            item
            xs={12}
            sx={6}
            md={4}
            sx={{ paddingRight: "15px", position: "relative" }}
          >
            <BookCard
              title="Raspberry Pi User Guide"
              cover="http://url.to.book.cover"
              pages={221}
              publishedAt={2012}
              Isbn={9781118464465}
              publication="Eben Upton"
              status="New"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={6}
            md={4}
            sx={{ paddingRight: "15px", position: "relative" }}
          >
            <BookCard
              title="Raspberry Pi User Guide"
              cover="http://url.to.book.cover"
              pages={221}
              publishedAt={2012}
              Isbn={9781118464465}
              publication="Eben Upton"
              status="Reading"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={6}
            md={4}
            sx={{ paddingRight: "15px", position: "relative" }}
          >
            <BookCard
              title="Raspberry Pi User Guide"
              cover="http://url.to.book.cover"
              pages={221}
              publishedAt={2012}
              Isbn={9781118464465}
              publication="Eben Upton"
              status="Finished"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={6}
            md={4}
            sx={{ paddingRight: "15px", position: "relative" }}
          >
            <BookCard
              title="Raspberry Pi User Guide"
              cover="http://url.to.book.cover"
              pages={221}
              publishedAt={2012}
              Isbn={9781118464465}
              publication="Eben Upton"
              status="Finished"
            />
          </Grid>
        </Grid>
      </Container>
    </BackgroundContainer>
  );
};

export default Home;
