import { Box } from '@mui/system'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import ProductItem from '../components/ProductItem/ProductItem'
import { AccessTimeOutlined, AirportShuttleOutlined, ArrowRight, CheckCircleOutline, ThumbUpOutlined } from '@mui/icons-material'
import NewsItem from '../components/NewsItem/NewsItem'
import productService from '../services/productService'
import { useState } from 'react'
import { useEffect } from 'react'
import newsService from '../services/newsService'
import { Link, useLocation } from 'react-router-dom'
import bannerService from '../services/bannerService'
import imagesService from '../services/imagesService'

const dayConvert = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function HomePage() {

    const [products, setProducts] = useState([]);
    const [news, setNews] = useState([]);
    const [currentBanner, setCurrentBanner] = useState({});
    const [images, setImages] = useState([]);

    const handleGetImages = async () => {
        try {
            const res = await imagesService.getAll();
            setImages(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetImages();
    }, [])

    const handleGetCurrentBanner = async () => {
        try {
            const res = await bannerService.getBanner();
            setCurrentBanner(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]); // do this on route change

    const handleGetNews = async () => {
        try {
            const res = await newsService.getAll();
            console.log(res)
            setNews(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetProducts = async () => {
        try {
            const ans = await productService.getAll();
            setProducts(ans.data.data)
            console.log(ans.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    useEffect(() => {
        handleGetNews();
    }, [])

    useEffect(() => {
        handleGetCurrentBanner();
    }, [])
    return (
        <Box>
            <Header />
            <Container>
                <Banner banner={currentBanner} />
            </Container>
            {/* <Container sx={{ padding: '20px 0' }}>
                <Box sx={{ backgroundColor: '#fff', padding: '20px' }}>
                    <Box>
                        <Typography variant="h3" sx={{ color: '#172578', position: 'relative' }}>
                            Trải Nghiệm Không Gian Sống Hiện Đại
                            <span style={{
                                position: 'absolute',
                                height: '4px',
                                background: 'linear-gradient(to right, #2A3A91, #60B76C)',
                                top: 'calc(100% + 4px)',
                                left: 0,
                                right: 0
                            }}></span>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '24px 0 20px'
                        }}>
                            <Typography sx={{ color: '#545866', fontSize: '1.4rem' }}>Làm mới không gian sống thông qua sự kết hợp thông minh
                                của ánh sáng và nội thất, tận hưởng mái ấm trọn vẹn.</Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: '2px',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #1A4DB5, #0292CB)',
                                        color: '#fff'
                                    }
                                }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src="https://rangdongstore.vn/images/home/trai-nghiem-khong-gian-dd-1_v2.webp" alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src="https://rangdongstore.vn/images/home/trai-nghiem-khong-gian-dd-2_v2.webp" alt="" />
                            </Grid>
                            <Grid item xs={4}>
                                <img style={{ width: '100%' }} src="https://rangdongstore.vn/images/home/trai-nghiem-khong-gian-dd-3_v2.webp" alt="" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container> */}


            {/* Những lý do nên chọn cửa hàng */}
            <Container sx={{ padding: '20px 0' }}>
                <Box sx={{ backgroundColor: '#fff', padding: '20px' }}>
                    <Box>
                        <Typography variant="h3" sx={{ color: '#172578', position: 'relative', textAlign: 'center' }}>
                            Những lý do nên lựa chọn Cửa Hàng chúng tôi
                            <span style={{
                                position: 'absolute',
                                height: '4px',
                                background: 'linear-gradient(to right, #2A3A91, #60B76C)',
                                top: 'calc(100% + 4px)',
                                left: 0,
                                right: 0
                            }}></span>
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '32px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Paper variant='outlined' sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '3px' }}>
                                    <ThumbUpOutlined sx={{ padding: '16px 0', fontSize: '5.6rem', color: '#2D6CA5' }} />
                                    <Typography sx={{ fontSize: '2.0rem' }}>Cam kết chất lượng</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper variant='outlined' sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '3px' }}>
                                    <AirportShuttleOutlined sx={{ padding: '16px 0', fontSize: '5.6rem', color: '#2D6CA5' }} />
                                    <Typography sx={{ fontSize: '2.0rem' }}>Giao hàng nhanh chóng</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper variant='outlined' sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '3px' }}>
                                    <CheckCircleOutline sx={{ padding: '16px 0', fontSize: '5.6rem', color: '#2D6CA5' }} />
                                    <Typography sx={{ fontSize: '2.0rem' }}>Đa dạng mẫu mã</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper variant='outlined' sx={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '3px' }}>
                                    <AccessTimeOutlined sx={{ padding: '16px 0', fontSize: '5.6rem', color: '#2D6CA5' }} />
                                    <Typography sx={{ fontSize: '2.0rem' }}>Tư vấn nhiệt tình</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>


            <Container sx={{ padding: '20px 0' }}>
                <Box sx={{ background: 'linear-gradient(to right, #2864AB, #5BB571)', padding: '20px' }}>
                    <Box>
                        <Typography variant="h3" sx={{ color: '#fff', position: 'relative' }}>
                            Sản Phẩm Bán Chạy
                            <span style={{
                                position: 'absolute',
                                height: '4px',
                                background: 'linear-gradient(to right, #60B76C, #2A3A91)',
                                top: 'calc(100% + 4px)',
                                left: 0,
                                right: 0
                            }}></span>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '24px 0 20px'
                        }}>
                            <Typography sx={{ color: '#D4F3FF', fontSize: '1.4rem' }}>
                                Các sản phẩm được ưa chuộng nhất tại cửa hàng.</Typography>
                            {/* <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: '2px',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #1A4DB5, #0292CB)',
                                        color: '#fff'
                                    },
                                    color: '#fff',
                                    borderColor: '#fff'
                                }}>
                                Xem thêm
                            </Button> */}
                        </Box>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                products.slice(0, 5).map((item, index) => {
                                    return <Grid item xs={2.4} key={index}>
                                        <ProductItem product={item} />
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>

            <Container sx={{ padding: '20px 0' }}>
                <Box sx={{ backgroundColor: '#fff', padding: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h3" sx={{ color: '#172578', position: 'relative' }}>
                            Thư viện ảnh về cửa hàng

                            <span style={{
                                position: 'absolute',
                                height: '4px',
                                background: 'linear-gradient(to right, #2A3A91, #60B76C)',
                                top: 'calc(100% + 4px)',
                                left: 0,
                                right: 0
                            }}></span>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '24px 0 20px'
                        }}>
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: '2px',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #1A4DB5, #0292CB)',
                                        color: '#fff'
                                    }
                                }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: '8px' }} />
                    <Box sx={{ paddingTop: '20px' }}>
                        <Grid container spacing={2}>
                            {
                                images.map((image, index) => {
                                    return (
                                        <Grid item xs={3}>
                                            <img style={{
                                                width: '100%',
                                                height: '250px',
                                                '&hover': {
                                                    cursor: 'pointer',
                                                    transform: 'translateY(-1px)',
                                                    border: '1px solid rgba(0, 0, 0, 0.1)'
                                                }
                                            }}
                                                src={image?.url}
                                            />
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Box>
            </Container>

            {/* Tin tức */}
            <Container id="newsSection" sx={{ padding: '20px 0' }}>
                <Box sx={{ background: 'linear-gradient(to right, #2864AB, #5BB571)', padding: '20px' }}>
                    <Box>
                        <Typography variant="h3" sx={{ color: '#fff', position: 'relative' }}>
                            Cẩm nang tin tức
                            <span style={{
                                position: 'absolute',
                                height: '4px',
                                background: 'linear-gradient(to right, #60B76C, #2A3A91)',
                                top: 'calc(100% + 4px)',
                                left: 0,
                                right: 0
                            }}></span>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '24px 0 20px'
                        }}>
                            <Typography sx={{ color: '#D4F3FF', fontSize: '1.4rem' }}>
                                Thông tin sản phẩm, các chương trình khuyến mãi...</Typography>
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: '2px',
                                    '&:hover': {
                                        background: 'linear-gradient(to right, #1A4DB5, #0292CB)',
                                        color: '#fff'
                                    },
                                    color: '#fff',
                                    borderColor: '#fff'
                                }}>
                                Xem thêm
                            </Button>
                        </Box>
                    </Box>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid item md={6}>
                                <Link to={`/news/${news[0]?.id}`}>
                                    <Card sx={{ marginRight: '20px', height: '100%' }}>
                                        <CardMedia
                                            sx={{ height: 320 }}
                                            image="https://static.rangdongstore.vn/221107009937/2022/11/07/WEB%20CHINH_DANG%20KY%20NGAY_CS1.png?fm=webp&w=500"
                                            title="green iguana"
                                        />
                                        <CardContent sx={{ padding: '12px 12px 4px' }}>
                                            <Typography variant="h5" component="div" sx={{ fontSize: '2.6rem', fontWeight: 'bold' }}>
                                                {news[0]?.title}
                                            </Typography>
                                            {/* <Typography sx={{ fontSize: '1.6rem', color: '#9098B0', margin: '12px 0' }}>Thứ ba 25/04/2023</Typography> */}
                                            <Typography sx={{ fontSize: '1.6rem', color: '#9098B0', margin: '12px 0' }}>
                                                {dayConvert[new Date(news[0]?.createdDate).getDay()]}, ngày {new Date(news[0]?.createdDate).getDate()}/{new Date(news[0]?.createdDate).getMonth()}/{new Date(news[0]?.createdDate).getFullYear()}
                                            </Typography>
                                            <Typography sx={{ fontSize: '1.6rem', color: '#545866', margin: '8px 0' }}>{news[0]?.description}</Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Button sx={{ fontSize: '1.3rem' }}>
                                                Xem thêm
                                                <ArrowRight />
                                            </Button>
                                        </CardActions>

                                    </Card>
                                </Link>
                            </Grid>
                            <Grid container xs={6} spacing={2}>
                                {
                                    news.slice(1, 5).map((item, index) => {
                                        return (
                                            <Grid item md={6}>
                                                <NewsItem news={item} />
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

            <Footer />
        </Box>
    )
}

export default HomePage