import { Box, Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useSearchParams } from 'react-router-dom';


function TestPage() {

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const startPrice = searchParams.get("startPrice");
    const endPrice = searchParams.get("endPrice");
    const categoryId = searchParams.get("categoryId");
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`Fetch API ${name}, ${startPrice}, ${endPrice}, ${categoryId}, ${page}, ${size}`);
    }, [])

    const handleClick = () => {
        console.log("vao");
        // navigate("/cart");
        const name = searchParams.get("name");
        const startPrice = searchParams.get("startPrice");
        const endPrice = searchParams.get("endPrice");
        const categoryId = searchParams.get("categoryId");
        const page = searchParams.get("page");
        const size = searchParams.get("size");
        setSearchParams(searchParams);
        navigate(`/test?name=${name}&startPrice=${startPrice}&endPrice=${endPrice}&categoryId=${categoryId}&page=${page}&size=${size}`);
        navigate(0);
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        searchParams.set(event.target.name, event.target.value);
        console.log(window.location.href)
    }

    return (
        <Box>
            {/* <Drawer variant='permanent' open='true' anchor='left' >
                <PerfectScrollbar>
                    <Box sx={{
                        // width: '18%',
                        backgroundColor: '#fff',
                        height: '100%',
                        minHeight: '100vh',
                        // overflow: 'scroll',
                        // overflowX: 'hidden',
                        padding: '8px',
                        boxShadow: '5px 0 10px rgba(0, 0, 0, 0.05)'
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
                                sx={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    textAlign: 'center',
                                    margin: '10px 0',
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
            </Drawer> */}
            {/* <ReactQuill/> */}
            <TextField onChange={handleChange} name="name" placeholder='Nhập name' />
            <TextField onChange={handleChange} name="startPrice" placeholder='Nhập startprice' />
            <TextField onChange={handleChange} name="endPrice" placeholder='Nhập endprice' />
            <TextField onChange={handleChange} name="category" placeholder='Nhập category' />
            <Button variant="contained" onClick={handleClick}>Click me</Button>
        </Box>
    )
}

export default TestPage