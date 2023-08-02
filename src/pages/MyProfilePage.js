import { AccountCircleOutlined, FactCheckOutlined, LockOutlined, NotificationsOutlined } from '@mui/icons-material'
import { Avatar, Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import BillPage from '../components/BillPage/BillPage'
import ChangePassword from '../components/ChangePassword/ChangePassword'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PersonalInfor from '../components/PersonalInfor/PersonalInfor'

function MyProfilePage() {
    return (
        <Box>
            <Header />
            <Box sx={{ margin: '20px 0' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item md={2.5}>
                            <Box sx={{
                                // backgroundColor: '#fff',
                                padding: '16px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}>
                                    <Avatar sx={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '12px 0'
                                    }} />

                                    <Typography sx={{
                                        fontSize: '1.4rem',
                                        fontWeight: '500',
                                    }}>duong.nv194260</Typography>
                                </Box>
                                <Divider sx={{ margin: '20px 0' }} />
                                <Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#545866',
                                        marginBottom: '16px'
                                    }}>
                                        <AccountCircleOutlined sx={{
                                            fontSize: '2.0rem',
                                            color: '#545866',
                                            width: '40px'
                                        }} />
                                        <Link to="/profile/infor">
                                            <Typography sx={{fontSize: '1.4rem'}}>Thông tin cá nhân</Typography>
                                        </Link>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#545866',
                                        marginBottom: '16px'
                                    }}>
                                        <FactCheckOutlined sx={{
                                            fontSize: '2.0rem',
                                            color: '#545866',
                                            width: '40px'
                                        }} />
                                        <Link to="bill">
                                            <Typography sx={{fontSize: '1.4rem'}}>Đơn mua</Typography>
                                        </Link>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#545866',
                                        marginBottom: '16px'
                                    }}>
                                        <LockOutlined sx={{
                                            fontSize: '2.0rem',
                                            color: '#545866',
                                            width: '40px'
                                        }} />
                                        <Link to="change">
                                            <Typography sx={{fontSize: '1.4rem'}}>Đổi mật khẩu</Typography>
                                        </Link>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#545866',
                                        marginBottom: '16px'
                                    }}>
                                        <NotificationsOutlined sx={{
                                            fontSize: '2.0rem',
                                            color: '#545866',
                                            width: '40px'
                                        }} />
                                        <Typography sx={{fontSize: '1.4rem'}}>Thông báo</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={9.5}>
                            <Routes>
                                <Route path="" element={<PersonalInfor />} />
                                <Route path="infor" element={<PersonalInfor />} />
                                <Route path="bill" element={<BillPage />} />
                                <Route path="change" element={<ChangePassword />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default MyProfilePage