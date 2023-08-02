import { Box, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'


const useStyles = makeStyles({
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
})


function Footer() {


  const classes = useStyles();

  return (
    <Box sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      marginTop: '60px'
    }}>
      <Box sx={{
        padding: '2px',
        background: 'linear-gradient(to right, #2A63AA, #69BA64)'
      }} />
      <Container sx={{ padding: '40px 0' }}>
        <Grid container spacing={5}>
          <Grid item>
            <Box className={classes.item}>
              <Typography variant="h4" sx={{
                color: '#131928',
                fontSize: '1.6rem',
                marginBottom: '8px',
                fontWeight: 'bold'
              }} >
                HỖ TRỢ KHÁCH HÀNG
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Hotline: 0973718908
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Email: quanvanstore@gmail.com
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Thời gian phục vụ: 7h30 - 17h30
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box className={classes.item}>
              <Typography variant="h4" sx={{
                color: '#131928',
                fontSize: '1.6rem',
                marginBottom: '8px',
                fontWeight: 'bold'
              }} >
                CHĂM SÓC KHÁCH HÀNG
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Hướng dẫn đặt hàng
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách vận chuyển
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách thanh toán
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách đổi hàng
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách bảo hành
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box className={classes.item}>
              <Typography variant="h4" sx={{
                color: '#131928',
                fontSize: '1.6rem',
                marginBottom: '8px',
                fontWeight: 'bold'
              }} >
                VỀ CỬA HÀNG
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Giới thiệu
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chương trình khuyến mãi
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách bảo mật
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Điều khoản sử dụng
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box className={classes.item}>
              <Typography variant="h4" sx={{
                color: '#131928',
                fontSize: '1.6rem',
                marginBottom: '8px',
                fontWeight: 'bold'
              }} >
                BẢN ĐỒ
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Giới thiệu
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chương trình khuyến mãi
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Chính sách bảo mật
              </Typography>
              <Typography variant="h5" sx={{ color: '#545866', margin: '6px 0' }}>
                Điều khoản sử dụng
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Container>
      <Box sx={{ padding: '12px', backgroundColor: 'rgba(0, 0, 0, 0.055)', fontSize: '1.3rem', color: '#545866', textAlign: 'center' }}>
        Copyright 2023 - Bản quyền thuộc về Công ty điện nước Quân Vân
      </Box>
    </Box>
  )
}



export default Footer