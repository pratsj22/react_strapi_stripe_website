import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
        {item?.attributes.isNew && <span>New Arrival</span>}
        <img src={process.env.REACT_APP_UPLOAD_URL+item?.attributes.img?.data?.attributes.url} alt="" className="mainImg" />
        <h2>{item?.attributes.title.substring(0,49)}</h2>
        <div className="prices">
         <h3>₹{item?.attributes.price + Math.floor(Math.random()*21)*10}</h3> 
         <h3>₹{item?.attributes.price}</h3> 
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card