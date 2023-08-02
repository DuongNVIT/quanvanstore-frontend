import { CameraAlt, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import userService from '../../services/userService';
import { useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    padding: '16px'
};

function ManageUser() {

    const [open, setOpen] = useState(false);
    const [userList, setUserList] = useState([]);

    const handleClose = () => {
        setOpen(false);
    }

    const handleGetUserList = async () => {
        try {
            const ans = await userService.getAll();
            setUserList(ans.data.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => { handleGetUserList() }, [])


    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <Box sx={{
            backgroundColor: '#EEF2F6',
            height: '100%',
            // borderRadius: '16px',
            padding: '16px'
        }}>
            <Box sx={{
                backgroundColor: '#fff',
                padding: '12px 16px',
                borderRadius: '10px'
            }}>
                <Box sx={{
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '2rem',
                            fontWeight: '500',
                            letterSpacing: '.05rem',
                            color: '#131928',
                        }}>
                        Người dùng
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.2rem',
                            color: '#5E35B1',
                            margin: '6px 0 0'
                        }}>
                        Trang quản trị người dùng
                    </Typography>
                </Box>

                <Divider sx={{ margin: '16px 0' }} />


                <TableContainer sx={{
                    backgroundColor: "#fff",
                    borderRadius: '10px',
                    border: '1px solid #ccc'
                }}>
                    <Table>
                        <TableHead sx={{
                            backgroundColor: '#1976d2',
                            color: '#fff'
                        }}>
                            <TableRow>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>STT</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Avatar</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Họ và tên</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Số điện thoại</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Email</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Trạng thái</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                userList.map((userItem, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar />
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{userItem.fullname}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{userItem.phone}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{userItem.email}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    // backgroundColor: 'green'
                                                }}>
                                                    <Typography
                                                        componen='span'
                                                        sx={{
                                                            fontSize: '1.4rem'
                                                        }}>
                                                        Active
                                                    </Typography>
                                                    <Switch />
                                                </Box>
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box>
                                                    <Button
                                                        startIcon={<ModeEditOutline />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontSize: '1.2rem'
                                                        }}
                                                        onClick={handleOpen}
                                                    >
                                                        Chỉnh sửa
                                                    </Button>
                                                </Box>

                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: '1.8rem',
                                fontWeight: '500',
                                marginBottom: '12px'
                            }}
                        >
                            Chỉnh sửa thông tin người dùng
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
                                            width: '110px',
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
                                            width: '110px',
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
                                            width: '110px',
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
                                            width: '110px',
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
                </Modal>
            </Box>
        </Box>
    )
}

export default ManageUser