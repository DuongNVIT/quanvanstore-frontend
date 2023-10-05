import { Feed, HelpOutline, LocalMall, Notifications, PhoneInTalk, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Badge, Box, Button, Container, Divider, IconButton, InputBase, List, ListItem, ListItemButton, Menu, MenuItem, Modal, Paper, Popover, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom';
import ModalSignInSignUp from '../ModalSignInSignUp/ModalSignInSignUp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductFilter } from '../../store/actions/productFilter';
import { useEffect } from 'react';
import SignUp from '../SignUp/SignUp';

function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pushNoti = useSelector(state => state.pushNotification)

    const [showModalSigninSignup, setShowModalSigninSignup] = useState(false);
    const [showModalSignUp, setShowModalSignup] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [productSearchName, setProductSearchName] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [showNoti, setShowNoti] = useState(false);
    const [anchorNotiEl, setAnchorNotiEl] = useState(null);

    useEffect(() => {
        console.log(pushNoti)
    }, [])

    const handleOpenNoti = (e) => {
        setShowNoti(true);
        setAnchorNotiEl(e.currentTarget);
    }

    const handleCloseNoti = (e) => {
        setShowNoti(false);
        setAnchorNotiEl(null);
    }

    const handleOpenMenuUser = (e) => {
        setShowUserMenu(true);
        setAnchorEl(e.currentTarget)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const search = {
            name: productSearchName,
            categoryId: "",
            startPrice: "",
            endPrice: "",
            page: "",
            size: ""
        }
        dispatch(updateProductFilter(search));
        navigate(`/list`);
    }

    return (
        <Box sx={{ position: 'sticky' }}>
            <AppBar
                sx={{
                    position: "sticky",
                    background: 'linear-gradient(to right, #1A4DB5, #0292CB)'
                }}>
                <Container>
                    <Stack>
                        <Box
                            sx={{
                                borderBottom: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 1
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: 2
                                    }}
                                >
                                    <PhoneInTalk sx={{
                                        fontSize: '2.0rem'
                                    }} />
                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginLeft: 1,
                                            fontSize: '1.3rem'
                                        }}
                                    >
                                        Hotline: 0973718908
                                    </Typography>
                                </Box>
                                <Link to="general-infor">
                                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                        <LocalMall sx={{
                                            fontSize: '2.0rem'
                                        }} />
                                        <Typography sx={{
                                            marginLeft: 1,
                                            fontSize: '1.3rem'
                                        }}>
                                            Thông tin cửa hàng
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 2, cursor: 'pointer' }} onClick={handleOpenNoti}>
                                    <Badge
                                        badgeContent={pushNoti?.list?.length}
                                        sx={{
                                            borderRadius: '50%',
                                            "& .MuiBadge-badge": {
                                                width: '15px',
                                                minWidth: 'unset',
                                                height: '12px',
                                                color: "#fff",
                                                backgroundColor: "red",
                                                fontSize: '1rem',
                                                padding: '0 2px',
                                                right: '4px',
                                                top: '2px'
                                            }
                                        }}
                                        color="secondary">
                                        <Notifications sx={{
                                            fontSize: '2.0rem'
                                        }} />
                                    </Badge>
                                    <Typography sx={{
                                        marginLeft: 1,
                                        fontSize: '1.3rem',
                                    }}>
                                        Thông báo
                                    </Typography>
                                </Box>
                                <Popover
                                    // id="simple-popover"
                                    open={showNoti}
                                    anchorEl={anchorNotiEl}
                                    onClose={handleCloseNoti}
                                    anchorPosition={{
                                        left: -1000,
                                        top: 0
                                    }}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    sx={{
                                        borderRadius: '20px'
                                    }}
                                >
                                    <Typography sx={{
                                        fontSize: '1.6rem',
                                        color: 'rgba(0, 0, 0, 0.8)',
                                        fontWeight: '500',
                                        padding: '8px 8px'
                                    }}>
                                        Thông báo mới nhận
                                    </Typography>
                                    <Divider />
                                    <List sx={{ padding: '0', backgroundColor: '#E7F5FA' }}>
                                        {
                                            pushNoti.list.map((item, index) => {
                                                return (
                                                    <ListItem key={index} sx={{ padding: '0' }}>
                                                        <ListItemButton sx={{ padding: '8px 16px 10px 12px' }}>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                // alignItems: 'center',
                                                            }}>
                                                                <Box
                                                                    component="img"
                                                                    src="data:image/jpeg;base64,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"
                                                                    sx={{
                                                                        width: '44px',
                                                                        height: '44px',
                                                                        border: '1px solid rgba(0, 0, 0, 0.4)',
                                                                        borderRadius: '1px',
                                                                        marginRight: '6px'
                                                                    }}
                                                                />
                                                                <Box>
                                                                    <Typography sx={{
                                                                        fontSize: '1.4rem',
                                                                        color: 'rgba(0, 0, 0, 0.9)'
                                                                    }}>
                                                                        {item.title}
                                                                    </Typography>
                                                                    <Typography sx={{
                                                                        fontSize: '1.2rem',
                                                                        color: 'rgba(0, 0, 0, 0.7)',
                                                                        width: '300px',
                                                                        lineHeight: '1.6rem'
                                                                    }}>
                                                                        {item.body}
                                                                    </Typography>

                                                                </Box>
                                                            </Box>
                                                        </ListItemButton>
                                                        <Divider />
                                                    </ListItem>
                                                )

                                            })
                                        }
                                    </List>
                                </Popover>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 2 }}>
                                    <HelpOutline sx={{
                                        fontSize: '2.0rem'
                                    }} />
                                    <Typography sx={{
                                        marginLeft: 1,
                                        fontSize: '1.3rem'
                                    }}>
                                        Câu hỏi thường gặp
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Feed sx={{
                                        fontSize: '2.0rem'
                                    }} />
                                    <Link to="/#newsSection">
                                        <Typography sx={{
                                            marginLeft: 1,
                                            fontSize: '1.3rem'
                                        }}>
                                            <a href="#newsSection">Tin tức</a>
                                            {/* Tin tức */}
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>

                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                paddingTop: 2,
                                paddingBottom: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Link to="/">
                                <Logo />
                            </Link>

                            <Paper
                                // component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1, fontSize: '1.3rem' }}
                                    placeholder="Nhập để tìm kiếm sản phẩm"
                                    onChange={e => setProductSearchName(e.target.value)}
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>

                            <Link to="/cart">
                                <Badge
                                    // badgeContent="0"
                                    sx={{
                                        backgroundColor: '#fff',
                                        padding: '6px',
                                        borderRadius: '50%',
                                        boxShadow: '0px 0px 2px 4px rgba(0, 0, 0, 0.05)',
                                        "& .MuiBadge-badge": {
                                            color: "#fff",
                                            backgroundColor: "red",
                                            fontSize: '1.1rem'
                                        }
                                    }}
                                    color="secondary">
                                    <ShoppingCartOutlined sx={{ fontSize: '1.8rem', color: '#111' }} />
                                </Badge>
                            </Link>

                            {
                                !localStorage.getItem("quanvanUser")
                                    ? <Box>
                                        <Button
                                            // startIcon={<AccountCircleIcon />}
                                            variant='outlined'
                                            sx={{
                                                color: 'white', borderColor: 'white', fontSize: '1.3rem',
                                                textTransform: 'none'
                                            }}
                                            onClick={() => setShowModalSignup(true)}
                                        >
                                            Đăng ký
                                        </Button>
                                        <Button
                                            // startIcon={<AccountCircleIcon />}
                                            variant='outlined'
                                            sx={{
                                                color: 'white',
                                                fontSize: '1.3rem',
                                                textTransform: 'none',
                                                marginLeft: '8px',
                                                backgroundColor: '#1A4FB6'
                                            }}
                                            onClick={() => setShowModalSigninSignup(true)}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                    :
                                    <Button
                                        id="basic-button"
                                        aria-controls={showUserMenu ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={showUserMenu ? 'true' : undefined}
                                        onClick={handleOpenMenuUser}
                                        startIcon={<AccountCircleIcon />}
                                        variant='outline'
                                        sx={{
                                            color: '#fff',
                                            textTransform: 'none',
                                            fontSize: '1.4rem',
                                        }}
                                    >
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            textAlign: 'right',
                                            justifyContent: 'center'
                                        }}>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    marginBottom: '-8px'
                                                }}
                                            >
                                                Xin chào,
                                            </Typography>
                                            duongnv
                                        </Box>
                                    </Button>

                            }
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={showUserMenu}
                                onClose={() => setShowUserMenu(false)}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to="/profile">
                                    <MenuItem
                                        sx={{
                                            fontSize: '1.4rem'
                                        }}
                                    >
                                        Tài khoản của tôi
                                    </MenuItem>
                                </Link>
                                <Link to='/profile/bill'>
                                    <MenuItem
                                        sx={{
                                            fontSize: '1.4rem'
                                        }}
                                    >
                                        Đơn mua
                                    </MenuItem>
                                </Link>
                                <MenuItem
                                    sx={{
                                        fontSize: '1.4rem'
                                    }}
                                    onClick={() => {
                                        localStorage.removeItem("quanvanUser")
                                        localStorage.removeItem("token")
                                        setShowUserMenu(false)
                                        navigate("/")
                                    }}

                                >
                                    Đăng xuất
                                </MenuItem>
                            </Menu>
                        </Box>

                    </Stack>
                </Container>
            </AppBar>
            <ModalSignInSignUp
                open={showModalSigninSignup}
                onClose={() => setShowModalSigninSignup(false)}
            />
            {showModalSignUp && <SignUp
                open={showModalSignUp}
                onClose={() => setShowModalSignup(false)}
            />}


        </Box>

    )
}

export default Header