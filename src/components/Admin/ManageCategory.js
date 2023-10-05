import { AddCircleOutline, CameraAlt, DeleteForeverOutlined, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import categoryService from '../../services/categoryService';
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

function ManageCategory() {

    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryToAdd, setCategoryToAdd] = useState({});
    const dispatch = useDispatch();


    const handleGetAllCategories = async () => {
        try {
            const ans = await categoryService.getAll();
            setCategories(ans.data.data);
            console.log(ans);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddCategory = async () => {
        try {
            const ans = await categoryService.createCategory(categoryToAdd);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Thao tác thành công!"
            }))
            handleClose();
        } catch (error) {
            console.log(error);
        }
    }

    const handleOpenUpdateCategory = (category) => {
        setCategoryToAdd(prev => category);
        setOpen(prev => true)
    } 



    useEffect(() => {
        handleGetAllCategories();
    }, [])

    const handleClose = () => {
        setOpen(prev => false);
        setCategoryToAdd(prev =>{})
        handleGetAllCategories();
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: '2rem',
                                fontWeight: '500',
                                letterSpacing: '.05rem',
                                color: '#131928',
                            }}>
                            Danh mục sản phẩm
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#5E35B1',
                                margin: '6px 0 0'
                            }}>
                            Trang quản lý danh mục
                        </Typography>
                    </Box>
                    <Button
                        startIcon={<AddCircleOutline />}
                        variant='contained'
                        sx={{
                            textTransform: 'none',
                            fontSize: '1.2rem',
                            height: '30px'
                        }}
                        onClick={() => setOpen(true)}
                    >
                        Thêm
                    </Button>
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
                                {/* <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Ảnh</TableCell> */}
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Tên danh mục</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            {/* <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar />
                                            </TableCell> */}
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{category.name}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box>
                                                    <Button
                                                        startIcon={<ModeEditOutline />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontSize: '1.2rem'
                                                        }}
                                                        onClick={() => handleOpenUpdateCategory(category)}
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
                            Danh mục
                        </Typography>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                            <Grid item md={12}>

                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Box component='label' sx={{
                                            width: '140px',
                                            textAlign: 'right',
                                            padding: '0 12px',
                                            fontSize: '1.5rem',
                                            color: '#545866'
                                        }}>
                                            Tên danh mục
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập danh mục'
                                            variant='outlined'
                                            onChange={(e) => setCategoryToAdd({ ...categoryToAdd, name: e.target.value })}
                                            sx={{
                                                flex: 1,
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem'
                                            }}
                                            value={categoryToAdd?.name}
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
                                            width: '140px',
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
                                            }}
                                            onClick={handleAddCategory}
                                        >
                                            Lưu
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </Box>
        </Box>
    )
}

export default ManageCategory