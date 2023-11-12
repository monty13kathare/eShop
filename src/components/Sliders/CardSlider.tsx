import React from 'react'
import Slider from "react-slick"
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import "./slider.scss"
import { homeSlider } from '../../dummyData'

const CardSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='cardSlider'>
       <Slider {...settings} className="c-slider">
          {
           homeSlider.map((item:any) => (
              <Box key={item.id} className="card-container" sx={{background: `${item.backgroundColor}`}}>
                 <Box className='card-right-box'>
                  <img src={item.img} alt="img"  />
                </Box>
                <Box className='card-left-box'>
                  <h1 className='title'>{item.title}</h1>
                  <p className='subTitle'>{item.subTitle}</p>
                  <Button variant='contained' className='btn'>Go to Collection</Button>
                </Box>
               
              </Box>
          ))
          }
         
         
        </Slider>
    </div>
  )
}

export default CardSlider