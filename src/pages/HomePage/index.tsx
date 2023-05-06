import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import BasicTemplate from "../../components/template";
import ArtworkGrid from "../../components/organisms/allArtwork";
import theme from "../../theme/theme";
import SearchImage from '../../images/Search.svg'
import CloseImage from '../../images/close.svg'

const HomePage = () => {
  const [artData, setArtData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearch, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredDataLength, setFilteredDataLength] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.rijksmuseum.nl/api/en/collection",
          {
            params: {
              key: "2esrTh6M",
              involvedMaker: "Rembrandt van Rijn",
              p: currentPage,
              ps: itemsPerPage,
            },
          }
        );
        setArtData(response.data.artObjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleSearchResult = useCallback((event: any) => {
    if(isButtonDisabled && event.target.value.length > 0) {
      setIsButtonDisabled(false);
    } else if (!isButtonDisabled && event.target.value.length === 0) {
      setIsButtonDisabled(true);
    }
    setSearchValue(event.target.value);
    setSearchQuery(event.target.value);
    setSearch(false);
  }, []);

  const handleClearSearch = useCallback((event: any) => {
    if(isSearch){
      setSearchValue("");
    }
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(true);
    setIsButtonDisabled(true);
    axios
      .get("https://www.rijksmuseum.nl/api/nl/collection", {
        params: {
          key: "2esrTh6M",
          q: searchValue,
          ps: itemsPerPage,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFilteredDataLength(response.data.count);
        setArtData(response.data.artObjects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filteredDataLength, searchValue, artData, searchQuery, isButtonDisabled, isSearch]);

  return (
    <Box>
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={
          <Box>
            <Box sx={{marginBottom:"32px"}}>
              <Typography variant="h1" color={theme.palette.text.secondary}
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
        searchImage={!isSearch ? '' : CloseImage}
        clearSearch = {handleClearSearch}
        searchQuery= {searchQuery}
        isButtonDisabled = {isButtonDisabled}
      />
    </Box>
  );
};

export default HomePage;
