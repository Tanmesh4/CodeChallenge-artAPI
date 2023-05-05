import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const fetchTiles = async () => {
        try {
          const response = await axios.get(
            `https://www.rijksmuseum.nl/api/en/collection/${id}/tiles?&key=2esrTh6M`
          );
          const data = response.data;
          let res = width * height;
          let closestResolution: number = 0;
          for(let i=0; i< data.levels.length; i++) {
            const distance = Math.sqrt((data.levels[i].width - width) ** 2 + (data.levels[i].height - height) ** 2);
            if (distance < res) {
                closestResolution = i;
                res = distance;
              }
          }
          //console.log("data: ",data,data.levels[closestResolution]);
          setTiles(data.levels[closestResolution].tiles);
        } catch (error) {
          console.error(error);
        }
      };
      
    fetchTiles();
  }, [width, height, id]);

  return (
    <Box sx={{display: "flex"}} data-testid="imageConstructor">
      {tiles && tiles.length > 0 ? (
        <img
          src={tiles[0].url}
          alt="Rijksmuseum collection"
          style={{ width, height }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default ImageConstructor;