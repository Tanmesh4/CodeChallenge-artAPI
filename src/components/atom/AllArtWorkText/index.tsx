import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface IArtWorkText {
    artWorkText: string;  
}

const RootBox = styled(Box)({
  display: "flex"
});

const ArtWorkText = ({artWorkText}: IArtWorkText) => {
  return (
    <RootBox data-testid = "atom-artWorkText">
    <Typography variant='h1' color="#C4C4C4" children={artWorkText}/>
    </RootBox>
  )
}

export default ArtWorkText