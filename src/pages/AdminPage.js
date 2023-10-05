import { Grid, InputBase, Box, IconButton, Table, TableHead, TableBody, TableContainer, Typography, TableRow, TableCell, Avatar, Switch, Button, Modal, Divider, Paper } from '@mui/material'
import React, { useState } from 'react'
import MySideBar from '../components/Admin/MySideBar'
import { ModeEditOutline, NotificationsOutlined, SettingsOutlined, CameraAlt, SearchOutlined, TuneOutlined } from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom';
import ManageUser from '../components/Admin/ManageUser';
import ManageProduct from '../components/Admin/ManageProduct';
import ManageNews from '../components/Admin/ManageNews';
import ManageCategory from '../components/Admin/ManageCategory';
import ManageOrder from '../components/Admin/ManageOrder';
import ManageBanner from '../components/Admin/ManageBanner';
import ManageImages from '../components/Admin/ManageImages';
import ManageGeneralInfor from '../components/Admin/ManageGeneralInfor';
import ManageStatistic from '../components/Admin/ManageStatistic';
// import SearchIcon from '@mui/icons-material/icons'

function AdminPage() {
    


    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            backgroundColor: '#fff'
        }}>
            <MySideBar />
            <Box sx={{
                marginLeft: 'calc(19% + 3px)',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    width: '100%',
                    height: '60px',
                    display: 'flex',
                    // justifyContent: 'flex-end',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '400px', marginLeft: '20px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchOutlined />
                        </IconButton>
                        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                        <InputBase
                            sx={{ flex: 1, fontSize: '1.3rem' }}
                            placeholder="Nhập để tìm kiếm..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <TuneOutlined sx={{
                            padding: '6px',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            marginRight: '4px'
                        }} />

                    </Box>
                    <Box>
                        <IconButton sx={{
                            // backgroundColor: '#5E35B1',
                            backgroundColor: '#ccc',
                            borderRadius: '10px',
                            marginRight: '20px',
                            '&:hover': {
                                backgroundColor: '#5E35B1',
                                color: '#fff'
                            }
                        }}>
                            <NotificationsOutlined sx={{
                                fontSize: '1.9rem'
                            }} />
                        </IconButton>
                        <IconButton sx={{
                            // backgroundColor: '#5E35B1',
                            backgroundColor: '#ccc',
                            borderRadius: '10px',
                            marginRight: '20px',
                            '&:hover': {
                                backgroundColor: '#5E35B1',
                                color: '#fff'
                            }
                        }}>
                            <SettingsOutlined sx={{
                                fontSize: '1.9rem'
                            }} />
                        </IconButton>
                    </Box>
                </Box>


                {/* Quản lý người dùng */}

                <Routes>
                    <Route path="statistic" element={<ManageStatistic/>}/>
                    <Route path="user" element={<ManageUser/>}/>
                    <Route path="product" element={<ManageProduct/>}/>
                    <Route path="news" element={<ManageNews/>}/>
                    <Route path="order" element={<ManageOrder/>}/>
                    <Route path="category" element={<ManageCategory/>}/>
                    <Route path="banner" element={<ManageBanner/>}/>
                    <Route path="images" element={<ManageImages/>}/>
                    <Route path="general-infor" element={<ManageGeneralInfor/>}/>
                </Routes>

            </Box>
        </Box>
    )
}



export default AdminPage