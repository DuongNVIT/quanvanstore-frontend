import { Box, Button, Divider, Grid, InputBase, Typography } from '@mui/material'
import React from 'react'

function ChangePassword() {
    return (
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
                                Xác nhận mật khẩu
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Nhập lại mật khẩu mới'
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
    )
}

export default ChangePassword