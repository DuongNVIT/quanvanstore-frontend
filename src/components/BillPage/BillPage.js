import { LocalShippingOutlined } from '@mui/icons-material'
import { Box, Chip, Divider, Rating, Typography } from '@mui/material'
import React from 'react'
import billService from '../../services/billService'
import { useState } from 'react';
import { useEffect } from 'react';
import formatMoney from '../../utils/formatMoney';

function BillPage() {

    const [bills, setBills] = useState([]);

    const handleGetBills = async () => {
        try {
            const ans = await billService.getAllBills();
            console.log(ans);
            setBills(ans.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetBills();
    }, [])

    return (
        <Box sx={{
            // padding: '16px',
            // backgroundColor: '#fff'
        }}>
            <Typography sx={{
                fontSize: '2.0rem',
                fontWeight: '500',
                marginBottom: '8px'
            }}>
                Danh sách đơn mua
            </Typography>

            <Box sx={{
                backgroundColor: '#fff',
                padding: '16px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography
                    component='span'
                    sx={{
                        fontSize: '1.4rem',
                        color: 'rgba(0, 0, 0, 0.7)',
                        fontWeight: '500',
                        marginRight: '20px'
                    }}>
                    Hiển thị theo
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
                    label="Tất cả"
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
                    label="Chờ xác nhận"
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
                    label="Đang giao"
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
                    label="Hoàn thành"
                />
            </Box>

            {
                bills.map((item, index) => {
                    return (
                        <Box key={index} sx={{ backgroundColor: '#fff', padding: '16px 16px 4px', marginBottom: '12px' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'center',
                            }}>
                                <LocalShippingOutlined sx={{
                                    marginRight: '12px',
                                    fontSize: '2.0rem',
                                    color: '#0292CB'
                                }} />
                                <Typography
                                    component='span'
                                    sx={{
                                        color: '#0292CB',
                                        fontSize: '1.3rem'
                                    }}
                                >
                                    Đơn hàng được giao thành công
                                </Typography>
                            </Box>
                            <Divider sx={{ margin: '10px 0' }} />
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Box
                                    component='img'
                                    src={item.product.thumbnail}
                                    sx={{
                                        width: '70px',
                                        height: '70px',
                                        display: 'bock',
                                        border: '1px solid #ccc'
                                    }}
                                />
                                <Box sx={{
                                    padding: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flex: '1'
                                }}>
                                    <Typography sx={{
                                        color: 'rgba(0, 0, 0, 0.8)',
                                        fontSize: '1.6rem'
                                    }}>
                                        {item.product.name}
                                    </Typography>
                                    <Typography component='span' sx={{
                                        fontSize: '1.5rem'
                                    }}>
                                        {item.quantity}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Typography sx={{
                                        color: 'rgba(0, 0, 0, 0.5)',
                                        textDecoration: 'line-through',
                                        fontSize: '1.0rem'
                                    }}>
                                        {formatMoney(item.quantity * item.product.oldPrice)} đ
                                    </Typography>
                                    <Typography sx={{
                                        color: '#E81123',
                                        fontSize: '1.4rem',
                                        marginLeft: '12px'
                                    }}>
                                        {formatMoney(item.quantity * item.product.oldPrice)} đ
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={{ margin: '12px 0 4px' }} />
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '1.3rem',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            marginRight: '12px'
                                        }}
                                    >Đánh giá sản phẩm</Typography>
                                    <Rating
                                        sx={{ fontSize: '1.5rem' }}
                                        name="simple-controlled"
                                    />
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '1.3rem',
                                            color: 'rgba(0, 0, 0, 0.8)'
                                        }}
                                    >Thành tiền</Typography>
                                    <Typography sx={{
                                        color: '#E81123',
                                        fontSize: '1.8rem',
                                        marginLeft: '12px'
                                    }}>
                                        {formatMoney(item.quantity * item.product.oldPrice)} đ
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })
            }

        </Box>
    )
}

export default BillPage