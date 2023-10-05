import { LocalShippingOutlined } from '@mui/icons-material'
import { Box, Button, Chip, Divider, Grid, InputBase, Modal, Rating, Typography } from '@mui/material'
import React from 'react'
import billService from '../../services/billService'
import { useState } from 'react';
import { useEffect } from 'react';
import formatMoney from '../../utils/formatMoney';
import ratingService from '../../services/ratingService'
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    bgcolor: 'background.paper',
    borderRadius: '4px',
    padding: '16px'
};

const select = ["Tất cả", "Chờ xác nhận", "Đang giao", "Hoàn thành"];

function BillPage() {

    const [bills, setBills] = useState([]);
    const [vote, setVote] = useState({});
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const handleGetBills = async () => {
        try {
            const ans = await billService.getAllBills();
            console.log(ans);
            setBills(ans.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            const ans = await billService.deleteBill(id);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Hủy đơn hàng thành công!"
            }))
            handleGetBills();
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        setOpen(prev => false);
        setVote(prev => { })
    }

    const dispatch = useDispatch();

    useEffect(() => {
        handleGetBills();
    }, [])

    const handleVote = async () => {
        try {
            const res = await ratingService.rate(vote);
            dispatch(updateAlertModal({
                isOpen: true,
                message: "Đánh giá sản phẩm!"
            }))
            handleClose();
            console.log(vote)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (index) => {
        setSelected(prev => index);
        const newList = bills.filter((item, i) => {
            if (index == 0) return true;
            return item.status == index;
        })
        // setBills(prev => newList)
    }

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
                {
                    select.map((item, index) => {
                        return (
                            <Chip sx={{
                                borderRadius: '2px',
                                margin: '0 4px',
                                // background: 'linear-gradient(to right, #1A4EB5, #0292CB)',
                                backgroundColor: selected == index ? '#0292CB' : '#EBEBEB',
                                color: selected == index ? '#fff' : 'rgba(0, 0, 0, 0.6)',
                                fontSize: '1.2rem',
                                padding: '0 4px',
                                '&:hover': {
                                    backgroundColor: '#0292CB',
                                    color: '#fff'
                                }
                            }}
                                label={item}
                                onClick={() => handleChange(index)}
                            />
                        )
                    })
                }

            </Box>

            {
                bills.filter((item, index) => {
                    return selected == 0 || item.status == selected
                }).map((item, index) => {
                    return (
                        <Box key={index} sx={{ backgroundColor: '#fff', padding: '16px 16px 4px', marginBottom: '12px' }}>
                            {/* <Box sx={{
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
                            </Box> */}
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
                                    {item.status == 3 && <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '1.3rem',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            marginRight: '12px'
                                        }}
                                        onClick={() => {
                                            setVote(prev => {
                                                return { ...prev, productId: item.product.id }
                                            })
                                            setOpen(true);
                                        }}
                                    >
                                        Đánh giá sản phẩm
                                    </Typography>}
                                    {item.status == 1 && <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '1.3rem',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            marginRight: '12px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Hủy đơn hàng
                                    </Typography>}
                                    {/* <Rating
                                        sx={{ fontSize: '1.5rem' }}
                                        name="simple-controlled"
                                    /> */}
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '1.8rem',
                            fontWeight: '500',
                            marginBottom: '12px'
                        }}
                    >
                        Đánh giá sản phẩm
                    </Typography>
                    <Divider />
                    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                        <Grid item md={12}>

                            <Box sx={{
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component='label' sx={{
                                        width: '140px',
                                        textAlign: 'right',
                                        padding: '0 12px',
                                        fontSize: '1.5rem',
                                        color: '#545866'
                                    }}>
                                        Chất lượng
                                    </Box>
                                    <Rating
                                        sx={{
                                            flex: 1,
                                            borderRadius: '2px',
                                            padding: '4px 8px',
                                            fontSize: '1.8rem'
                                        }}
                                        name="simple-controlled"
                                        value={vote?.rate}
                                        onChange={(event, newValue) => setVote(prev => {
                                            return { ...prev, rate: newValue };
                                        })}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component='label' sx={{
                                        width: '140px',
                                        textAlign: 'right',
                                        padding: '0 12px',
                                        fontSize: '1.5rem',
                                        color: '#545866'
                                    }}>
                                        Đánh giá
                                    </Box>
                                    <InputBase
                                        required
                                        id="outlined-basic"
                                        placeholder='Nhập đánh giá'
                                        variant='outlined'
                                        sx={{
                                            flex: 1,
                                            borderRadius: '2px',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            padding: '4px 8px',
                                            fontSize: '1.4rem'
                                        }}
                                        onChange={(e) => setVote(prev => {
                                            return { ...prev, content: e.target.value }
                                        })}
                                        value={vote?.content}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component='label' sx={{
                                        width: '140px',
                                        textAlign: 'right',
                                        padding: '0 12px',
                                        fontSize: '1.5rem',
                                        color: '#545866'
                                    }}>

                                    </Box>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            borderRadius: '2px',
                                            color: '#fff',
                                            flex: '1',
                                            fontSize: '1.3rem'
                                        }}
                                        onClick={handleVote}
                                    >
                                        Lưu
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

        </Box>

    )
}

export default BillPage