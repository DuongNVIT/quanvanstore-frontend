import { CameraAlt } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Typography } from '@mui/material'
import React from 'react'

function PersonalInfor() {
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
                Thông tin cá nhân
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
                                Tên đăng nhập
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Tên đăng nhập'
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
                                Tên
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Nguyễn Văn Đương'
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
                                Email
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='duong.nv194260@sis.hust.edu.vn'
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
                                Số điện thoại
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='0522081512'
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
                        <Avatar sx={{ width: '120px', height: '120px' }} />
                        <Button
                            component='label'
                            variant="outlined"
                            sx={{
                                textTransform: 'none',
                                color: 'rgba(0, 0, 0, 0.6)',
                                border: '1px solid rgba(0, 0, 0, 0.6)',
                                borderRadius: '2px',
                                marginTop: '20px',
                                fontSize: '1.4rem',
                                '&:hover': {
                                    color: 'rgba(0,  0, 0, 0.5)',
                                    border: '1px solid rgba(0, 0, 0, 0.5)'
                                }
                            }}
                            startIcon={<CameraAlt />}
                        >
                            Chọn ảnh
                            <input type="file" hidden />
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PersonalInfor