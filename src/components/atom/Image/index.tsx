import Box from "@mui/material/Box";
import React from "react";

export interface ImageProps {
  src: any;
  alt: any;
  style?: any;
  sx?: any;
  onClick?: any;
}

const ImageComp: React.FC<ImageProps> = ({ src, alt, onClick}) => {
  return (
    <Box>
      <img src={src} alt={alt} onClick={onClick}/>
    </Box>
  );
};

export default ImageComp;