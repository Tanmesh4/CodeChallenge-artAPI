import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { Autocomplete, styled } from "@mui/material";
import theme from "../../../theme/theme";

interface ITextFieldProps extends StandardTextFieldProps {
  handleSearchResult: () => void;
  handleOptionSelected: (event?: any, value?: any) => void;
  options: any;
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
    width: "250px",
    padding: "2px 16px",
  },
}));

const SearchFieldComponent = ({
  handleSearchResult,
  handleOptionSelected,
  options
}: ITextFieldProps) => {
  return (
    <StyledBox data-testid="searchfield-atom">
      <Autocomplete
        id="search-input"
        freeSolo
        options={options}
        onChange={(event, value) => handleOptionSelected(event,value)}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            id="standard-basic"
            variant="standard"
            placeholder="Please type in your search"
            fullWidth
            onChange={handleSearchResult}
          />
        )}
        sx={{ 
          width: "100%",
          ".MuiAutocomplete-clearIndicator": {
            color: theme.palette.primary.main,
          },
          "& .MuiAutocomplete-option": {
            color: "red", // change this to the color you want
          },
        }}
      />
    </StyledBox>
  );
};
export default SearchFieldComponent;
