import { AddCircleOutline, CameraAlt, DeleteForeverOutlined, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, MenuItem, Modal, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import productService from '../../services/productService';
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

function ManageUser() {

    const [open, setOpen] = useState(false);
    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productToAdd, setProductToAdd] = useState({
        name: '',
        oldPrice: '',
        newPrice: '',
        categoryId: ''
    });

    const dispatch = useDispatch();

    const handleGetCategories = async () => {
        try {
            const ans = await categoryService.getAll();
            console.log(ans);
            setCategories(ans.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetCategories()
    }, [])

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleGetProductList = async () => {
        try {
            const ans = await productService.searchProducts();
            console.log(ans);
            setProductList(ans.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetProductList();
    }, []);

    const handleAddProduct = async () => {
        try {
            const ans = await productService.addProduct(productToAdd);
            console.log(ans);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Thêm sản phẩm thành công!"
            }))
            setOpenAddProductModal(false)
            handleGetProductList();
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteProduct = async (productId) => {
        try {
            const ans = await productService.deleteProduct(productId);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Xóa sản phẩm thành công!"
            }))
            const newProductList = productList.filter(item => item.id != productId);
            setProductList(newProductList);
            console.log(ans);
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
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
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
                            Sản phẩm
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#5E35B1',
                                margin: '6px 0 0'
                            }}>
                            Trang quản lý sản phẩm
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
                        onClick={() => setOpenAddProductModal(true)}
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
                            backgroundColor: '#1976d2',
                            color: '#fff'
                        }}>
                            <TableRow>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>STT</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Ảnh </TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Tên sản phẩm </TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Giá cũ</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Giá mới</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                productList.map((productItem, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar src={productItem.thumbnail} />
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{productItem.name}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{productItem.oldPrice}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{productItem.newPrice}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem', minWidth: '200px' }}>
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
                                                        Sửa
                                                    </Button>
                                                    <Button
                                                        startIcon={<DeleteForeverOutlined />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            backgroundColor: '#E81123',
                                                            fontSize: '1.2rem',
                                                            marginLeft: '8px',
                                                            '&:hover': {
                                                                backgroundColor: '#E81123',
                                                                opacity: '0.8'
                                                            }
                                                        }}
                                                        onClick={() => handleDeleteProduct(productItem.id)}
                                                    >
                                                        Xóa
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
                <Modal
                    open={openAddProductModal}
                    onClose={() => setOpenAddProductModal(false)}
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
                            Thêm mới sản phẩm
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
                                            Tên sản phẩm
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập tên sản phẩm'
                                            variant='outlined'
                                            onChange={(e) => setProductToAdd({ ...productToAdd, name: e.target.value })}
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
                                            Giá mới
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập giá mới'
                                            variant='outlined'
                                            onChange={(e) => setProductToAdd({ ...productToAdd, newPrice: e.target.value })}
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
                                            Giá cũ
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập giá cũ'
                                            variant='outlined'
                                            onChange={(e) => setProductToAdd({ ...productToAdd, oldPrice: e.target.value })}
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
                                            Danh mục
                                        </Box>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Danh mục"
                                            onChange={(e) => setProductToAdd({ ...productToAdd, categoryId: e.target.value })}

                                            sx={{
                                                flex: 1,
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                // padding: '4px 8px',
                                                fontSize: '1.4rem'
                                            }}
                                        >

                                            {
                                                categories.map((categoryItem, index) => {
                                                    return (
                                                        <MenuItem value={categoryItem.id}>{categoryItem.name}</MenuItem>
                                                    )
                                                })
                                            }

                                        </Select>
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
                                                fontSize: '1.3rem',
                                                textTransform: 'none'
                                            }}
                                            onClick={handleAddProduct}
                                        >

                                            Thêm sản phẩm
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