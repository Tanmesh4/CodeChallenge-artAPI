import React, { useEffect, useState } from "react";
import TableContent from "../../molecules/TableContent";
import { Box, styled } from "@mui/material";
import axios from "axios";
import ImageCardDetail from "../../molecules/ImageCardDetail";
import { useParams } from "react-router-dom";

const TableBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "10px",
  gap: "10px",
});

const ArtWorkDetails = () => {
  const { objectNumber } = useParams();
  const [artObjectData, setArtObjectData] = useState<any>();
  const tableData = [
    { heading: "Title", content: artObjectData?.longTitle },
    { heading: "Artist", content: artObjectData?.principalOrFirstMaker },
    { heading: "Object Type", content: artObjectData?.objectTypes },
    { heading: "Measurements", content: artObjectData?.subTitle },
    {
      heading: "Description",
      content: artObjectData?.plaqueDescriptionEnglish,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=2esrTh6M`
        );
        setArtObjectData(response.data.artObject);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [objectNumber]);

  return (
    <>
      <Box data-testid="allArtworkDetais">
        <ImageCardDetail
          objectNumber={objectNumber ? objectNumber : ""}
          longTitle={artObjectData?.longTitle}
          width={1408}
          height={850}
        />
        <TableBox data-testid="tablebox-list">
          {tableData.map((data, index) => (
            <TableContent
              key={index}
              heading={data.heading}
              content={data.content}
              dataislast={index === tableData.length - 1}
            />
          ))}
        </TableBox>
      </Box>
    </>
  );
};

export default ArtWorkDetails;
