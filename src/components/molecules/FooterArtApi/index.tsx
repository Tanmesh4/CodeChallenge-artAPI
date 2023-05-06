import { Box, Typography, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 16px",
  gap: "8px",
  background: `${theme.palette.info.dark}`,
  height:"48px"
});

const FooterArtApi = () => {
  return (
    <RootBox data-testid="molecule-FooterArtApi">
      <Typography variant='h6' color={theme.palette.info.light}>ArtAPI</Typography>
    </RootBox>
  );
};

export default FooterArtApi;
