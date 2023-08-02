import { Box, Typography } from '@mui/material'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import React from 'react'

function Logo() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <StoreMallDirectoryIcon/>
        <Typography sx={{marginLeft: 1, fontSize: '1.3rem'}}>QUAN VAN STORE</Typography>
    </Box>
  )
}

export default Logo