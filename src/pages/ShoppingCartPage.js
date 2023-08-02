import { Box, Button, Container, Divider, Grid, IconButton, Input, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { DeleteForever } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';

import cartService from '../services/cartService'
import formatMoney from '../utils/formatMoney';
import { useNavigate } from 'react-router-dom';

function ShoppingCartPage() {

    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleGetCart = async () => {
        try {
            const res = await cartService.getCart();
            setCart(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleDecreaseCart = async (cartItem) => {
        try {
            console.log("decrease")
            if (cartItem.quantity == 1) return;
            const newCart = cart.map((item, index) => {
                console.log(item);
                if (item.id == cartItem.id) {
                    item.quantity -= 1;
                }
                return item;
            })
            setCart(newCart)
            const res = await cartService.decrease(cartItem.id);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleIncreaseCart = async (cartItem) => {
        try {
            console.log("click 1 cái")
            console.log(cartItem);
            const temp = cart.map((item, index) => {
                console.log(item);
                if (item.id == cartItem.id) {
                    item.quantity += 1;
                }
                return item;
            })
            const res = await cartService.increase(cartItem.id);
            setCart(temp)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteCartItem = async (cartItem) => {
        try {
            const newCart = cart.filter(item => item.id != cartItem.id);
            const res = await cartService.delete(cartItem.id);
            console.log(res);
            setCart(newCart);
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = () => {
        navigate("/order", {
            state: {
                orders: cart
            }
        })
    }

    useEffect(() => {
        handleGetCart();
    }, [])

    return (
        <Box>
            <Header />
            <Box sx={{ marginTop: '20px' }}>
                <Container >
                    <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '2.6rem', fontWeight: 'bold', marginBottom: '12px' }}>Giỏ hàng</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={9}>
                            <TableContainer component={Paper}>
                                <Table sx={{
                                    minWidth: 650,
                                    borderCollapse: 'separate',
                                    borderSpacing: '0px 4px'
                                }} size="m" aria-label="a dense table">
                                    <TableHead sx={{}}>
                                        <TableRow sx={{ marginBottom: '20px', padding: '20px' }}>
                                            <TableCell sx={{ fontSize: '1.6rem' }}>Chi tiết sản phẩm</TableCell>
                                            <TableCell sx={{ fontSize: '1.5rem' }} align="center">Phân loại sản phẩm</TableCell>
                                            <TableCell sx={{ fontSize: '1.5rem' }} align="center">Đơn giá</TableCell>
                                            <TableCell sx={{ fontSize: '1.5rem' }} align="center">Số lượng</TableCell>
                                            <TableCell sx={{ fontSize: '1.5rem' }} align="center">Thành tiền</TableCell>
                                            <TableCell sx={{ fontSize: '1.5rem' }} align="center">Hành động</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody sx={{ marginTop: '20px' }}>
                                        {cart.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ margin: '200px 0', '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell sx={{ fontSize: '1.4rem' }} component="th" scope="row">
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Box
                                                            component='img'
                                                            src={row.product.thumbnail}
                                                            sx={{
                                                                minWidth: '50px',
                                                                height: '50px',
                                                                marginRight: '20px',
                                                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                                                borderRadius: '1px'
                                                            }}
                                                        />
                                                        {row.product.name}
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ fontSize: '1.4rem' }} align="center">{120}</TableCell>
                                                <TableCell sx={{ fontSize: '1.4rem' }} align="center">{formatMoney(row.product.newPrice)}</TableCell>
                                                <TableCell sx={{ fontSize: '1.4rem' }} align="center">
                                                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#73798C', fontWeight: '500', margin: '8px', fontSize: '1.6rem' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}>
                                                            <Box
                                                                sx={{ color: '#73798C', fontSize: '1.6rem', padding: '4px 12px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                                                onClick={() => handleDecreaseCart(row)}
                                                            >
                                                                -
                                                            </Box>
                                                            <Divider orientation="vertical" flexItem />
                                                            <Box component='span' sx={{ padding: '4px', width: '28px' }}>{row.quantity}</Box>
                                                            <Divider orientation="vertical" flexItem />
                                                            <Box
                                                                sx={{ color: '#73798C', fontSize: '1.6rem', padding: '4px 12px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                                                onClick={() => handleIncreaseCart(row)}
                                                            >
                                                                +
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell sx={{ fontSize: '1.4rem' }} align="center">{formatMoney(row.quantity * row.product.newPrice)}</TableCell>
                                                <TableCell sx={{ fontSize: '1.4rem' }} align="center">
                                                    <IconButton>
                                                        <DeleteForever sx={{ fontSize: '2.4rem', cursor: 'pointer' }} onClick={() => handleDeleteCartItem(row)} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item md={3}>
                            <Box>
                                <Paper sx={{ padding: '16px' }}>
                                    <Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '8px', color: '#545866' }}>Nhập mã khuyến mãi</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        border: '1px solid rgba(0, 0, 0, 0.15)',
                                        padding: '2px',
                                        alignItems: 'center',
                                    }}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1, fontSize: '1.3rem' }}
                                            placeholder="Nhập mã khuyến mãi"
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />
                                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                        <Button variant="contained" size="small" sx={{
                                            borderRadius: '2px',
                                            background: 'linear-gradient(to right, #1950B6, #0291CA)',
                                            height: '30px',
                                            fontSize: '1.2rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginRight: '2px'
                                        }}>Áp dụng</Button>
                                    </Box>
                                </Paper>

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
                                                    cart.reduce((total, num) => {
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
                                                    cart.reduce((total, num) => {
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
                                    onClick={handleBuy}
                                >
                                    Mua hàng
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

export default ShoppingCartPage