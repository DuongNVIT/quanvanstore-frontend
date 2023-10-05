import { Box, Button, Chip, Container, Divider, Grid, InputBase, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { FilterListOutlined } from '@mui/icons-material'
import ProductItem from '../components/ProductItem/ProductItem'
import { useSearchParams } from 'react-router-dom'
import productService from '../services/productService'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProductFilter } from '../store/actions/productFilter'

function ProductListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [productList, setProductList] = useState([]);
    const [startPrice, setStartPrice] = useState("");
    const [endPrice, setEndPrice] = useState("");

    const productFilter = useSelector(state => state.productFilter);
    const dispatch = useDispatch();


    const handleGetProducts = async (productFilter) => {
        try {
            const { name, startPrice, endPrice, categoryId, page, size } = productFilter;
            if (name) searchParams.set("name", name)
            if (startPrice) searchParams.set("startPrice", startPrice);
            if (endPrice) searchParams.set("endPrice", endPrice);
            if (categoryId) searchParams.set("categoryId", categoryId);
            if (page) searchParams.set("page", page);
            if (size) searchParams.set("size", size);
            setSearchParams(searchParams);
            const ans = await productService.searchProducts(name, startPrice, endPrice, categoryId, page, size);
            setProductList(ans.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearchPrice = () => {
        dispatch(updateProductFilter({
            ...productFilter,
            startPrice,
            endPrice
        }))
    }

    useEffect(() => {
        handleGetProducts(productFilter);
    }, [])

    useEffect(() => {
        handleGetProducts(productFilter);
    }, [productFilter])


    return (
        <Box>
            <Header />
            <Container sx={{ marginTop: '20px' }}>
                <Grid container
                    spacing={2}
                >
                    <Grid item md={2.5}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            padding: '12px 16px'
                        }}>
                            {/* <Box>
                                <Typography sx={{
                                    fontSize: '1.6rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px'
                                }}>Danh mục</Typography>
                                <Typography sx={{
                                    fontSize: '1.3rem',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400',
                                    padding: '4px 0'
                                }}>
                                    Phích nước cao cấp
                                </Typography>
                                <Typography sx={{
                                    fontSize: '1.3rem',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400',
                                    padding: '4px 0'
                                }}>
                                    Phích đựng nước truyền thống
                                </Typography>
                                <Typography sx={{
                                    fontSize: '1.3rem',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400',
                                    padding: '4px 0'
                                }}>
                                    Phích nước pha trà
                                </Typography>
                                <Typography sx={{
                                    fontSize: '1.3rem',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400',
                                    padding: '4px 0'
                                }}>
                                    Phích bơm nước
                                </Typography>
                            </Box> */}
                            {/* <Divider sx={{ margin: '12px 0' }} /> */}

                            <Box>
                                <Typography sx={{
                                    fontSize: '1.6rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px'
                                }}>Khoảng giá</Typography>
                                <Divider sx={{ margin: '12px 0 16px' }} />
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <InputBase
                                        sx={{
                                            fontSize: '1.3rem',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            padding: '0 4px'
                                        }}
                                        placeholder="đ Từ"
                                        name="startPrice"
                                        onChange={e => setStartPrice(e.target.value)}
                                    />
                                    <Box sx={{
                                        fontSize: '1.8rem',
                                        margin: '0 8px',
                                        color: 'rgba(0, 0, 0, 0.4)'
                                    }}> - </Box>
                                    <InputBase
                                        sx={{
                                            fontSize: '1.3rem',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            padding: '0 4px'
                                        }}
                                        placeholder="đ Đến"
                                        name="endPrice"
                                        onChange={e => setEndPrice(e.target.value)}
                                    />
                                </Box>
                                <Button
                                    variant='contained'
                                    sx={{
                                        color: "#fff",
                                        backgroundColor: '#1A4EB5',
                                        width: '100%',
                                        borderRadius: '3px',
                                        fontSize: '1.2rem',
                                        margin: '12px 0'
                                    }}
                                    onClick={handleSearchPrice}
                                >
                                    Áp dụng
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={9.5}>
                        <Box sx={{
                            // backgroundColor: '#fff',
                        }}>
                            <Typography sx={{
                                fontSize: '1.4rem',
                                color: 'rgba(0, 0, 0, 0.7)',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '8px',
                                fontWeight: '500',
                                // backgroundColor: '#fff'
                            }}>
                                <FilterListOutlined sx={{
                                    fontSize: '1.6rem',
                                    marginRight: '4px'
                                }} />
                                Kết quả tìm kiếm cho
                                <Typography component='i'
                                    sx={{
                                        fontSize: '1.4rem',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontWeight: '500',
                                        marginLeft: '4px'
                                    }}>"{productFilter.name}"
                                </Typography>
                            </Typography>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '12px 16px',
                                margin: '12px 0',
                                fontSize: '1.4rem',
                                color: 'rgba(0, 0, 0, 0.7)',
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: '500',
                                // backgroundColor: '#fff'
                            }}>
                                <Typography
                                    component='span'
                                    sx={{
                                        fontSize: '1.4rem',
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        fontWeight: '500',
                                        marginRight: '20px'
                                    }}>
                                    Sắp xếp theo
                                </Typography>
                                <Chip sx={{
                                    borderRadius: '2px',
                                    margin: '0 4px',
                                    // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                    backgroundColor: '#0292CB',
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    padding: '0 4px'
                                }}
                                    label="Phổ biến"
                                />
                                {/* <Chip sx={{
                                    borderRadius: '2px',
                                    margin: '0 4px',
                                    // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                    // backgroundColor: '#0292CB',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontSize: '1.2rem',
                                    padding: '0 4px'
                                }}
                                    label="Mới nhất"
                                />
                                <Chip sx={{
                                    borderRadius: '2px',
                                    margin: '0 4px',
                                    // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                    // backgroundColor: '#0292CB',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontSize: '1.2rem',
                                    padding: '0 4px'
                                }}
                                    label="Bán chạy"
                                /> */}
                                <Chip sx={{
                                    borderRadius: '2px',
                                    margin: '0 4px',
                                    // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                    // backgroundColor: '#0292CB',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontSize: '1.2rem',
                                    padding: '0 4px'
                                }}
                                    label="Giá thấp"
                                />
                                <Chip sx={{
                                    borderRadius: '2px',
                                    margin: '0 4px',
                                    // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                    // backgroundColor: '#0292CB',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontSize: '1.2rem',
                                    padding: '0 4px'
                                }}
                                    label="Giá cao"
                                />
                            </Box>
                            <Grid container spacing={2}>
                                {
                                    productList.map((product, index) =>
                                        <Grid item md="3" key={index}>
                                            <ProductItem product={product} />
                                        </Grid>
                                    )
                                }

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    )
}

export default ProductListPage