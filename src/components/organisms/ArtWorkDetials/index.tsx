import React, { useEffect, useState } from "react";
import TableContent from "../../molecules/TableContent";
import { Box } from "@mui/material";
import axios from "axios";
import ImageCardDetail from "../../molecules/ImageCardDetail";
import { useParams } from "react-router-dom";


const ArtWorkDetails = () => {

  const { objectNumber } = useParams();
  console.log("object number: " + objectNumber);
  const [artObjectData, setArtObjectData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=2esrTh6M`,
        );
        setArtObjectData(response.data.artObject);
        console.log("artObjectData", artObjectData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Box sx={{display: "flex"}} data-testid="allArtworkDetais">
          <ImageCardDetail
            objectNumber={objectNumber ? objectNumber : '' }
            longTitle={artObjectData?.longTitle}
          />
        </Box>
      <Box>
        <Box>
        <TableContent heading={"Title"} content={artObjectData?.longTitle} />
        <TableContent
          heading={"Artist"}
          content={artObjectData?.principalOrFirstMaker}
        />
        <TableContent
          heading={"Object Type"}
          content={artObjectData?.objectTypes}
        />
        <TableContent
          heading={"Measurements"}
          content={artObjectData?.subTitle}
        />
        <TableContent
          heading={"Description"}
          content={artObjectData?.plaqueDescriptionEnglish}
        />
        </Box>
      </Box>
    </>
  );
};

export default ArtWorkDetails;
