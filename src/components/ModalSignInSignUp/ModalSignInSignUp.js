import { FacebookOutlined, Google } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import authService from '../../services/authService'
import { onMessageListener, requestForToken } from '../../firebase'
import { useDispatch } from 'react-redux'
import { pushNotification } from '../../store/actions/pushNotification'

function ModalSignInSignUp({ open, onClose }) {


    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const [loginFailed, setLoginFailed] = useState("")
    const dispatch = useDispatch();
    const handleSignin = async () => {
        try {
            const ans = await authService.signIn(user);
            console.log(ans);
            if (ans.data.status != 200) {
                setLoginFailed(ans.data.message)
            } else {
                localStorage.setItem("quanvanUser", JSON.stringify(ans.data))
                localStorage.setItem("token", ans.data.data.jwtToken)
                
                onClose();
            }
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            setLoginFailed(error.response.data.message)
        }
    }

    return (
        <Modal
            open={open}
            onClose={() => onClose()}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '450px',
                bgcolor: 'background.paper',
                borderRadius: '4px',
                padding: '20px'
            }}>
                <Typography
                    sx={{
                        fontSize: '2.4rem',
                        fontWeight: 'bold',
                    }}
                >
                    Đăng nhập
                </Typography>

                <Divider sx={{
                    margin: '10px 0 20px'
                }} />
                <InputBase
                    id="outlined-basic"
                    // label="Outlined"
                    variant="outlined"
                    placeholder='Nhập tên đăng nhập'
                    inputProps={{ style: { fontSize: '1.5rem' } }}
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    sx={{
                        width: '100%',
                        fontSize: '1.6rem',
                        border: '1px solid rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '6px 12px',
                        borderRadius: '3px',
                        marginBottom: '24px',
                        '&:hover': {
                            outline: 'none',
                        }
                    }}
                />
                <InputBase
                    id="outlined-basic"
                    // label="Outlined"
                    variant="outlined"
                    placeholder='Nhập mật khẩu'
                    inputProps={{ style: { fontSize: '1.5rem' } }}
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    sx={{
                        width: '100%',
                        fontSize: '1.6rem',
                        border: '1px solid rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '6px 12px',
                        borderRadius: '3px',
                        '&:hover': {
                            outline: 'none',
                        }
                    }}
                />
                <Typography sx={{
                    color: '#E81123',
                    fontSize: '1.5rem',
                    margin: '10px 0 -10px'
                }}>
                    {loginFailed}
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        width: '100%',
                        borderRadius: '2px',
                        backgroundColor: '#E81123',
                        textTransform: 'none',
                        fontSize: '1.6rem',
                        marginTop: '24px',
                        '&:hover': {
                            backgroundColor: '#E81123',
                            opacity: '0.8'
                        }
                    }}
                    onClick={handleSignin}
                >
                    Đăng nhập
                </Button>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '20px 0'
                    }}>
                        <Divider sx={{
                            flex: '1'
                        }} />
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                color: 'rgba(0, 0, 0, 0.8)',
                                margin: '0 4px'
                            }}
                        >
                            Hoặc tiếp tục bằng
                        </Typography>
                        <Divider sx={{
                            flex: '1'
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',

                    }}>
                        <Button
                            variant='outlined'
                            startIcon={<FacebookOutlined />}
                            sx={{
                                width: '50%',
                                marginRight: '10px',
                                textTransform: 'none',
                                padding: '8px 0'
                            }}
                        >
                            Tài khoản Facebook
                        </Button>
                        <Button
                            variant='outlined'
                            startIcon={<Google />}
                            sx={{
                                width: '50%',
                                textTransform: 'none',
                                padding: '8px 0'
                            }}
                        >
                            Tài khoản Google
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalSignInSignUp