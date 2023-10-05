import { Box } from '@mui/material'
import React from 'react'

function Banner({ banner }) {
    return (
        <Box sx={{ padding: '28px 0' }}>
            {/* <img
                style={{ width: '100%', height: '73vh', borderRadius: '3px' }}
                src="http://diennuocthuytrang.com/uploads/source//baner/layer-582.jpg"
                alt=""
            /> */}
            <img
                style={{ width: '100%', height: '73vh', borderRadius: '3px' }}
                src={banner?.url}
                alt=""
            />
        </Box>
    )
}

export default Banner