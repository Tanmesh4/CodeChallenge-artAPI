import { Box, Button, styled } from "@mui/material";
import React from "react";
import Logotext from "../LogoText";
import SearchFieldComponent from "../../atom/SearchBar";
import ButtonComponent from "../../atom/Button";

interface INavBarProp {
  handleSearchResult: () => {};
  handleSearch: () => void;
}

const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  padding: "32px",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(31, 31, 31, 0.4)",
  border: "1px solid #CA35F7",
  boxShadow: "0px 40px 40px rgba(0, 0, 0, 0.16)",
  backdropFilter: "blur(12px)" /* Note: backdrop-filter has minimal browser support */,
  borderRadius: "53px",
  //height: "112px"
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const Navbar = ({ handleSearchResult, handleSearch }: INavBarProp) => {
  return (
    <RootBox data-testid="molecule-navbar">
      <Box>
        <Logotext />
      </Box>
      <SearchBox>
        <SearchFieldComponent handleSearchResult={handleSearchResult} />
        <ButtonComponent children={"Search"} handleSearch={handleSearch} />
      </SearchBox>
    </RootBox>
  );
};

export default Navbar;
