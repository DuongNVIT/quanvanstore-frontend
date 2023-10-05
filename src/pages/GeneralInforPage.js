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
import generalInforService from '../services/generalInforService'

const dayConvert = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];


function GeneralInforPage() {

    const [generalInfor, setGeneralInfor] = useState("");

    const handleGetGeneralInfor = async () => {
        try {
            const ans = await generalInforService.getInfor();
            setGeneralInfor(ans.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetGeneralInfor();
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
                            Giới thiệu về cửa hàng
                        </Typography>
                        <Divider />
                        <Box
                            className="general-infor"
                            dangerouslySetInnerHTML={{ __html: generalInfor?.content }}
                        />
                    </Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default GeneralInforPage