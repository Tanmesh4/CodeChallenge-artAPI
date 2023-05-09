import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface ITableContent {
    heading: string,
    content: string,
    dataislast: any
}

const RootBox = styled(Box)(({ dataislast }: { dataislast: any }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems:"flex-start",
    padding: "8px 0px 16px",
    gap: "4px",
    borderBottom: dataislast === "true" ? "none" : "1px solid #C4C4C4",
    width: "100%"
  }));

const TableContent = ({heading, content, dataislast}: ITableContent) => {
  return (
    <RootBox data-testid="molecule-tableContent" dataislast={dataislast.toString()}>
        <Typography variant='subtitle1' color="#C4C4C4" children={heading}/>
        <Typography variant='h4' color="#FFFFFF" children={content}/>
    </RootBox>
  )
}

export default TableContent