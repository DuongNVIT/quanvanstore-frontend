import React from 'react'
import { Avatar, Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { ArticleOutlined, InfoOutlined, PhotoLibraryOutlined, ViewCarouselOutlined, CategoryOutlined, GroupOutlined, HelpOutline, HomeOutlined, InventoryOutlined, LogoutOutlined, ShoppingCartOutlined } from '@mui/icons-material';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link, useNavigate } from 'react-router-dom';

function MySideBar() {

    const navigate = useNavigate();

    return (
        <PerfectScrollbar component='div'>
            <Box sx={{
                width: '18%',
                backgroundColor: '#fff',
                height: '100%',
                minHeight: '100vh',
                overflowX: 'hidden',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                padding: '8px',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '80%',
                bottom: '0',
                boxShadow: '5px 0 10px rgba(0, 0, 0, 0.05)',
                '&:-webkit-scrollbar': {
                    display: 'none'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: 'auto'
                }}>
                    <Avatar sx={{
                        width: '100px',
                        height: '100px',
                        margin: '30px 0 12px'
                    }} />
                    <Typography sx={{
                        fontSize: '1.4rem'
                    }}>
                        Quản lý
                    </Typography>
                    <Typography sx={{
                        fontSize: '2.6rem',
                        fontWeight: 'bold',
                        margin: '4px 0 20px'
                    }}>
                        Nguyễn Đương
                    </Typography>
                </Box>
                <Divider />
                <Box>
                    <List >
                        <Typography sx={{
                            fontSize: '1.5rem',
                            margin: '4px 12px',
                            fontWeight: '500'
                        }}>
                            Dashboard
                        </Typography>
                        <Link to="statistic">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <HomeOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Trang quản trị"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
                <Divider />
                <Box>
                    <List >
                        <Typography sx={{
                            fontSize: '1.5rem',
                            margin: '4px 12px',
                            fontWeight: '500'
                        }}>
                            Quản lý
                        </Typography>
                        <Link to="user">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <GroupOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý người dùng"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="product">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <InventoryOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý sản phẩm"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to="order">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <ShoppingCartOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý đơn mua"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to="category">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <CategoryOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý danh mục"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="news">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <ArticleOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý tin tức"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="banner">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <ViewCarouselOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý banner"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="images">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <PhotoLibraryOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý thư viện ảnh"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link to="general-infor">
                            <ListItem sx={{
                                padding: '0 8px'
                            }}>
                                <ListItemButton sx={{
                                    '&:hover': {
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <ListItemIcon sx={{
                                        fontSize: '1.9rem',
                                        minWidth: 'unset',
                                        width: '32px',
                                    }}>
                                        <InfoOutlined sx={{ fontSize: '1.9rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Quản lý thông tin"
                                        primaryTypographyProps={{
                                            fontSize: '1.4rem',
                                            color: '#73798C'
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
                <Divider />
                <Box>
                    <List >
                        <Typography sx={{
                            fontSize: '1.5rem',
                            margin: '4px 12px',
                            fontWeight: '500'
                        }}>
                            Cài đặt
                        </Typography>
                        <ListItem sx={{
                            padding: '0 8px'

                        }}
                            onClick={() => {
                                localStorage.removeItem("quanvanUser")
                                localStorage.removeItem("token")
                                navigate("/")
                            }}
                        >

                            <ListItemButton sx={{
                                '&:hover': {
                                    borderRadius: '8px'
                                }
                            }}>
                                <ListItemIcon sx={{
                                    fontSize: '1.9rem',
                                    minWidth: 'unset',
                                    width: '32px',
                                }}>
                                    <LogoutOutlined sx={{ fontSize: '1.9rem' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Đăng xuất"
                                    primaryTypographyProps={{
                                        fontSize: '1.4rem',
                                        color: '#73798C'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    backgroundColor: '#0292CB',
                    borderRadius: '15px',
                    margin: '20px 0'
                }}>
                    <Typography sx={{
                        color: '#fff',
                        fontSize: '1.6rem',
                        fontWeight: 'bold',
                    }}>
                        Trợ giúp
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            margin: '10px 0'
                        }}
                    >
                        Bạn có vấn đề khi sử dụng dịch vụ quản trị trang web,
                        xin vui lòng liên hệ với chúng tôi
                    </Typography>
                    <Button
                        startIcon={<HelpOutline />}
                        variant='contained'
                        sx={{
                            textTransform: 'none',
                            backgroundColor: '#ccc',
                            color: '#73798C',
                            fontSize: '1.3rem',
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: '#ddd'
                            }

                        }}
                    >
                        Đi đến trợ giúp
                    </Button>
                </Box>
            </Box>
        </PerfectScrollbar>
    )
}

export default MySideBar