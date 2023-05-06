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
  borderRadius: "8px",
  maxWidth: "450px",
});

const TextBox = styled(Box)({
  position: "absolute",
  top: "758px",
  color: "white",
});

const TextTypo = styled(Typography)({
  position: "absolute",
  width: "1043px",
  height: "64px",
  left: "33px",
  //top: "814px",
});

const ImageCardDetail = ({ objectNumber, longTitle }: IImageCardDetail) => {
  return (
    <RootBox data-testid="molecule-CardDetail">
      <ImageConstructor width={1408} height={850} id={objectNumber} />
      <TextBox>
        <TextTypo variant="h1" children={longTitle} />
      </TextBox>
    </RootBox>
  );
};

export default ImageCardDetail;
