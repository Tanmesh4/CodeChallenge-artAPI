import React from "react";
import Navbar from "../molecules/NavBar";
import FooterArtApi from "../molecules/FooterArtApi";
import { Box, styled } from "@mui/material";

interface IBasicTemplate {
  handleSearchResult: any;
  handleSearch: any;
  middleData: React.ReactNode;
  isButtonDisabled: boolean;
  options: any;
  handleOptionSelected: any;
}

const NavBarBox = styled(Box)({
  marginBottom: "32px",
});

const BasicTemplate = ({
  handleSearchResult,
  handleSearch,
  middleData,
  isButtonDisabled,
  options,
  handleOptionSelected,
}: IBasicTemplate) => {
  return (
    <Box>
      <NavBarBox>
        <Navbar
          handleSearchResult={handleSearchResult}
          handleSearch={handleSearch}
          isButtonDisabled={isButtonDisabled}
          options={options} 
          handleOptionSelected={handleOptionSelected}        
          />
      </NavBarBox>
      <Box>{middleData}</Box>
      <FooterArtApi />
    </Box>
  );
};

export default BasicTemplate;
