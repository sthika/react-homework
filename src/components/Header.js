import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className=' header__wrapper'>
                <NavLink  to='/' className='header__link'>Главная</NavLink>
                <NavLink to='/about' className='header__link'>Счетчик</NavLink>
                <NavLink to='/contacts' className='header__link'>Выбранные студенты</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header