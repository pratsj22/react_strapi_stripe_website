import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown/Dropdown';
import Search from '../Search/Search';

const Navbar = () => {
  const iconic = [
    <KeyboardArrowDownIcon />,
    <KeyboardArrowUpIcon />
  ]
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(0);
  const [search, setSearch] = useState(false);
  const [catopen, catSetOpen] = useState(false);
  const products = useSelector(state => state.cart.products)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <div className="item1">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item cat" onClick={() => { catSetOpen(!catopen); setIcon(icon === 0 ? 1 : 0) }}>
            <span>Categories</span>
            {iconic[icon]}
          </div>
          <div className='item1'>
            <Link to="/">Homepage</Link>
          </div>
        </div>


        <div className='centre'>
          <Link to="/">Patronix</Link>
        </div>


        <div className='right'>
          <div className='item'>
            <Link to="/">About</Link>
          </div>
          <div className='item'>
            <Link to="/">Contact</Link>
          </div>
          <div className='item'>
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <div onClick={() => setSearch(!search)}>
              <SearchIcon />
            </div>
            <PersonOutlineOutlinedIcon className='ic' />
            <FavoriteBorderOutlinedIcon className='ic' />
            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {catopen && <Dropdown />}
      {open && <Cart />}
      {search && <Search setSearch={setSearch}/>}
    </div>
  )
}

export default Navbar