import React from "react";
import ArtWorkDetails from "../../components/organisms/ArtWorkDetials";
import { Box } from "@mui/material";
import TextBackButton from "../../components/molecules/TextBackButton";
import { useNavigate } from "react-router-dom";
import BasicTemplate from "../../components/template";

interface IBasictempalte {
  handleSearchResult: any;
  handleSearch: any;
  isButtonDisabled: any;
  options: any;
  handleOptionSelected: any;
}

const DetailsPage = ({
  handleSearchResult,
  handleSearch,
  isButtonDisabled,
  options,
  handleOptionSelected
}:IBasictempalte) => {
  const navigate = useNavigate();
  return (
    <Box>
      <BasicTemplate
        middleData={
          <Box data-testid="details-middleData">
            <TextBackButton
              handleBackToList={() => {
                navigate("/");
              }}
            />
            <ArtWorkDetails />
          </Box>
        }
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
        options={options}
        handleOptionSelected={handleOptionSelected}
      />
    </Box>
  );
};

export default DetailsPage;
