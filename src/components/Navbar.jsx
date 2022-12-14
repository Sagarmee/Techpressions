import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import Brand1 from '../Techpressions Brand/Tech3.png';

function Navbar() {
    const [Navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


    function handelopenNav() {
        document.getElementById("mySidenav").style.width = "410px";
    }


    function handlecloseNav() {
        document.getElementById("mySidenav").style.width = null;
        document.getElementsByClassName('nv').style.width = null;
    }



    return (
        <>
            <nav className={ Navbar ? 'navigation-bar active' : 'navigation-bar' }>
                <div className="container-fluid scroll-nav">
                    <div className="brand py-3">
                        <Link to="/">
                            <img src={ Brand1 } alt="logo.png" className="img-fluid ps-3" />
                        </Link>
                    </div>
                    <ul className="nv" id="mySidenav" onClick={ handlecloseNav }>
                        <li className="nav-item">
                            <NavLink to="#" className="closebtn">&times;</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link pt-0">home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Services" className="nav-link">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/website-designing" className="nav-link">website designing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/website-development" className="nav-link">web development</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/seo" className="nav-link">seo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/digital-marketing" className="nav-link">digital marketing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link">portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Graphic-design" className="nav-link">Graphic design</NavLink>
                        </li>

                        <li className="nav-item display-mobile">
                            <NavLink to="/blog" className="nav-link">blog</NavLink>
                        </li>
                        <li className="nav-item display-mobile">
                            <NavLink to="/contact" className="nav-link">contact</NavLink>
                        </li>
                        <li className="nav-item display-mobile">
                            <NavLink to="career" className="nav-link">career</NavLink>
                        </li>
                    </ul>
                    <div className="header-show-link">
                        <NavLink to="/career" className="showcase-link carreer">careers</NavLink>
                        <NavLink to="/blog" className="showcase-link inquiry">blog</NavLink>
                        <NavLink to="/contact" className="showcase-link contact">contact</NavLink>
                        <div onClick={ handelopenNav } className="hamburger" >
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
