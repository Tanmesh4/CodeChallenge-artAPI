import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import ImageComp from '../../atom/Image'
import BackButtonImage from '../../../images/Chevron-left.svg'
import theme from '../../../theme/theme';

interface ITextBackButton {
  handleBackToList: any;
}

const RootBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start"
});

const RootButton = styled(Button)({
  display: "flex",
  alignItems: "flex-start"
});

const TextBackButton = ({handleBackToList}:ITextBackButton) => {
  return (
    <RootBox data-id="molecule-backbutton">
      <RootButton onClick={handleBackToList}>
      <ImageComp src={BackButtonImage} alt="BackButton"/>
      <Typography variant='h5' color={theme.palette.primary.main} children="Back to the List"/>
      </RootButton>
    </RootBox>
  )
}

export default TextBackButton