import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import ImageComp from "../../atom/Image";
import BackButtonImage from "../../../images/Chevron-left.svg";
import theme from "../../../theme/theme";

interface ITextBackButton {
  handleBackToList: any;
}

const RootButton = styled(Button)({
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  padding: "0",
  marginBottom: "32px",
  display: "flex"
});

const TextBackButton = ({ handleBackToList }: ITextBackButton) => {
  return (
    <RootButton
      onClick={handleBackToList}
      startIcon={<ImageComp src={BackButtonImage} alt="BackButton" />}
    >
      {/* <ImageComp src={BackButtonImage} alt="BackButton"/> */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        children="Back to the List"
      />
    </RootButton>
  );
};

export default TextBackButton;
