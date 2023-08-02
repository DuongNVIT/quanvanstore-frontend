import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    card: {
        // maxWidth: 345,
        cursor: 'pointer',
        border: '1px solid transparent',
        position: 'relative',
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-1px)',
            border: '1px solid rgba(0, 0, 0, 0.1)'
        }
    }
})

function NewsItem() {
    const classes = useStyles();

    return (
        <Card sx={{
            // maxWidth: 345,
            cursor: 'pointer',
            border: '1px solid transparent',
            position: 'relative',
            borderRadius: '2px',
            '&:hover': {
                cursor: 'pointer',
                transform: 'translateY(-1px)',
                border: '1px solid rgba(0, 0, 0, 0.1)'
            }
        }}>
            <CardMedia
                sx={{ height: 180 }}
                image="http://diennuocthuytrang.com/uploads/source//z3323016329284-1c1e08e2eb5b2bf64db3cd43204ed449.jpg"
                title="green iguana"
            />
            <CardContent sx={{ padding: '12px 12px 4px' }}>
                <Typography variant="h5" component="div">
                    Chọn loại ống nhựa nào tối ưu nhất cho hệ thống thoát nước
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 0 0' }}>
                    <Typography sx={{ fontSize: '1.4rem', color: '#9098B0' }}>Thứ ba 25/04/2023</Typography>
                    <Button sx={{ fontSize: '1.2rem' }}>
                        Xem thêm
                        <ArrowRight />
                    </Button>
                </Box>
            </CardContent>

        </Card>
    )
}

export default NewsItem