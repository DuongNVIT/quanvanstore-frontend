import { Box, Button, Divider, Grid, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import authService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';

function ChangePassword() {

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [verifyPass, setVerifyPass] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleChangePass = async () => {
        try {
            const res = await authService.changePass(oldPass, newPass, verifyPass);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Cập nhật mật khẩu thành công!"
            }))
            setError(false);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }


    return (
        <Box sx={{
            padding: '16px',
            backgroundColor: '#fff'
        }}>
            <Typography sx={{
                fontSize: '2.0rem',
                fontWeight: '500',
                marginBottom: '4px'
            }}>
                Đổi mật khẩu
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
                                width: '190px',
                                textAlign: 'right',
                                padding: '0 12px',
                                fontSize: '1.5rem',
                                color: '#545866'
                            }}>
                                Mật khẩu cũ
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Nhập mật khẩu cũ'
                                variant='outlined'
                                sx={{
                                    flex: 1,
                                    borderRadius: '2px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '4px 8px',
                                    fontSize: '1.4rem'
                                }}
                                type="password"
                                value={oldPass}
                                onChange={(e) => setOldPass(e.target.value)}
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
                                width: '190px',
                                textAlign: 'right',
                                padding: '0 12px',
                                fontSize: '1.5rem',
                                color: '#545866'
                            }}>
                                Mật khẩu mới
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Nhập mật khẩu mới'
                                type="password"
                                variant='outlined'
                                sx={{
                                    flex: 1,
                                    borderRadius: '2px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '4px 8px',
                                    fontSize: '1.4rem'
                                }}
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
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
                                width: '190px',
                                textAlign: 'right',
                                padding: '0 12px',
                                fontSize: '1.5rem',
                                color: '#545866'
                            }}>
                                Xác nhận mật khẩu
                            </Box>
                            <InputBase
                                required
                                id="outlined-basic"
                                placeholder='Nhập lại mật khẩu mới'
                                type="password"
                                variant='outlined'
                                sx={{
                                    flex: 1,
                                    borderRadius: '2px',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '4px 8px',
                                    fontSize: '1.4rem'
                                }}
                                value={verifyPass}
                                onChange={(e) => setVerifyPass(e.target.value)}
                            />
                        </Box>
                    </Box>

                    {
                        error &&
                        <Box sx={{
                            marginBottom: '20px'
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Box component='label' sx={{
                                    width: '190px',
                                    textAlign: 'right',
                                    padding: '0 12px',
                                    fontSize: '1.5rem',
                                    color: '#545866'
                                }}>

                                </Box>
                                <Typography
                                    sx={{
                                        borderRadius: '2px',
                                        color: 'red',
                                        flex: '1',
                                        fontSize: '1.4rem'
                                    }}
                                    onClick={handleChangePass}
                                >
                                    Mật khẩu cũ hoặc xác nhận mật khẩu không trùng khớp
                                </Typography>
                            </Box>
                        </Box>
                    }

                    <Box sx={{
                        marginBottom: '20px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Box component='label' sx={{
                                width: '190px',
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
                                onClick={handleChangePass}
                            >
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

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChangePassword