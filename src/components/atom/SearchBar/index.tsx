import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material";

interface ITextFieldProps extends StandardTextFieldProps {
  handleSearchResult: () => void;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  //width: "412px",
  //height: "32px",
  color: "rgba(255, 255, 255, 0.2)",
  "& .MuiInput-input": {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "32px",
    color: "white",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  //backgroundColor: "transparent",
  padding: "8px 24px",
  width: "460px",
 // height: "48px",
  //background: "rgba(31, 31, 31, 0.4)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "80px",
}));

const SearchFieldComponent = ({ handleSearchResult }: ITextFieldProps) => {
  return (
    <StyledBox data-testid="searchfield-atom">
      <StyledTextField
        id="standard-basic"
        variant="standard"
        placeholder="Please type in your search"
        onChange={handleSearchResult}
        fullWidth
      />
    </StyledBox>
  );
};
export default SearchFieldComponent;
