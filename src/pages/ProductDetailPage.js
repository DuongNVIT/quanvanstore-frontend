import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Avatar, Box, Button, Container, Divider, Grid, Paper, Rating, Typography } from '@mui/material'
import { PhoneInTalk } from '@mui/icons-material'
import ProductItem from '../components/ProductItem/ProductItem'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import productService from '../services/productService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cartService from '../services/cartService'
import formatMoney from '../utils/formatMoney'
import ratingService from '../services/ratingService'

function ProductDetailPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relevantProducts, setRelevantProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState([]);
    const navigate = useNavigate();

    const handleGetRating = async (id) => {
        try {
            const res = await ratingService.getAll(id);
            console.log("rating");
            console.log(res);
            setRating(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetRating(id);
    }, [])

    const handleGetRelevantProducts = async () => {
        try {
            const res = await productService.getReleventProduct(id);
            console.log(res);
            setRelevantProducts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetRelevantProducts();
    }, [])

    useEffect(() => {
        handleGetProduct();
        handleGetRelevantProducts();
    }, [id])

    const handleGetProduct = async () => {
        try {
            const res = await productService.getProduct(id);
            console.log(res.data.data);
            setProduct(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddToCart = async () => {
        try {
            const ans = await cartService.addToCart(id, quantity);
            navigate("/cart")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(id);
        handleGetProduct();
    }, [])

    return (
        <Box>
            <Header />
            <Container sx={{ padding: '20px 0' }}>
                <Grid container spacing={2}>
                    <Grid container md={9} sx={{ backgroundColor: '#fff', padding: '16px', marginTop: '16px' }}>
                        <Grid item md={5}>
                            <Box
                                component='img'
                                src={product?.thumbnail}
                                sx={{
                                    width: '100%'
                                }}
                            />
                        </Grid>
                        <Grid item md={7}>
                            <Box sx={{ marginLeft: '16px' }}>
                                <Typography sx={{
                                    fontSize: '2.0rem',
                                    lineHeight: '24px'
                                }}>
                                    {product?.name}
                                </Typography>
                                <Typography sx={{
                                    color: '#0180AD',
                                    fontSize: '1.6rem',
                                    margin: '8px 0'
                                }}>Model: CB9.T12.22</Typography>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#F5F5FA',
                                    borderRadius: '4px',
                                    padding: '16px'
                                }}>
                                    <Box>
                                        <Box component='span' sx={{
                                            color: '#9098B0',
                                            fontSize: '1.6rem',
                                            textDecoration: 'line-through',
                                            marginRight: '20px'
                                        }}>
                                            {formatMoney(product?.oldPrice)} đ
                                        </Box>
                                        <Box component='span' sx={{
                                            fontSize: '2.2rem',
                                            color: '#ED1C29',
                                            fontWeight: 'bold'
                                        }}>
                                            {formatMoney(product?.newPrice)} đ
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        borderRadius: '3px',
                                        background: 'linear-gradient(to right, #0298C9, #62B76A)',
                                        color: '#fff',
                                        padding: '4px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                    }}>
                                        GIẢM 30%
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', color: '#73798C', fontWeight: '500', margin: '28px 0', fontSize: '1.6rem' }}>
                                    <Box component='span' sx={{ fontSize: '1.6rem', color: '#73798C', marginRight: '20px' }}>Số lượng</Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}>
                                        <Box
                                            sx={{ color: '#73798C', fontSize: '1.6rem', padding: '4px 12px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                            onClick={() => quantity == 1 ? null : setQuantity(prev => prev - 1)}
                                        >
                                            -
                                        </Box>
                                        <Divider orientation="vertical" flexItem />
                                        <Box component='span' sx={{ width: '36px', textAlign: 'center' }}>{quantity}</Box>
                                        <Divider orientation="vertical" flexItem />
                                        <Box
                                            sx={{ color: '#73798C', fontSize: '1.6rem', padding: '4px 12px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                            onClick={() => setQuantity(prev => prev + 1)}
                                        >
                                            +
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item md={6}>
                                            <Button variant='contained'
                                                sx={{
                                                    background: 'linear-gradient(to right, #194EB5, #0292CB)',
                                                    borderRadius: '2px',
                                                    fontSize: '1.4rem',
                                                    padding: '8px 20px',
                                                    marginRight: '20px',
                                                    width: '100%',
                                                }}
                                                onClick={handleAddToCart}
                                            >
                                                Thêm vào giỏ
                                            </Button>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button variant='contained' sx={{
                                                background: '#ED1C29',
                                                borderRadius: '2px',
                                                fontSize: '1.4rem',
                                                padding: '8px 20px',
                                                width: '100%',
                                                '&:hover': {
                                                    background: '#ED1C29',
                                                    opacity: '0.9'
                                                }
                                            }}>
                                                Mua ngay
                                            </Button>

                                        </Grid>

                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={12}>
                            <Box>
                                <Box sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                    fontSize: '2.0rem',
                                    textTransform: 'uppercase',
                                    padding: '8px 12px'
                                }}>
                                    Chi tiết sản phẩm
                                </Box>
                                {product && product.description &&
                                    <Box
                                        sx={{
                                            fontSize: '1.4rem',
                                            padding: '12px'
                                        }}
                                        component="div"
                                        className="product-description"
                                        dangerouslySetInnerHTML={{ __html: product?.description }}
                                    />}
                                {/* <div dangerouslySetInnerHTML={{ __html: product?.description }}/>
                                    </Box>} */}
                            </Box>
                            <Box>
                                <Box sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                    fontSize: '2.0rem',
                                    textTransform: 'uppercase',
                                    padding: '8px 12px'
                                }}>
                                    Đánh giá sản phẩm
                                </Box>
                                {
                                    rating.map((item, index) => {
                                        return (
                                            <>
                                                <Box sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '12px 8px'
                                                }}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        width: '140px'
                                                    }}>
                                                        <Avatar sx={{
                                                            width: '40px',
                                                            height: '40px'
                                                        }} />
                                                        <Box sx={{ margin: '0 10px' }}>
                                                            <Typography sx={{
                                                                fontSize: '1.2rem',
                                                                color: 'rgba(0, 0, 0, 0.7)'
                                                            }}>{item.username}</Typography>
                                                            <Rating value={item.rate} sx={{
                                                                fontSize: '1.3rem'
                                                            }} />
                                                        </Box>
                                                    </Box>
                                                    <Typography sx={{
                                                        fontStyle: 'italic',
                                                        fontSize: '1.4rem',
                                                        color: 'rgba(0, 0,0, 0.8)'
                                                    }}>{item.content}</Typography>
                                                </Box>
                                                <Divider />
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <Paper>
                            <Box sx={{
                                backgroundColor: '#038FCA',
                                padding: '12px',
                                color: '#fff',
                                fontSize: '1.4rem',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                borderTopLeftRadius: '4px',
                                borderTopRightRadius: '4px',
                                marginBottom: '6px'
                            }}>
                                Cửa hàng điện nước Nghi Phú
                            </Box>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Đại lý phân phối lớn
                            </Typography>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Cung ứng vật tư cho các công trình
                            </Typography>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Cam kết sản phẩm chất lượng cao
                            </Typography>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Hỗ trợ tư vấn trực tiếp, dịch vụ cung ứng nhanh chóng
                            </Typography>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Bảo hành và tư vấn qua điện thoại
                            </Typography>
                            <Typography sx={{ padding: '6px 16px', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '28px', marginRight: '12px' }} src="http://diennuocthuytrang.com/uploads/source//icon/icon-hotsale.png" alt="" />
                                Đội ngũ thi công lắp đặt chuyên nghiệp
                            </Typography>
                        </Paper>
                        <Paper>
                            <Box sx={{
                                backgroundColor: '#038FCA',
                                padding: '12px',
                                color: '#fff',
                                fontSize: '1.4rem',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                borderTopLeftRadius: '4px',
                                borderTopRightRadius: '4px',
                                margin: '16px 0'
                            }}>
                                Bạn cần được tư vấn
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Box
                                    component='img'
                                    src="https://thucphamnauy.com/uploads/source/icon/icon-ho-tro-huong-sora.jpg"
                                    sx={{
                                        width: '60%'
                                    }}
                                />
                                <Typography sx={{ fontSize: '1.4rem', margin: '12px' }}>Liên hệ với chúng tôi qua tổng đài</Typography>
                                <Button startIcon={<PhoneInTalk />} variant='outlined' sx={{ fontSize: '1.4rem', marginBottom: '12px' }}>0973718908</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid container sx={{ backgroundColor: '#fff', marginTop: '20px' }}>
                        <Box sx={{
                            color: '#131928',
                            fontSize: '2.2rem',
                            fontWeight: '500',
                            padding: '16px',
                            width: '100%',
                            borderBottom: '1px solid #ccc'
                        }}>
                            Các sản phẩm liên quan
                        </Box>
                        <Divider />
                        <Grid container spacing={2} sx={{ padding: '16px' }}>
                            {
                                relevantProducts.map((item, index) => {
                                    return (
                                        <Grid item md={2.4} key={index}>
                                            <ProductItem product={item} />
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box >
    )
}

export default ProductDetailPage