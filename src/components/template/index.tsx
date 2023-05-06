import React from 'react'
import Navbar from '../molecules/NavBar'
import FooterArtApi from '../molecules/FooterArtApi'
import { Box, styled } from '@mui/material'

interface IBasicTemplate {
    handleSearchResult?: any;
    handleSearch?: any;
    middleData: React.ReactNode;
    searchImage?: any;
    clearSearch?: any;
    searchQuery?: string;
    isButtonDisabled? : boolean;
}

const NavBarBox = styled(Box)({
  marginBottom : "32px",
});


const BasicTemplate = ({handleSearchResult,handleSearch, middleData, searchImage, clearSearch, searchQuery, isButtonDisabled}: IBasicTemplate) => {
  return (
    <Box>
        <NavBarBox>
        <Navbar handleSearchResult={handleSearchResult} handleSearch={handleSearch} searchImage={searchImage} clearSearch={clearSearch} searchQuery={searchQuery} isButtonDisabled={isButtonDisabled}/>
        </NavBarBox>
        <Box>
            {middleData}
        </Box>
        <FooterArtApi/>
    </Box>
  )
}

export default BasicTemplate