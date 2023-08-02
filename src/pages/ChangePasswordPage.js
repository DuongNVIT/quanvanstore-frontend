import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Avatar, Box, Button, Container, Divider, Grid, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material'
import { AccountBox, AccountCircleOutlined, Camera, CameraAlt, FactCheckOutlined, LockOutlined, NotificationsOutlined } from '@mui/icons-material'

function ChangePassWordPage() {
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
                                        <Typography sx={{
                                            fontSize: '1.4rem'
                                        }}>Thông tin cá nhân</Typography>
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
                                        <Typography sx={{
                                            fontSize: '1.4rem'
                                        }}>Đơn mua</Typography>
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
                                        <Typography sx={{
                                            fontSize: '1.4rem'
                                        }}>Đổi mật khẩu</Typography>
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
                                        <Typography sx={{
                                            fontSize: '1.4rem'
                                        }}>Thông báo</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={9.5}>
                            <Box sx={{
                                padding: '16px',
                                backgroundColor: '#fff'
                            }}>
                                <Typography sx={{
                                    fontSize: '2.0rem',
                                    fontWeight: '500',
                                    marginBottom: '4px'
                                }}>
                                    Đổi mật khẩu
                                </Typography>
                                <Divider />
                                <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                                    <Grid item md={8}>
                                        <Box sx={{
                                            marginBottom: '20px'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Box component='label' sx={{
                                                    width: '150px',
                                                    textAlign: 'right',
                                                    padding: '0 12px',
                                                    fontSize: '1.5rem',
                                                    color: '#545866'
                                                }}>
                                                    Mật khẩu cũ
                                                </Box>
                                                <InputBase
                                                    required
                                                    id="outlined-basic"
                                                    placeholder='Nhập mật khẩu cũ'
                                                    variant='outlined'
                                                    sx={{
                                                        flex: 1,
                                                        borderRadius: '2px',
                                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                                        padding: '4px 8px',
                                                        fontSize: '1.4rem'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            marginBottom: '20px'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Box component='label' sx={{
                                                    width: '150px',
                                                    textAlign: 'right',
                                                    padding: '0 12px',
                                                    fontSize: '1.5rem',
                                                    color: '#545866'
                                                }}>
                                                    Mật khẩu mới
                                                </Box>
                                                <InputBase
                                                    required
                                                    id="outlined-basic"
                                                    placeholder='Nhập mật khẩu mới'
                                                    variant='outlined'
                                                    sx={{
                                                        flex: 1,
                                                        borderRadius: '2px',
                                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                                        padding: '4px 8px',
                                                        fontSize: '1.4rem'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        
                                        <Box sx={{
                                            marginBottom: '20px'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Box component='label' sx={{
                                                    width: '150px',
                                                    textAlign: 'right',
                                                    padding: '0 12px',
                                                    fontSize: '1.5rem',
                                                    color: '#545866'
                                                }}>

                                                </Box>
                                                <Button
                                                    variant='contained'
                                                    sx={{
                                                        borderRadius: '2px',
                                                        color: '#fff',
                                                        flex: '1',
                                                        fontSize: '1.3rem'
                                                    }}>
                                                    Lưu thay đổi
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default ChangePassWordPage