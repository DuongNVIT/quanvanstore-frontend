import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Avatar, Box, Button, Container, Divider, Grid, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material'
import { AccountBox, AccountCircleOutlined, Camera, CameraAlt, FactCheckOutlined, LockOutlined, NotificationsOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import newsService from '../services/newsService'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from '../components/NewsItem/NewsItem'

const dayConvert = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];


function NewsPage() {

    const { id } = useParams();
    const [news, setNews] = useState({});
    const [newsList, setNewsList] = useState([]);

    const handleGetNewsList = async () => {
        try {
            const res = await newsService.getAll();
            let list = res.data.data;
            list = list.filter((item) =>  item.id != id);
            setNewsList(list);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetNews();
        handleGetNewsList();
    }, [id])

    useEffect(() => {
        handleGetNewsList();
        
    }, [])

    const handleGetNews = async () => {
        try {
            const res = await newsService.getOneNews(id);
            console.log(res);
            setNews(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetNews()
    }, [])


    return (
        <Box>
            <Header />
            <Box sx={{ margin: '20px 0' }}>
                <Container>
                    <Box sx={{
                        backgroundColor: '#fff',
                        padding: '50px 180px',
                        borderRadius: '3px'
                    }}>
                        <Typography sx={{
                            fontSize: '2.8rem',
                            fontWeight: '500',
                            color: '#111111',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            // marginBottom: '12px'
                        }}>
                            {news.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                fontStyle: 'italic',
                                textAlign: 'center',
                                margin: '4px 0 12px'
                            }}
                        >
                            {news.description}
                        </Typography>
                        <Divider />
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                color: '#9098B0',
                                textAlign: 'center',
                                padding: '4px 0'
                            }}
                        >
                            {dayConvert[new Date(news.createdDate).getDay()]}, ngày {new Date(news.createdDate).getDate()}/{new Date(news.createdDate).getMonth()}/{new Date(news.createdDate).getFullYear()}

                        </Typography>
                        <Divider />
                        <Box
                            className="news_content"
                            dangerouslySetInnerHTML={{ __html: news.content }}
                        />
                    </Box>
                    <Box sx={{
                        backgroundColor: '#fff',
                        marginTop: '20px'
                    }}>
                        <Box sx={{
                            color: '#131928',
                            fontSize: '2.2rem',
                            fontWeight: '500',
                            padding: '16px',
                            width: '100%',
                            // borderBottom: '1px solid #ccc'
                        }}>
                            Các tin tức liên quan
                        </Box>
                        <Divider sx={{margin: '0 16px'}}/>
                        <Grid container spacing={2} sx={{ padding: '16px' }}>
                            {
                                newsList.map((item, index) => {
                                    return <Grid item md={3}>
                                        <NewsItem news={item} key={index}/>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default NewsPage