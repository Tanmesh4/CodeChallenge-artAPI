import React from 'react'
import Navbar from '../molecules/NavBar'
import FooterArtApi from '../molecules/FooterArtApi'
import { Box } from '@mui/material'

interface IBasicTemplate {
    handleSearchResult: any;
    handleSearch: any;
    middleData: React.ReactNode;
}

const BasicTemplate = ({handleSearchResult,handleSearch, middleData}: IBasicTemplate) => {
  return (
    <Box>
        <Navbar handleSearchResult={handleSearchResult} handleSearch={handleSearch}/>
        <Box>
            {middleData}
        </Box>
        <FooterArtApi/>
    </Box>
  )
}

export default BasicTemplate