import { AddCircleOutline, CameraAlt, ModeEditOutline } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Grid, InputBase, Modal, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import userService from '../../services/userService';
import { useEffect } from 'react';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import ReactQuill from 'react-quill';
import generalInforService from '../../services/generalInforService';
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

function ManageGeneralInfor() {

    const [generalInfor, setGeneralInfor] = useState({});

    const dispatch = useDispatch();

    const handleGetGeneralInfor = async () => {
        try {
            const res = await generalInforService.getInfor();
            setGeneralInfor(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            const res = await generalInforService.updateInfor(generalInfor);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Cập nhật thông tin!"
            }))
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpload = async () => {
        try {
            const res = await generalInforService.uploadInfor(generalInfor);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Tải thông tin!"
            }))
        } catch (error) {
            console.log(error);
        }
    }



    const ondescription = (value) => {
        setGeneralInfor({
            ...generalInfor,
            content: value
        });
    }

    useEffect(() => {
        handleGetGeneralInfor();
    }, [])



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
                            Thông tin
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#5E35B1',
                                margin: '6px 0 0'
                            }}>
                            Trang quản trị thông tin chung
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ margin: '16px 0' }} />

                <Box sx={{ marginTop: '12px' }}>
                    <EditorToolbar toolbarId={'t1'} />
                    <ReactQuill
                        theme="snow"
                        value={generalInfor?.content}
                        onChange={ondescription}
                        placeholder={"Nhập thông tin giới thiệu cửa hàng"}
                        modules={modules('t1')}
                        formats={formats}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button 
                        variant='contained'
                        sx={{
                            margin: '12px 0',
                            textTransform: 'none',
                            fontSize: '1.4rem'
                        }}
                        onClick={handleUpdate}
                    >
                        Lưu lại
                    </Button>
                </Box>



            </Box>
        </Box>
    )
}

export default ManageGeneralInfor