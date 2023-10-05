import { ArrowRight } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom';

const dayConvert = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];


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

function NewsItem({ news }) {
    const classes = useStyles();

    return (
        <Link to={`/news/${news.id}`}>
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
                    sx={{ height: 190 }}
                    image="http://diennuocthuytrang.com/uploads/source//z3323016329284-1c1e08e2eb5b2bf64db3cd43204ed449.jpg"
                    title="green iguana"
                />
                <CardContent sx={{ padding: '12px 12px 4px' }}>
                    <Typography variant="h5" component="div"
                        sx={{
                            lineHeight: '20px',
                            height: '15px',
                            maxHeight: '40px',
                            minHeight: '40px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {news?.title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 0 0' }}>
                        <Typography sx={{ fontSize: '1.4rem', color: '#9098B0' }}>
                            {dayConvert[new Date(news.createdDate).getDay()]}, ngày {new Date(news.createdDate).getDate()}/{new Date(news.createdDate).getMonth()}/{new Date(news.createdDate).getFullYear()}

                        </Typography>
                        <Button sx={{ fontSize: '1.2rem', textTransform: 'none'}}>
                            Xem thêm
                            <ArrowRight />
                        </Button>
                    </Box>
                </CardContent>

            </Card>
        </Link>
    )
}

export default NewsItem