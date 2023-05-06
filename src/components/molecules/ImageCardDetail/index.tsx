import React from "react";
import { Box, Typography, styled } from "@mui/material";
import ImageConstructor from "../../atom/imageConstructor";

interface IImageCardDetail {
  objectNumber: string;
  longTitle: string;
}
const RootBox = styled(Box)({
  position: "absolute",
  left: "0px",
  right: "0px",
  //   top: "56px",
  //   bottom: "512px",
  borderRadius: "8px",
});

const TextBox = styled(Box)({
  position: "absolute",
  top: "758px",
  color: "white",
});

const ImageCardDetail = ({ objectNumber, longTitle }: IImageCardDetail) => {
  return (
    <RootBox data-testid="molecule-CardDetail">
      <ImageConstructor width={1408} height={850} id={objectNumber} />
      <TextBox>
        <Typography variant="h1" children={longTitle} />
      </TextBox>
    </RootBox>
  );
};

export default ImageCardDetail;
