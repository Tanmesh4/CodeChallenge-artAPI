import React from "react";
import { Box, Typography, styled} from "@mui/material";
import ImageConstructor from "../../atom/imageConstrtuctor";
import theme from "../../../theme/theme";

interface IImageCardDetail {
  objectNumber: string;
  longTitle: string;
  width: number;
  height: number;
}

const RootBox = styled(Box)({
  borderRadius: "8px",
  position: "relative",
  maxWidth: "100%",
  height: "850px",
  overflow: "hidden",
  '& img': {
    position: "absolute",
    maxWidth: "100%",
    height: "850px",
    objectFit: "cover",
    top: "0",
    left: "0",
  },
});

const TextBox = styled(Box)({
  position: "absolute",
  width: "1043px",
  left: "33px",
  bottom: "28px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    left: "5%",
  },
});

const ImageCardDetail = ({ objectNumber, longTitle, width, height}: IImageCardDetail) => {
  return (
    <RootBox data-testid="molecule-CardDetail">
      <ImageConstructor width={width} height={height} id={objectNumber}/>
      <TextBox>
        <Typography
          variant="h1"
          color={theme.palette.primary.contrastText}
          children={longTitle}
        />
      </TextBox>
    </RootBox>
  );
};

export default ImageCardDetail;