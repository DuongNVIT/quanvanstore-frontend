import { AddCircleOutline, CameraAlt, DeleteForeverOutlined, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, MenuItem, Modal, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import productService from '../../services/productService';
import categoryService from '../../services/categoryService';
import uploadService from '../../services/uploadService';
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';
import Add from './Add';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import ReactQuill from 'react-quill';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '80vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    padding: '16px',

};

function ManageProduct() {

    const [open, setOpen] = useState(false);
    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [first, setFirst] = useState(true);
    const [productToAdd, setProductToAdd] = useState({
        name: '',
        oldPrice: '',
        newPrice: '',
        categoryId: '',
        description: '',
        thumbnail: ''
    });



    const [productToUpdate, setProductToUpdate] = useState({});

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

    useEffect(() => {
        setFirst(false)
    }, [])

    const handleOpenUpdate = (productItem) => {
        setProductToUpdate({...productItem})
        
    }

    useEffect(() => {
        console.log("Thay đổi product to add")
        if(first == false) {
            setOpenUpdateModal(true)
        }
    }, [productToUpdate])

    const ondescription = (value) => {
        console.log(value);
        setProductToAdd({
            ...productToAdd,
            description: value
        });
    }

    const ondescription2 = (value) => {
        console.log(value);
        setProductToUpdate({
            ...productToUpdate,
            description: value
        });
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
                message: "Thao tác thành công!"
            }))
            setOpenAddProductModal(false);
            handleGetProductList();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateProduct = async () => {
        try {
            const ans = await productService.addProduct(productToUpdate);
            console.log(ans);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Thao tác thành công!"
            }))
            setOpenUpdateModal(false);
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

    const handleUploadImage = async (event) => {
        try {
            const file = event.target.files[0];
            const res = await uploadService.uploadImage(file);
            console.log(res);
            setProductToAdd({
                ...productToAdd,
                thumbnail: res.secure_url
            })
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Upload ảnh thành công!"
            }))
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
                                                        onClick={() => handleOpenUpdate(productItem)}
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
                {/* {openAddProductModal && <Add/>} */}
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
                        <Grid container spacing={2} sx={{ marginTop: '12px' }}>
                            <Grid item md={9}>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
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
                                                marginTop: '12px',
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Mô tả sản phẩm
                                        </Box>
                                        <Box sx={{marginTop: '12px'}}>
                                            <EditorToolbar toolbarId={'t1'} />
                                            <ReactQuill
                                                theme="snow"
                                                value={productToAdd.description}
                                                onChange={ondescription}
                                                placeholder={"Nhập mô tả sản phẩm..."}
                                                modules={modules('t1')}
                                                formats={formats}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box >
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
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
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
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
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                        display: 'block',
                                        alignItems: 'center'
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Danh mục
                                        </Box>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="Danh mục"
                                            onChange={(e) => setProductToAdd({ ...productToAdd, categoryId: e.target.value })}

                                            sx={{
                                                borderRadius: '2px',
                                                // border: '1px solid rgba(0, 0, 0, 0.3)',
                                                // padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
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

                                    <Button
                                        variant='contained'
                                        sx={{
                                            borderRadius: '2px',
                                            color: '#fff',
                                            flex: '1',
                                            fontSize: '1.3rem',
                                            textTransform: 'none',
                                            width: '100%'
                                        }}
                                        onClick={handleAddProduct}
                                    >

                                        Thêm sản phẩm
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Avatar
                                        sx={{ width: '120px', height: '120px' }}
                                        src={productToAdd?.thumbnail}
                                    />
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
                                        <input type="file" hidden onChange={handleUploadImage} />
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>

                <Modal
                    open={openUpdateModal}
                    onClose={() => setOpenUpdateModal(false)}
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
                            Cập nhật sản phẩm
                        </Typography>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '12px' }}>
                            <Grid item md={9}>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
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
                                            onChange={(e) => setProductToUpdate({ ...productToUpdate, name: e.target.value })}
                                            sx={{
                                                marginTop: '12px',
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%'
                                            }}
                                            value={productToUpdate.name}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Mô tả sản phẩm
                                        </Box>
                                        <Box sx={{marginTop: '12px'}}>
                                            <EditorToolbar toolbarId={'t2'} />
                                            <ReactQuill
                                                theme="snow"
                                                value={productToUpdate.description}
                                                onChange={ondescription2}
                                                placeholder={"Nhập mô tả sản phẩm..."}
                                                modules={modules('t2')}
                                                formats={formats}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box >
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Giá mới
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập giá mới'
                                            variant='outlined'
                                            onChange={(e) => setProductToUpdate({ ...productToUpdate, newPrice: e.target.value })}
                                            sx={{
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
                                            }}
                                            value={productToUpdate?.newPrice}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Giá cũ
                                        </Box>
                                        <InputBase
                                            required
                                            id="outlined-basic"
                                            placeholder='Nhập giá cũ'
                                            variant='outlined'
                                            onChange={(e) => setProductToUpdate({ ...productToUpdate, oldPrice: e.target.value })}
                                            sx={{
                                                borderRadius: '2px',
                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
                                            }}
                                            value={productToUpdate.oldPrice}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{
                                    marginBottom: '20px'
                                }}>
                                    <Box sx={{
                                        display: 'block',
                                        alignItems: 'center'
                                    }}>
                                        <Box component='label' sx={{
                                            width: '100%',
                                            fontSize: '1.5rem',
                                            color: '#545866',
                                            marginBottom: '12px'
                                        }}>
                                            Danh mục
                                        </Box>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            // value={age}
                                            label="Danh mục"
                                            onChange={(e) => setProductToUpdate({ ...productToUpdate, categoryId: e.target.value })}
                                            value={productToUpdate.categoryId}
                                            sx={{
                                                borderRadius: '2px',
                                                // border: '1px solid rgba(0, 0, 0, 0.3)',
                                                // padding: '4px 8px',
                                                fontSize: '1.4rem',
                                                width: '100%',
                                                marginTop: '12px'
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

                                    <Button
                                        variant='contained'
                                        sx={{
                                            borderRadius: '2px',
                                            color: '#fff',
                                            flex: '1',
                                            fontSize: '1.3rem',
                                            textTransform: 'none',
                                            width: '100%'
                                        }}
                                        onClick={handleUpdateProduct}
                                    >

                                        Cập nhật sản phẩm
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item md={3}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Avatar
                                        sx={{ width: '120px', height: '120px' }}
                                        src={productToUpdate?.thumbnail}
                                    />
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
                                        <input type="file" hidden onChange={handleUploadImage} />
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

export default ManageProduct