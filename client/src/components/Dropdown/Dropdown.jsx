import React from 'react'
import './Dropdown.scss'

const Dropdown = () => {
  return (
    <div className='dropdown'>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/1"}>Mixers & Grinders</a>
        </h3>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/2"}>Breakfast Appliances</a>
        </h3>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/3"}>Heating Appliances</a>
        </h3>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/4"}>Personal Grooming Appliances</a>
        </h3>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/5"}>Fans</a>
        </h3>
        <h3 className="cat">
        <a href={process.env.REACT_APP_CLIENT_URL+"/products/6"}>Vacuum Cleaners</a>
        </h3>
    </div>
  )
}

export default Dropdown