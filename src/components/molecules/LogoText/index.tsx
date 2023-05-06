import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ImageComp from "../../atom/Image";
import Logo from "../../../images/Vector.svg";
import theme from "../../../theme/theme";

const RootBox = styled(Box)(({
  display: "flex",
  gap: "16px",
  alignItems: "center",
}));

const Logotext = () => {
  return (
    <RootBox data-testid="molecule-logotext">
      <ImageComp src={Logo} alt={"Logo"} />
      <Typography variant="h3" color={theme.palette.text.primary}>
        Art API
      </Typography>
    </RootBox>
  );
};

export default Logotext;
