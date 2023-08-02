import { CameraAlt, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import billService from './../../services/billService'
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
    const [orderList, setOrderList] = useState([]);

    const handleGetOrderList = async () => {
        try {
            const ans = await billService.getAllForAdmin();
            console.log(ans);
            setOrderList(ans.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetOrderList()
    }, [])

    const handleClose = () => {
        setOpen(false);
    }

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
                        Hóa đơn
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: '1.2rem',
                            color: '#5E35B1',
                            margin: '6px 0 0'
                        }}>
                        Trang quản lý hóa đơn
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
                            backgroundColor: '#5E35B1',
                            color: '#fff'
                        }}>
                            <TableRow>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>STT</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Ảnh</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Tên sản phẩm</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Giá</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Số lượng</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Thành tiền</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Người đặt</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff', minWidth: '150px' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orderList.map((orderItem, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar src={orderItem.product.thumail}/>
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.name}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.newPrice}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.quantity}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.newPrice * orderItem.quantity}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.user.fullname}</TableCell>
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