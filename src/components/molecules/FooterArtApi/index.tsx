import { Box, Typography, styled } from "@mui/material";
import React from "react";

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 16px",
  gap: "8px",
  background: "#262626"
});

const FooterArtApi = () => {
  return (
    <RootBox data-testid="molecule-FooterArtApi">
      <Typography variant='h6' color="#636366">ArtAPI</Typography>
    </RootBox>
  );
};

export default FooterArtApi;
