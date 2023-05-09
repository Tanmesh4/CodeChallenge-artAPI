import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button as MUIButton, ButtonProps } from "@mui/material";
import theme from "../../../theme/theme";

const StyledButton = styled(MUIButton)({
  ...theme.typography.h5,
  textTransform: "none",
  padding: "8px 24px",
  borderRadius: "40px",
  width: "150px",
  height: "48px",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 16px 16px 4px rgba(0, 0, 0, 0.12)",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "&.Mui-disabled": {
    opacity: 0.5,
    backgroundColor: "grey",
    color: "black",
  },
});

interface IButtonProps extends ButtonProps {
  children: string;
  handleSearch: any;
  id?: any;
  isButtonDisabled: boolean;
}

const ButtonComponent = ({ children, handleSearch, id, isButtonDisabled}: IButtonProps) => {

    return (
      <StyledButton
        data-testid="button-atom"
        onClick={handleSearch}
        variant="contained"
        disabled = {isButtonDisabled}
      >
        {children}
      </StyledButton>
    );
  };
  
  export default ButtonComponent;