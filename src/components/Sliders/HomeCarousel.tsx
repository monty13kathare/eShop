import React from 'react'
import Slider from "react-slick"
import "./slider.scss"
import { Box, Grid } from '@mui/material'
import {carouselData} from "../../dummyData"
import Button from '@mui/material/Button'

const HomeCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div className='home-carousel-slider'>
        <Slider {...settings} className="home-slider">
          {
           carouselData.map((item:any) => (
              <Grid container md={12} key={item.id} className="carousel-container">
                <Grid item sm={6} lg={6} md={6} className='left-box'>
                  <h1 className='title'>{item.title}</h1>
                  <p className='subTitle'>sub Title comming soon...</p>
                  <Button variant='contained' className='btn'>{item.btnText}</Button>
                </Grid>
                <Grid item sm={6} lg={6} md={6}  className='right-box'>
                  <img src={item.image} alt="img"  />
                </Grid>
              </Grid>
          ))
          }
         
         
        </Slider>
    </div>
  )
}

export default HomeCarousel