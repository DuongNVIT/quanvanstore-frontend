import { FacebookOutlined, Google } from '@mui/icons-material'
import { Box, Button, Divider, InputBase, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import authService from '../../services/authService'
import { onMessageListener, requestForToken } from '../../firebase'
import { useDispatch } from 'react-redux'
import { pushNotification } from '../../store/actions/pushNotification'
import { updateAlertModal } from '../../store/actions/alert'
import { useNavigate } from 'react-router-dom'

function SignUp({ open, onClose }) {

    const [isLogin, setIsLogin] = useState(true);

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [signupUser, setSignupUser] = useState({});

    const [loginFailed, setLoginFailed] = useState("")
    const [signupFailed, setSignupFailed] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignin = async () => {
        try {
            const ans = await authService.signIn(user);
            console.log(ans);
            if (ans.data.status != 200) {
                setLoginFailed(ans.data.message)
            } else {
                localStorage.setItem("quanvanUser", JSON.stringify(ans.data))
                localStorage.setItem("token", ans.data.data.jwtToken)
                if (ans.data.data.role == 'admin') {
                    navigate("/admin")
                }
                onClose();
            }
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            setLoginFailed(error.response.data.message)
        }
    }


    const handleSignUp = async () => {
        try {
            const res = await authService.signup(signupUser);
            dispatch(updateAlertModal({
                isOpen: true,
                message: 'Đăng ký tài khoản thành công!'
            }))
            signupUser(prev => {})
            onClose();
        } catch (error) {
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
                    Đăng ký
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
                    value={signupUser?.username}
                    onChange={(e) => setSignupUser({ ...signupUser, username: e.target.value })}
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
                    value={signupUser?.password}
                    onChange={(e) => setSignupUser({ ...signupUser, password: e.target.value })}
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
                <InputBase
                    id="outlined-basic"
                    // label="Outlined"
                    variant="outlined"
                    placeholder='Nhập họ và tên'
                    inputProps={{ style: { fontSize: '1.5rem' } }}
                    type="text"
                    value={signupUser?.fullname}
                    onChange={(e) => setSignupUser({ ...signupUser, fullname: e.target.value })}
                    sx={{
                        marginTop: '20px',
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
                <InputBase
                    id="outlined-basic"
                    // label="Outlined"
                    variant="outlined"
                    placeholder='Nhập email'
                    inputProps={{ style: { fontSize: '1.5rem' } }}
                    type="text"
                    value={signupUser.email}
                    onChange={(e) => setSignupUser({ ...signupUser, email: e.target.value })}
                    sx={{
                        marginTop: '20px',
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
                    {signupFailed}
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
                    onClick={handleSignUp}
                >
                    Đăng ký
                </Button>
            </Box>
        </Modal>
    )
}

export default SignUp