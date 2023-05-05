import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ArtWorkText from "../../components/atom/AllArtWorkText";
import axios from "axios";
import BasicTemplate from "../../components/template";
import ArtworkGrid from "../../components/organisms/allArtwork";

const HomePage = () => {
  const [artData, setArtData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearch, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredDataLength, setFilteredDataLength] = useState(0);
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
    setSearchValue(event.target.value);
    setSearch(false);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch(true);
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
  }, [filteredDataLength, searchValue, artData]);

  return (
    <Box>
      <BasicTemplate
        handleSearchResult={handleSearchResult}
        handleSearch={handleSearch}
        middleData={
          <Box>
            <Box>
              <ArtWorkText
                artWorkText={
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
      />
    </Box>
  );
};

export default HomePage;
