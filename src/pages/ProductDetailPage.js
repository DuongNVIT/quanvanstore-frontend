import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { PhoneInTalk } from '@mui/icons-material'
import ProductItem from '../components/ProductItem/ProductItem'
import { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import productService from '../services/productService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cartService from '../services/cartService'
import formatMoney from '../utils/formatMoney'

function ProductDetailPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

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
                                        <Box component='span' sx={{  width: '36px', textAlign: 'center' }}>{quantity}</Box>
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
                                <Box sx={{
                                    fontSize: '1.4rem',
                                    padding: '12px'
                                }}>
                                    MÔ TẢ SẢN PHẨM Áo thun nam nữ oversize LAMO Store phong cách unisex form rộng tay ngắn, cổ tròn màu-
                                    - Áo thun nam nữ oversize sử dụng chất vải cotton 65/35 co giãn 4 chiều. Là loại vải có đặc điểm mềm mịn, độ co giãn cao, khả năng thấm hút tốt và được dệt hoàn toàn từ sợi cây bông tự nhiên. Chất vải cotton cực kỳ thân thiện với làn da.
                                    - Áo thun nam nữ form rộng cổ tròn thoải mái
                                    - Áo phông unisex form rộng dễ phối đồ. Bạn có thể phối với quần jean, chân váy, … kết hợp với một đôi sneaker cho bạn tự tin xuống phố

                                    - BẢNG SIZE SẢN PHẨM Áo thun nam nữ oversize LAMO Store phong cách unisex form rộng tay ngắn, cổ tròn màu trắng hình TNT-LAB trái tim xanh CỦA LAMO Store
                                    - Quý khách vui lòng xem Áo phông nam nữ oversize tại Ảnh sản phẩm hoặc Bảng quy đổi kích cỡ
                                    - Hướng dẫn chọn size áo thun unisex form rộng tay ngắn:
                                    + Size M: 46-53kg
                                    + Size L: 63-74kg
                                    + Size XL: 75-84kg
                                </Box>
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
                            {/* <Grid item md={2.4}>
                                <ProductItem />
                            </Grid>
                            <Grid item md={2.4}>
                                <ProductItem />
                            </Grid>
                            <Grid item md={2.4}>
                                <ProductItem />
                            </Grid>
                            <Grid item md={2.4}>
                                <ProductItem />
                            </Grid>
                            <Grid item md={2.4}>
                                <ProductItem />
                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    )
}

export default ProductDetailPage