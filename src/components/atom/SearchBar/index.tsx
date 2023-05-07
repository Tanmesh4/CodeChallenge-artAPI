import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { Button, styled } from "@mui/material";
import ImageComp from "../Image";

interface ITextFieldProps extends StandardTextFieldProps {
  handleSearchResult: () => void;
  searchImage: string;
  clearSearch: any;
  searchQuery: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.2)",
  "& .MuiInput-input": {
    ...theme.typography.body1,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "2px 24px",
  width: "460px",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "80px",
  [theme.breakpoints.down("md")]: {
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    padding: "2px 16px",
  },
}));

const SearchFieldComponent = ({ handleSearchResult, searchImage, clearSearch, searchQuery }: ITextFieldProps) => {
  return (
    <StyledBox data-testid="searchfield-atom">
      <StyledTextField
        id="standard-basic"
        variant="standard"
        placeholder="Please type in your search"
        onChange={handleSearchResult}
        fullWidth
        value={searchQuery}
      />
      <ImageComp src={searchImage} onClick={clearSearch} alt=""/>
    </StyledBox>
  );
};
export default SearchFieldComponent;
