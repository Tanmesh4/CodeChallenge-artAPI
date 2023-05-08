import {Button, Typography, styled } from "@mui/material";
import React from "react";
import ImageComp from "../../atom/Image";
import BackButtonImage from "../../../images/Chevron-left.svg";
import theme from "../../../theme/theme";

interface ITextBackButton {
  handleBackToList: any;
}

const RootButton = styled(Button)({
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
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        children="Back to the List"
        sx = {{
          ":hover": {
            color: `${theme.palette.divider}`,
            opacity: "0.7"
          }
        }}
      />
    </RootButton>
  );
};

export default TextBackButton;
