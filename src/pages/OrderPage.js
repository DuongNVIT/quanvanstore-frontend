import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, FormControl, FormControlLabel, Grid, InputBase, InputLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { useLocation } from 'react-router-dom';
import formatMoney from '../utils/formatMoney';
import paymentService from '../services/paymentService';

function OrderPage() {

    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log(location)
        console.log(location.state)
    }, [])


    const handleOrder = async () => {
        try {
            console.log(location.state.orders)
            const products = location.state.orders.map(item => {
                return item.product.id
            })
            const quantity = location.state.orders.map(item => {
                return item.quantity;
            })
            const amount = location.state.orders.reduce((total, item) => {
                return total + item.product.newPrice * item.quantity;
            }, 0)
            console.log(products, quantity, amount);
            const ans = await paymentService.order({
                products,
                quantity,
                "vnPayDTO": {
                    amount
                }
            })
            window.location.replace(ans.data.data.paymentUrl)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Box>
            <Header />
            <Box sx={{ marginTop: '20px' }}>
                <Container >
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '2.6rem', fontWeight: 'bold', marginBottom: '12px' }}>
                        Đặt hàng
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Box
                                component={Paper}
                                sx={{
                                    padding: '14px 20px 30px',
                                    marginBottom: '20px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '2.0rem',
                                        fontWeight: '500',
                                        color: '#545866'
                                    }}
                                >
                                    Thông tin người nhận
                                </Typography>
                                <Divider />

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0 0'
                                }}>
                                    <InputLabel
                                        component="label"
                                        htmlFor="name"
                                        sx={{
                                            fontSize: '1.5rem',
                                            fontWeight: '500',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            width: '150px',
                                            textAlign: 'right'
                                        }}
                                    >
                                        Họ và tên
                                    </InputLabel>
                                    <InputBase
                                        id="name"
                                        placeholder='Nhập họ và tên'
                                        sx={{
                                            fontSize: '1.4rem',
                                            padding: '4px 8px',
                                            border: '1px solid rgba(0, 0, 0, 0.2)',
                                            borderRadius: '3px',
                                            width: '400px',
                                            marginLeft: '20px'
                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0 0'
                                }}>
                                    <InputLabel
                                        component="label"
                                        htmlFor="name"
                                        sx={{
                                            fontSize: '1.5rem',
                                            fontWeight: '500',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            width: '150px',
                                            textAlign: 'right'
                                        }}
                                    >
                                        Số điện thoại
                                    </InputLabel>
                                    <InputBase
                                        id="name"
                                        placeholder='Nhập số điện thoại'
                                        sx={{
                                            fontSize: '1.4rem',
                                            padding: '4px 8px',
                                            border: '1px solid rgba(0, 0, 0, 0.2)',
                                            borderRadius: '3px',
                                            width: '400px',
                                            marginLeft: '20px'
                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0 0'
                                }}>
                                    <InputLabel
                                        component="label"
                                        htmlFor="name"
                                        sx={{
                                            fontSize: '1.5rem',
                                            fontWeight: '500',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            width: '150px',
                                            textAlign: 'right'
                                        }}
                                    >
                                        Email
                                    </InputLabel>
                                    <InputBase
                                        id="name"
                                        placeholder='Nhập email'
                                        sx={{
                                            fontSize: '1.4rem',
                                            padding: '4px 8px',
                                            border: '1px solid rgba(0, 0, 0, 0.2)',
                                            borderRadius: '3px',
                                            width: '400px',
                                            marginLeft: '20px'
                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '20px 0 0'
                                }}>
                                    <InputLabel
                                        component="label"
                                        htmlFor="name"
                                        sx={{
                                            fontSize: '1.5rem',
                                            fontWeight: '500',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            width: '150px',
                                            textAlign: 'right'
                                        }}
                                    >
                                        Địa chỉ
                                    </InputLabel>
                                    <InputBase
                                        id="name"
                                        placeholder='Nhập địa chỉ'
                                        sx={{
                                            fontSize: '1.4rem',
                                            padding: '4px 8px',
                                            border: '1px solid rgba(0, 0, 0, 0.2)',
                                            borderRadius: '3px',
                                            width: '400px',
                                            marginLeft: '20px'
                                        }}
                                    />
                                </Box>

                            </Box>
                            <Box
                                component={Paper}
                                sx={{
                                    padding: '14px 20px 30px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '2.0rem',
                                        fontWeight: '500',
                                        color: '#545866'
                                    }}
                                >
                                    Phương thức thanh toán
                                </Typography>
                                <Divider />

                                <FormControl sx={{ marginLeft: '100px' }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="store"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="store" control={<Radio sx={{hidden: 'true'}}/>}
                                            label={
                                                <Typography sx={{ fontSize: '1.5rem' }}>
                                                    Thanh toán khi nhận hàng
                                                </Typography>
                                            }
                                            sx={{ marginTop: '12px' }}
                                        />
                                        <FormControlLabel
                                            value="vnpay" control={<Radio />}
                                            label={
                                                <Typography sx={{ fontSize: '1.5rem' }}>
                                                    Thanh toán qua ví điện tử VNPay
                                                </Typography>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>




                            </Box>
                        </Grid>
                        <Grid item md={3}>
                            <Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Accordion expanded={expanded} onChange={() => setExpanded(prev => !prev)} sx={{ width: '100%' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            component="div"
                                        >
                                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                                                    <Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#545866', width: '100%' }}>Đơn hàng</Typography>
                                                    <Typography sx={{ fontSize: '1.2rem', color: 'rgba(0, 0, 0, 0.5)' }}>
                                                        {location.state.orders.length} sản phẩm
                                                    </Typography>
                                                </Box>
                                                <Typography sx={{ color: '#00A8E2', fontSize: '1.4rem' }}>Chi tiết</Typography>
                                            </Box>

                                        </AccordionSummary>
                                        <Divider />
                                        <AccordionDetails>
                                            {
                                                location.state.orders.map((order, index) => {
                                                    return (
                                                        <Box sx={{ display: 'flex', padding: '4px 0', alignItems: 'center' }}>
                                                            <Box
                                                                component="img"
                                                                src={order.product.thumbnail}
                                                                sx={{
                                                                    width: '50px',
                                                                    height: '50px',
                                                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                                                    borderRadius: '2px',
                                                                    marginRight: '8px'
                                                                }}
                                                            />
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '1.4rem',
                                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                                    flex: '1',
                                                                    lineHeight: '1.6rem',
                                                                    height: '3.2rem',
                                                                    overflow: 'hidden'
                                                                }}
                                                            >
                                                                {order.product.name}
                                                            </Typography>
                                                        </Box>
                                                    )
                                                })
                                            }
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                <Paper sx={{ padding: '16px', marginTop: '20px' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box component='span' sx={{
                                            fontSize: '1.4rem',
                                            color: 'rgba(0, 0, 0, 0.6)'
                                        }}>
                                            Tạm tính
                                        </Box>
                                        <Box component='span' sx={{
                                            fontSize: '1.4rem',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            fontWeight: '500'
                                        }}>
                                            {
                                                formatMoney(
                                                    location.state.orders.reduce((total, num) => {
                                                        return total + num.product.newPrice * num.quantity;
                                                    }, 0)
                                                )
                                            } đ
                                        </Box>
                                    </Box>
                                    <Divider sx={{ margin: '12px 0' }} />
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box component='span' sx={{
                                            fontSize: '1.4rem',
                                            color: 'rgba(0, 0, 0, 0.6)'
                                        }}>
                                            Khuyến mãi
                                        </Box>
                                        <Box component='span' sx={{
                                            fontSize: '1.4rem',
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            fontWeight: '500'
                                        }}>
                                            0 đ
                                        </Box>
                                    </Box>
                                    <Divider sx={{ margin: '12px 0' }} />
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box component='span' sx={{
                                            fontSize: '1.4rem',
                                            color: 'rgba(0, 0, 0, 0.6)'
                                        }}>
                                            Tổng cộng
                                        </Box>
                                        <Box component='span' sx={{
                                            fontSize: '1.6rem',
                                            color: '#E81123',
                                            fontWeight: '500'
                                        }}>
                                            {
                                                formatMoney(
                                                    location.state.orders.reduce((total, num) => {
                                                        return total + num.product.newPrice * num.quantity;
                                                    }, 0)
                                                )
                                            } đ
                                        </Box>
                                    </Box>
                                </Paper>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#E81123',
                                        color: '#fff',
                                        borderRadius: '2px',
                                        width: '100%',
                                        padding: '4px',
                                        fontSize: '1.4rem',
                                        marginTop: '20px',
                                        '&:hover': {
                                            backgroundColor: '#E81123',
                                            opacity: '0.8'
                                        }
                                    }}
                                    onClick={handleOrder}
                                >
                                    Đặt hàng
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default OrderPage