import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Loading from "../Loading";

interface ITile {
  url: string;
  x: number;
  y: number;
}

interface IImageConstructorProps {
  width: number;
  height: number;
  id: string;
}

const ImageConstructor: React.FC<IImageConstructorProps> = ({ width, height, id }) => {
  const [tiles, setTiles] = useState<ITile[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection/${id}/tiles?&key=2esrTh6M`
        );
        const data = response.data;
        let res = width * height;
        let closestResolution: number = 0;
        for (let i = 0; i < data.levels.length; i++) {
          const distance = Math.sqrt(
            (data.levels[i].width - width)**2 + (data.levels[i].height - height)**2
          );
          if (distance < res) {
            closestResolution = i;
            res = distance;
          }
        }
        console.log("my tiles: ", data.levels[closestResolution]);
        setTiles(data.levels[closestResolution].tiles);
  
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
  
        const image = new Image();
        let loadedTiles = 0;
        const noOfTiles = data.levels[closestResolution].tiles.length;
        const tilesWidth = Math.round(width / Math.sqrt(noOfTiles));
        const tileHeight = Math.round(height / Math.sqrt(noOfTiles));
        console.log("tile data is: ", noOfTiles, tilesWidth, tileHeight);
        image.onload = () => {
          data.levels[closestResolution].tiles.forEach((tile: { x: number; y: number; url: string; }) => {
            const tileImage = new Image();
            tileImage.crossOrigin = "anonymous";
            tileImage.onload = () => {
              context.drawImage(
                tileImage,
                tile.x * tilesWidth,
                tile.y * tileHeight,
                tilesWidth,
                tileHeight
              );
              loadedTiles++;
              if (loadedTiles === noOfTiles) {
                const imgData = canvas.toDataURL();
                const img = new Image();
                img.src = imgData;
                img.width = width;
                img.height = height;
                canvas.parentNode?.replaceChild(img, canvas);
              }
            };
            tileImage.src = tile.url;
          });
        };
        image.src = data.levels[closestResolution].tiles[0]?.url;
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchTiles();
  }, [width, height, id]);
  
  return (
    <Box sx={{ display: "flex", justifyContent:"center"}} data-testid="imageConstructor">
      {tiles && tiles.length > 0 ? (
        <>
          <canvas ref={canvasRef} width={width} height={height}/>
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default ImageConstructor;