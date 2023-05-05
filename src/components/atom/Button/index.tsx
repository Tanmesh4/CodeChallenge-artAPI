import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button as MUIButton, ButtonProps } from "@mui/material";

const StyledButton = styled(MUIButton)({
  textTransform: "none",
  padding: "8px 24px",
  borderRadius: "40px",
  width: "150px",
  height: "48px",
  backgroundColor: "#E10856",
  boxShadow: "0px 16px 16px 4px rgba(0, 0, 0, 0.12)",
  "&:hover": {
    backgroundColor: "#E10856",
    color: "white",
  },
});

interface IButtonProps extends ButtonProps {
  children: string;
  handleSearch: ()=>void;
  id?: any;
}

const ButtonComponent = ({ children, handleSearch, id}: IButtonProps) => {

    return (
      <StyledButton
        data-testid="button-atom"
        onClick={handleSearch}
        //color= "warning"
        variant="contained"
      >
        {children}
      </StyledButton>
    );
  };
  
  export default ButtonComponent;