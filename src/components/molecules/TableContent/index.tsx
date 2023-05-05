import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface ITableContent {
    heading: string,
    content: any
}

const RootBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems:"flex-start",
    padding: "8px 0px 16px",
    gap: "4px",
    borderBottom: "1px solid #C4C4C4"
  });

const TableContent = ({heading, content}: ITableContent) => {
  return (
    <RootBox data-testid="molecule-tableContent">
        <Typography variant='subtitle1' color="#C4C4C4" children={heading}/>
        <Typography variant='h4' color="#FFFFFF" children={content}/>
    </RootBox>
  )
}

export default TableContent