import { Box, Pagination, Stack, styled } from "@mui/material";
import React from "react";

interface IPageNumbers {
  handlePageChange: any;
}

const RootBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  padding: "0",
  gap: "8px",
  //width: "376px",
  height: "56px",
});

const PageNumbers = ({ handlePageChange }: IPageNumbers) => {
  return (
    <RootBox data-testid="moelcule-pageNumbers">
      <Pagination
        count={11}
        size="large"
        defaultPage={1}
        siblingCount={0}
        boundaryCount={1}
        variant="outlined"
        color="primary"
        onChange={handlePageChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
            backgroundColor: 'transparent'
          }
        }}
      ></Pagination>
    </RootBox>
  );
};

export default PageNumbers;
