import React from "react";
import Navbar from "../../components/molecules/NavBar";
import ArtWorkDetails from "../../components/organisms/ArtWorkDetials";
import { Box } from "@mui/material";
import TextBackButton from "../../components/molecules/TextBackButton";
import { useNavigate } from "react-router-dom";
import BasicTemplate from "../../components/template";

const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <BasicTemplate
        middleData={
        <Box data-testid="details-middleData">
          <TextBackButton
            handleBackToList={() => {
              navigate("/");
            } } />
          <ArtWorkDetails />
        </Box>}/>
    </Box>
  );
};

export default DetailsPage;
