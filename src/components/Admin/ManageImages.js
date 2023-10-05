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
import imagesService from '../../services/imagesService';

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

function ManageImages() {

    const [open, setOpen] = useState(false);
    const [bannerImages, setBannerImages] = useState([]);
    const [imageToAdd, setImageToAdd] = useState({});

    const dispatch = useDispatch();

    const handleAddImage = async () => {
        try {
            const res = await imagesService.uploadImage(imageToAdd);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Tải ảnh lên thư viện thành công!"
            }))
            handleGetImagesList();
            handleClose();
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpload = async (event) => {
        try {
            const res = await uploadService.uploadImage(event.target.files[0]);
            setImageToAdd({
                ...imageToAdd,
                url: res.secure_url
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setImageToAdd({})
        setOpen(false);
    }

    const handleDelete = async (imageId) => {
        try {
            const res = await imagesService.deleteImage(imageId);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Xóa ảnh thành công!"
            }))
            handleGetImagesList();
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeBanner = async (imageId) => {
        try {
            console.log("change banner")
            const res = await imagesService.updateImage(imageId);
            console.log(res)
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Cập nhật ảnh thành công!"
            }))
            handleGetImagesList();
        } catch (error) {
            console.log(error);
        }
    }

    const handleGetImagesList = async () => {
        try {
            const ans = await imagesService.getAllForAdmin();
            setBannerImages(ans.data.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => { handleGetImagesList() }, [])


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
                            Thư viện ảnh
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#5E35B1',
                                margin: '6px 0 0'
                            }}>
                            Trang quản trị thư viện ảnh
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
                            backgroundColor: '#1976d2',
                            color: '#fff'
                        }}>
                            <TableRow>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>STT</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Avatar</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Trạng thái</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                bannerImages.map((bannerImage, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        align: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Avatar src={bannerImage.url} />
                                                </Box>
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    // backgroundColor: 'green'
                                                }}>
                                                    <Switch checked={bannerImage.selected} onChange={() => handleChangeBanner(bannerImage.id)} />
                                                </Box>
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box>
                                                    <Button
                                                        startIcon={<DeleteForeverOutlined />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontSize: '1.2rem',
                                                            backgroundColor: '#ED1C29',
                                                            color: '#fff',
                                                            '&:hover': {
                                                                opacity: '0.8',
                                                                backgroundColor: '#ED1C29',
                                                                color: '#fff',
                                                            }
                                                        }}
                                                        onClick={() => handleDelete(bannerImage.id)}
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
                            Thêm ảnh vào thư viện
                        </Typography>
                        <Divider />
                        <Grid container spacing={2} sx={{ marginTop: '20px' }}>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                padding: '16px'
                            }}>
                                <Avatar sx={{ width: '100%', height: 'auto', borderRadius: "4px" }}
                                    src={imageToAdd?.url}
                                />
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '16px'
                                }}>
                                    <Button
                                        component='label'
                                        variant="outlined"
                                        sx={{
                                            textTransform: 'none',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            border: '1px solid rgba(0, 0, 0, 0.6)',
                                            borderRadius: '2px',
                                            fontSize: '1.4rem',
                                            '&:hover': {
                                                color: 'rgba(0,  0, 0, 0.5)',
                                                border: '1px solid rgba(0, 0, 0, 0.5)'
                                            }
                                        }}
                                        startIcon={<CameraAlt />}
                                    >
                                        Chọn ảnh
                                        <input type="file" hidden onChange={handleUpload} />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            textTransform: 'none',
                                            color: '#fff',
                                            borderRadius: '2px',
                                            fontSize: '1.4rem',
                                            marginLeft: '16px',
                                            '&:hover': {
                                                color: '#fff',
                                            }
                                        }}
                                        onClick={handleAddImage}
                                    >
                                        Upload
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>
                    </Box>
                </Modal>
            </Box>
        </Box>
    )
}

export default ManageImages