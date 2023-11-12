import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from '../../components/Card/Card'
import CategorySlider from '../../components/Sliders/CategorySlider'
import HomeCarousel from '../../components/Sliders/HomeCarousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homePage.scss"
import Navbar from '../../components/Navbar/Navbar'
import CardSlider from '../../components/Sliders/CardSlider'
import { bestSellers } from '../../dummyData'

const HomePage = () => {
  return (
    <Box  className="home-container">
      <Navbar/>
        <Grid container  className='home-grid'>
            <Grid item className='home-carousel'>
              <HomeCarousel/>
            </Grid>
            <Grid item className='home-slider' sx={{mt:"2rem"}}>
                <CardSlider/>
             </Grid>
            <Grid item className='home-category'>
            <h1 className='header'>Shop By Category</h1>
            <CategorySlider/>
            </Grid>
            <Grid item className='best-sellers'>
              <h1 className='header'>Best Sellers</h1>
             <Box className="card-items">
             {
                bestSellers.map((item:any) => (
                <Card id={item.id} img={item.img} />
                ))
              }
             </Box>
            </Grid>
            <Grid item className='new-arrivals'>
            <h1 className='header'>New Arrivals</h1>
             <Box className="card-items">
             {
                bestSellers.map((item:any) => (
                <Card
                 id={item.id}
                  img={item.img}
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  />
                ))
              }
             </Box>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
        </Grid>
    </Box>
  )
}

export default HomePage