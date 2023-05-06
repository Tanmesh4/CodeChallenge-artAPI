import { Box, Button, styled } from "@mui/material";
import React from "react";
import Logotext from "../LogoText";
import SearchFieldComponent from "../../atom/SearchBar";
import ButtonComponent from "../../atom/Button";

interface INavBarProp {
  handleSearchResult: () => {};
  handleSearch: () => void;
  searchImage: any;
  clearSearch: any;
  searchQuery: any;
  isButtonDisabled: any;
}

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  padding: "29px",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(31, 31, 31, 0.4)",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "0px 40px 40px rgba(0, 0, 0, 0.16)",
  backdropFilter: "blur(12px)",
  borderRadius: "53px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

const Navbar = ({ handleSearchResult, handleSearch, searchImage, clearSearch, searchQuery, isButtonDisabled}: INavBarProp) => {
  return (
    <RootBox data-testid="molecule-navbar">
      <Box>
        <Logotext />
      </Box>
      <SearchBox>
        <SearchFieldComponent handleSearchResult={handleSearchResult} searchImage={searchImage} clearSearch={clearSearch} searchQuery={searchQuery} />
        <ButtonComponent children={"Search"} handleSearch={handleSearch} isButtonDisabled={isButtonDisabled} />
      </SearchBox>
    </RootBox>
  );
};

export default Navbar;
