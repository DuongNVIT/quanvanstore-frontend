import { AddCircleOutline, CameraAlt, DeleteForeverOutlined, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import userService from '../../services/userService';
import { useEffect } from 'react';
import bannerService from '../../services/bannerService';
import uploadService from '../../services/uploadService';
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';

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

function ManageStatistic() {


    return (
        <Box sx={{
            backgroundColor: '#EEF2F6',
            height: '100%',
            // borderRadius: '16px',
            padding: '16px',
            width: '100%',
        }}>
            <Box sx={{
                padding: '12px 16px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography sx={{
                                fontSize: '2.0rem'
                            }}>Tổng sản phẩm</Typography>
                            <Typography sx={{
                                fontSize: '2.6rem',
                                fontWeight: 'bold',
                            }}>12</Typography>

                        </Box>s
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{
                                fontSize: '2.0rem'
                            }}>Số đơn hàng</Typography>
                            <Typography sx={{
                                fontSize: '2.6rem',
                                fontWeight: 'bold',
                            }}>3</Typography>

                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{
                                fontSize: '2.0rem'
                            }}>Người dùng mới</Typography>
                            <Typography sx={{
                                fontSize: '2.6rem',
                                fontWeight: 'bold',
                            }}>2</Typography>

                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography sx={{
                                fontSize: '2.0rem'
                            }}>Doanh thu</Typography>
                            <Typography sx={{
                                fontSize: '2.6rem',
                                fontWeight: 'bold',
                            }}>120000</Typography>

                        </Box>
                    </Grid>
                </Grid>


            </Box>
        </Box>
    )
}

export default ManageStatistic