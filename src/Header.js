import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
const [{cart}, dispatch]= useStateValue();

  return (
    <nav className='header'>
      {/* Amazon Logo */}
      <Link to="/">
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='not visible' />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />

      </div>

      {/* Header Nav 3 Links*/}
      <div className='header__nav'>
        {/* 1st link */}
        <Link to="/login" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello SSD</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Return</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your &</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionCart'>
            {/* cart icon */}
            <ShoppingBasketIcon/>
            {/* number in carts */}
            <span className='header__optionLineTwo header__basketCount'>{cart?.length}</span>
          </div>
        </Link>

      </div>


    </nav>
  )
}

export default Header
