import { Box,Typography, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import ImageConstructor from "../../atom/imageConstrtuctor";

interface IImageCardProps {
  imageSource?: string;
  rightTypo: string;
  leftTypo: string;
  imageClick: any;
  width: number;
  height: number;
  id: string;
}

const RootBox = styled(Box)({
  position: "relative",
  maxWidth: "450px",
  height: "364px",
  background:
    "linear-gradient(180deg, rgba(0, 0, 0, 0) 34.32%, rgba(0, 0, 0, 0.72) 72.5%)",
  "&:hover": {
    cursor: "pointer",
    opacity: "0.7",
    border: `3px solid ${theme.palette.divider}`,
    "&::before": {
      ...theme.typography.h5,
      content: "'Have a look'",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: theme.palette.primary.main
    },
  },
});

const ImageBox = styled(Box)({
  '& img': {
    position: "absolute",
    maxWidth: "100%",
    height: "364px",
    objectFit: "cover",
    top: "0",
    left: "0",
  },
});

const RightTypoBox = styled(Box)({
  position: "absolute",
  top: "0px",
  right: "0px",
  borderRadius: "0px 0px 0px 8px",
  padding: "4px 8px",
  background: "rgba(29, 29, 29, 0.5)",
});

const LeftBottomTypoBox = styled(Box)({
  position: "absolute",
  bottom: "40px",
  left: "24px",
  width: "346px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    left: "10%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "246px",
    left: "24px",
  },
});

const ImageCard = ({
  imageClick,
  leftTypo,
  rightTypo,
  width,
  height,
  id,
}: IImageCardProps) => {
  return (
    <RootBox data-testid="moelcule-imageCard" onClick={imageClick}>
      <ImageBox>
        <ImageConstructor width={width} height={height} id={id} />
      </ImageBox>
      <RightTypoBox>
        <Typography
          variant="subtitle2"
          color={theme.palette.info.main}
          children={rightTypo}
        />
      </RightTypoBox>
      <LeftBottomTypoBox>
        <Typography
          variant="h3"
          color={theme.palette.text.secondary}
          children={leftTypo}
        />
      </LeftBottomTypoBox>
    </RootBox>
  );
};

export default ImageCard;
