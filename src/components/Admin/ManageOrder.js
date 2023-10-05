import { CameraAlt, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, FormControl, Grid, InputBase, InputLabel, MenuItem, Modal, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import billService from './../../services/billService'
import { useEffect } from 'react';
import { updateAlertModal } from '../../store/actions/alert';
import { useDispatch } from 'react-redux';


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
    const dispatch = useDispatch();

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

    const handleChangeStatus = async (orderItem, event) => {
        try {
            const res = await billService.updateStatus(orderItem, event.target.value);
            console.log(res);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Cập nhật trạng thái đơn hàng thành công!"
            }))
            handleGetOrderList();
            
        } catch (error) {
            console.log(error);
        }
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
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff', minWidth: '200px' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orderList.map((orderItem, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar src={orderItem.product.thumail} />
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.name}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.newPrice}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.quantity}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.product.newPrice * orderItem.quantity}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{orderItem.user.fullname}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <FormControl fullWidth>
                                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                                    <Select
                                                        // labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={orderItem.status}
                                                        // label="Age"
                                                        onChange={(event) => handleChangeStatus(orderItem, event)}
                                                        sx={{
                                                            fontSize: '1.4rem'
                                                        }}
                                                    >
                                                        <MenuItem value={1}>Chờ xác nhận</MenuItem>
                                                        <MenuItem value={2}>Đang giao</MenuItem>
                                                        <MenuItem value={3}>Hoàn thành</MenuItem>
                                                    </Select>
                                                </FormControl>

                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default ManageUser