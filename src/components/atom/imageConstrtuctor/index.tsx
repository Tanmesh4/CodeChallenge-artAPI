import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Loading from "../Loading";

interface Tile {
  url: string;
  x: number;
  y: number;
}

interface ImageConstructorProps {
  width: number;
  height: number;
  id: string;
}

const getClosestResolution = (levels: any[], width: number, height: number) => {
  const resolutions = levels.map((level: any) => ({
    level,
    size: Math.sqrt((level.width - width) ** 2 + (level.height - height) ** 2),
  }));
  return resolutions.reduce((prev, curr) =>
    prev.size < curr.size ? prev : curr
  ).level;
};

const loadTile = (
  tile: Tile,
  tilesWidth: number,
  tileHeight: number,
  context: CanvasRenderingContext2D
) => {
  return new Promise<void>((resolve) => {
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
      resolve();
    };
    tileImage.src = tile.url;
  });
};

const ImageConstructor: React.FC<ImageConstructorProps> = ({
  width,
  height,
  id,
}) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection/${id}/tiles`,
          {
            params: {
              id: id,
              key: "2esrTh6M",
            },
          }
        );
        const data = response.data;
        const closestResolution = getClosestResolution(
          data.levels,
          width,
          height
        );
        setTiles(closestResolution.tiles);

        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);

        const noOfTiles = closestResolution.tiles.length;
        const tilesWidth = Math.round(width / Math.sqrt(noOfTiles));
        const tileHeight = Math.round(height / Math.sqrt(noOfTiles));
        const promises = closestResolution.tiles.map((tile: Tile) =>
          loadTile(tile, tilesWidth, tileHeight, context)
        );
        await Promise.all(promises);

        const imgData = canvas.toDataURL();
        const img = new Image();
        img.src = imgData;
        img.width = width;
        img.height = height;
        canvas.parentNode?.replaceChild(img, canvas);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTiles();
  }, [width, height, id]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center" }}
      data-testid="imageConstructor"
    >
      {tiles && tiles.length > 0 ? (
        <>
          <canvas ref={canvasRef} width={width} height={height} />
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default ImageConstructor;
