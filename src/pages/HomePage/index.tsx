import { Box, Typography } from "@mui/material";
import React from "react";
import BasicTemplate from "../../components/template";
import ArtworkGrid from "../../components/organisms/allArtwork";
import theme from "../../theme/theme";

interface IHomePage {
  handleSearchResult: any,
  handleSearch: any,
  isSearch: boolean,
  filteredDataLength: number,
  searchValue: string,
  artData: string[],
  handlePageChange: any,
  isButtonDisabled: boolean,
  handleOptionSelected: any,
  options: string[]

}

const HomePage = ({
  handleSearchResult,
  handleSearch,
  isSearch,
  filteredDataLength,
  searchValue,
  artData,
  handlePageChange,
  isButtonDisabled,
  handleOptionSelected,
  options

}:IHomePage) => {
  return (
    <Box>
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={
          <Box>
            <Box sx={{ marginBottom: "32px" }}>
              <Typography
                variant="h1"
                color={theme.palette.text.secondary}
                children={
                  isSearch
                    ? `Found ${filteredDataLength} result for : ${searchValue}`
                    : "All artwork"
                }
              />
            </Box>
            <ArtworkGrid
              artData={artData}
              handlePageChange={handlePageChange}
            />
          </Box>
        }
        isButtonDisabled={isButtonDisabled}
        options={options}
        handleOptionSelected={handleOptionSelected}
      />
    </Box>
  );
};

export default HomePage;
