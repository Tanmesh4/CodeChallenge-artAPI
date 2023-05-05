import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ImageComp from "../../atom/Image";
import Logo from "../../../images/Vector.svg";

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  alignItems: "center",
}));

const Logotext = () => {
  return (
    <RootBox data-testid="molecule-logotext">
      <ImageComp src={Logo} alt={"Logo"} />
      <Typography variant="h3" color="#AEAEB2">
        Art API
      </Typography>
    </RootBox>
  );
};

export default Logotext;
