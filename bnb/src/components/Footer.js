import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/BNBlogo.png";


const Footer = () => (
  <Box mt="80px" class="dark">
    <Stack
      gap="40px"
      sx={{ alignitems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      BNB© 💪
    </Typography>
  </Box>
);

export default Footer;
