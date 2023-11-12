import React, {useState} from 'react'
import { Box, Grid, Rating } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import "./card.scss"

interface CardProps{
  id?: any,
  title?: string,
  subTitle?: string,
  img?: string,
  price?: string,
  brandName?: string,
  rating?: number,
}

const Card = (props: CardProps) => {
  const [value, setValue] = React.useState<number | null>(2.5);
  return (
    <Box className="card" key={props.id}>
    <div className="image-box">
      <img src={props.img} alt="img" className='image' />
    </div>
    <div className="content-box">
      <p className='brandName'>Sony</p>
      <h4 className='title'>Smart Watch With Advanced Health Caring Device</h4>
      <div className="rating">
      <Rating name="read-only" value={value} precision={0.5} readOnly />
      </div>
      <div className='bottom-box'>
        <h3 className='price'>₹1230</h3>
      <div className="icon">
      <LocalGroceryStoreOutlinedIcon className='shop'/>
        <FavoriteBorderIcon className='like'/>
      </div>
      </div>
    </div>
    </Box>
  )
}

export default Card