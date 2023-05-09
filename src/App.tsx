import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailPage";
import axios from "axios";

function App() {
  const [artData, setArtData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearch, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredDataLength, setFilteredDataLength] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const itemsPerPage = 9;
  const navigate = useNavigate();
  const options = ["paintings", "sculptures", "drawings"];

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
        //console.log("data is options: ", response.data.artObjects);
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

  const handleSearchResult = useCallback(
    (event: any) => {
      if (!event.target.value) {
        setIsButtonDisabled(true);
      } else if (isButtonDisabled && event.target.value.length > 0) {
        setIsButtonDisabled(false);
      }
      setSearchValue(event.target.value);
      setSearch(false);
    },
    [isButtonDisabled]
  );

  const handleOptionSelected = useCallback(
    (event: any, value: any) => {
      setSearchValue(value);
      if (!isButtonDisabled && !value) {
        setIsButtonDisabled(true);
      } else if (isButtonDisabled) {
        setIsButtonDisabled(false);
      }
      setSearch(false);
    },
    [isButtonDisabled]
  );

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
        navigate(`/${searchValue}`);
        console.log(response.data);
        setFilteredDataLength(response.data.count);
        setArtData(response.data.artObjects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchValue, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  handleSearchResult={handleSearchResult}
                  handleSearch={handleSearch}
                  isSearch={isSearch}
                  filteredDataLength={filteredDataLength}
                  searchValue={searchValue}
                  artData={artData}
                  handlePageChange={handlePageChange}
                  isButtonDisabled={isButtonDisabled}
                  handleOptionSelected={handleOptionSelected}
                  options={options}
                />
              }
            />
            <Route
              path="/:searchValue"
              element={
                <HomePage
                  handleSearchResult={handleSearchResult}
                  handleSearch={handleSearch}
                  isSearch={isSearch}
                  filteredDataLength={filteredDataLength}
                  searchValue={searchValue}
                  artData={artData}
                  handlePageChange={handlePageChange}
                  isButtonDisabled={isButtonDisabled}
                  handleOptionSelected={handleOptionSelected}
                  options={options}
                />
              }
            />
            <Route
              path="/artwork/:objectNumber"
              element={
                <DetailsPage
                  handleSearchResult={handleSearchResult}
                  handleSearch={handleSearch}
                  isButtonDisabled={isButtonDisabled}
                  options={options}
                  handleOptionSelected={handleOptionSelected}
                />
              }
            />
          </Routes>
        </>
      </div>
    </ThemeProvider>
  );
}

export default App;
