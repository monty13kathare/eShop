import React from 'react'
import Slider from "react-slick";
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button'
import "./slider.scss"
import { categorySlider } from '../../dummyData';


const CategorySlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8
  };


  return (
    <div className='categorySlider'>
       <Slider {...settings} className="category-slider">
          {
           categorySlider.map((item:any) => (
              <Box key={item.id} className="card-container" >
                 <Box className='card-right-box'>
                  <img src={item.img} alt="img" className='image' style={{background: `${item.bg}`}} />
                </Box>
                <Box className='card-left-box'>
                  <h4 className='title'>{item.category}</h4>
                </Box>
               
              </Box>
          ))
          }
         
         
        </Slider>
      </div>
  )
}

export default CategorySlider