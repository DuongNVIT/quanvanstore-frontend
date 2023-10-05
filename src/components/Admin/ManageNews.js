import { AddCircleOutline, CameraAlt, DeleteForever, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import newsService from '../../services/newsService';
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';
import { useEffect } from 'react';

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
    padding: '16px'
};

function ManageNews() {

    const [open, setOpen] = useState(false);
    const [openAddNewsModal, setOpenAddNewsModal] = useState(false);
    const [newsList, setNewsList] = useState([]);
    const [newsToAdd, setNewsToAdd] = useState({
        title: "",
        description: "",
        content: ""
    });

    const dispatch = useDispatch();

    const ondescription = (value) => {
        setNewsToAdd({
            ...newsToAdd,
            content: value
        })
    }

    const handleGetNewsList = async () => {
        try {
            const res = await newsService.getAllForAdmin();
            setNewsList(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetNewsList();
    }, [])

    const handleAddNews = async () => {
        try {
            const res = await newsService.addNews(newsToAdd);
            console.log(res);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Thao tác thành công!"
            }))
            setOpenAddNewsModal(false)
            handleGetNewsList();
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteNews = async (newsId) => {
        try {
            const res = await newsService.deleteNews(newsId);
            console.log(res);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Xóa tin tức thành công"
            }))
            handleGetNewsList();
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setOpenAddNewsModal(prev => false);
        setNewsToAdd(prev => { })
        handleGetNewsList();
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleOpenUpdateModal = (news) => {
        setNewsToAdd(prev => news);
        setOpenAddNewsModal(prev => true)

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
                            Tin tức
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#5E35B1',
                                margin: '6px 0 0'
                            }}>
                            Trang quản lý tin tức
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
                        onClick={() => setOpenAddNewsModal(true)}
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
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Avatar</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Tiêu đề</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff' }}>Mô tả</TableCell>
                                <TableCell align='center' sx={{ fontSize: '1.5rem', color: '#fff', minWidth: '250px' }}>Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                newsList.map((news, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{index + 1}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Avatar />
                                            </TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{news.title}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>{news.description}</TableCell>
                                            <TableCell align='center' sx={{ fontSize: '1.4rem' }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                }}>
                                                    <Button
                                                        startIcon={<ModeEditOutline />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontSize: '1.2rem'
                                                        }}
                                                        onClick={() => handleOpenUpdateModal(news)}
                                                    >
                                                        Chỉnh sửa
                                                    </Button>
                                                    <Button
                                                        startIcon={<DeleteForever />}
                                                        variant='contained'
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontSize: '1.2rem',
                                                            backgroundColor: '#E81123',
                                                            color: '#fff',
                                                            marginLeft: '12px',
                                                            '&:hover': {
                                                                backgroundColor: '#E81123',
                                                                color: '#fff',
                                                                opacity: '0.8'
                                                            }
                                                        }}
                                                        onClick={() => handleDeleteNews(news.id)}
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

                {/* Add news modal */}
                <Modal
                    open={openAddNewsModal}
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
                            Thêm mới tin tức
                        </Typography>
                        <Divider />
                        <Box sx={{
                            marginBottom: '20px',
                            marginTop: '20px'
                        }}>
                            <Box sx={{
                            }}>
                                <Box component='label' sx={{
                                    width: '100%',
                                    fontSize: '1.5rem',
                                    color: '#545866'
                                }}>
                                    Tiêu đề tin tức
                                </Box>
                                <InputBase
                                    required
                                    id="outlined-basic"
                                    placeholder='Nhập tên sản phẩm'
                                    variant='outlined'
                                    onChange={(e) => setNewsToAdd({ ...newsToAdd, title: e.target.value })}
                                    sx={{
                                        marginTop: '12px',
                                        borderRadius: '2px',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        padding: '4px 8px',
                                        fontSize: '1.4rem',
                                        width: '100%'
                                    }}
                                    value={newsToAdd?.title}
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
                                    Mô tả ngắn
                                </Box>
                                <InputBase
                                    required
                                    id="outlined-basic"
                                    placeholder='Nhập mô tả ngắn'
                                    variant='outlined'
                                    onChange={(e) => setNewsToAdd({ ...newsToAdd, description: e.target.value })}
                                    sx={{
                                        borderRadius: '2px',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        padding: '4px 8px',
                                        fontSize: '1.4rem',
                                        width: '100%',
                                        marginTop: '12px'
                                    }}
                                    value={newsToAdd?.description}
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
                                    color: '#545866'
                                }}>
                                    Nội dung tin tức
                                </Box>
                                <Box sx={{ marginTop: '12px' }}>
                                    <EditorToolbar toolbarId={'t1'} />
                                    <ReactQuill
                                        theme="snow"
                                        value={newsToAdd?.content}
                                        onChange={ondescription}
                                        placeholder={"Write something awesome..."}
                                        modules={modules('t1')}
                                        formats={formats}
                                    />
                                </Box>
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
                                onClick={handleAddNews}
                            >

                                Lưu thông tin
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        </Box>
    )
}

export default ManageNews