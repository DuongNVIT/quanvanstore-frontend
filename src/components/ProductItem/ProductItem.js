import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cartService from '../../services/cartService';
import { useDispatch } from 'react-redux';
import { updateAlertModal } from '../../store/actions/alert';
import formatMoney from '../../utils/formatMoney';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        cursor: 'pointer',
        border: '1px solid transparent',
        position: 'relative',
        borderRadius: '2px',
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-1px)',
            border: '1px solid rgba(0, 0, 0, 0.1)'
        }
    }
})

export default function MediaCard({ product }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = async (e) => {
        try {
            e.stopPropagation();
            e.preventDefault();
            const ans = await cartService.addToCart(product.id, 1);
            dispatch(updateAlertModal({isOpen: true, severity: 'success', message: "Thêm vào giỏ hàng thành công!"}));
            // navigate("/cart");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Link to={`/detail/${product.id}`}>
            <Card sx={{
                maxWidth: 345,
                cursor: 'pointer',
                border: '1px solid transparent',
                position: 'relative',
                borderRadius: '2px',
                '&:hover': {
                    cursor: 'pointer',
                    transform: 'translateY(-1px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)'
                }
            }}>
                <CardMedia
                    sx={{ height: 160 }}
                    image={product.thumbnail}
                    title="green iguana"
                />
                <CardContent sx={{ padding: '12px 12px 4px' }}>
                    <Typography variant="h5" component="div"
                        sx={{
                            maxHeight: '40px',
                            // lineHeight: "1.5em",
                            // height: "3em",
                            overflow: "hidden",
                            // whiteSpace: "nowrap",
                            // textOverflow: "ellipsis",
                            width: '100%'
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 0 0 0',
                        }}
                    >
                        <Typography sx={{ textDecoration: 'line-through', fontSize: '1.3rem' }}>{formatMoney(product.oldPrice)} đ</Typography>
                        <Typography sx={{ color: '#ED1C29', fontSize: '1.8rem' }}>{formatMoney(product.newPrice)} đ</Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' size="small" sx={{ borderRadius: '2px', textTransform: 'none', fontSize: '1rem' }} onClick={handleAddToCart}>Thêm vào giỏ</Button>
                    <Button variant='contained' size="small" sx={{ borderRadius: '2px', textTransform: 'none', fontSize: '1rem' }}>Mua ngay</Button>
                </CardActions>
                <Box sx={{
                    position: 'absolute',
                    top: '8px', right: '8px',
                    background: 'linear-gradient(to right, #216EB1, #58B473)',
                    color: '#fff',
                    padding: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                }}>
                    <Typography sx={{ fontSize: '1.1rem' }} component='span'>GIẢM</Typography>
                    <Typography sx={{ fontSize: '1.3rem' }} component='span'>{Math.floor(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}%</Typography>
                </Box>
            </Card>
        </Link >
    );
}