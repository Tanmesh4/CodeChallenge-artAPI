import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface ITableContent {
    heading: string,
    content: any,
    isLast: boolean
}

const RootBox = styled(Box)(({ isLast }: { isLast: boolean }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems:"flex-start",
    padding: "8px 0px 16px",
    gap: "4px",
    borderBottom: isLast ? "none" : "1px solid #C4C4C4",
    width: "100%"
  }));

const TableContent = ({heading, content, isLast}: ITableContent) => {
  return (
    <RootBox data-testid="molecule-tableContent" isLast={isLast}>
        <Typography variant='subtitle1' color="#C4C4C4" children={heading}/>
        <Typography variant='h4' color="#FFFFFF" children={content}/>
    </RootBox>
  )
}

export default TableContent