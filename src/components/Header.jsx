import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <ul className='header__list'>
                <li><a className='header__link' href="#">Home</a></li>
                <li><a className='header__link' href="#">Business</a></li>
                <li><a className='header__link' href="#">Entertainment</a></li>
                <li><a className='header__link' href="#">General</a></li>
                <li><a className='header__link' href="#">Health</a></li>
                <li><a className='header__link' href="#">Science</a></li>
                <li><a className='header__link' href="#">Sports</a></li>
                <li><a className='header__link' href="#">Technology</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header