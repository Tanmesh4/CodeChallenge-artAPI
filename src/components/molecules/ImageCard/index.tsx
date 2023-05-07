import { Box, Card, Typography, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import ImageConstructor from "../../atom/imageConstrtuctor";

const RootBox = styled(Box)({
  position: "relative",
  maxWidth: "450px",
  "&:hover": {
    cursor: "pointer",
    opacity: "0.7",
    //background: "rgba(255, 255, 255, 0.2)",
    border: `1px solid ${theme.palette.divider}`,
  },
});

const ImageBox = styled(Box)({
});

const RightTypoBox = styled(Box)({
  position: "absolute",
  top: "0px",
  right: "0px",
  background: "rgba(29, 29, 29, 0.5)",
  borderRadius: "0px 8px",
  padding: "4px 8px"
});

const LeftBottomTypoBox = styled(Box)({
  position: "absolute",
  bottom: "40px",
  left: "24px",
  width: "346px"
});

interface IImageCardProps {
  imageSource?: any;
  rightTypo: string;
  leftTypo: string;
  imageClick: any;
  width: number;
  height: number;
  id: string
}
const ImageCard = ({
  imageClick,
  leftTypo,
  rightTypo,
  width,
  height,
  id
}: IImageCardProps) => {
  return (
    <RootBox data-testid="moelcule-imageCard" onClick={imageClick}>
      <ImageBox>
        <ImageConstructor width={width} height={height} id={id} />
      </ImageBox>
      <RightTypoBox>
        <Typography variant="subtitle2" color={theme.palette.info.main} children={rightTypo} />
      </RightTypoBox>
      <LeftBottomTypoBox>
        <Typography variant="h3" color={theme.palette.text.secondary} children={leftTypo} />
      </LeftBottomTypoBox>
    </RootBox>
  );
};

export default ImageCard;
