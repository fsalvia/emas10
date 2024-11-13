import { useState } from 'react'
import logo from '../assets/img/emas10/logoSM.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='py-4'> 
                    <img src={logo} className='h-[50px] sm:h-[65px] lg:h-[80px]' alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="nosotros" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Nosotros</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="servicios" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Servicios</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Nuestras obras</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar