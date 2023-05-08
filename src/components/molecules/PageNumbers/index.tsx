import { Box, Pagination,styled } from "@mui/material";
import React from "react";

interface IPageNumbers {
  handlePageChange: any;
}

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  margin: "42px"
});

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .Mui-selected": {
    color: "white",
  },
  "& .MuiPaginationItem-root": {
    color: "white",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}`,
    },
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    gap: "10px",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiPaginationItem-root": {
      width: "40px",
      height: "40px",
      padding: "8px",
      gap: "5px",
    },
  },
}));

const PageNumbers = ({ handlePageChange }: IPageNumbers) => {
  return (
    <RootBox data-testid="moelcule-pageNumbers">
      <StyledPagination
        count={11}
        size="large"
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
        variant="outlined"
        color="primary"
        onChange={handlePageChange}
      ></StyledPagination>
    </RootBox>
  );
};

export default PageNumbers;
