import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {NavLink } from 'react-router-dom'
import Brand1 from '../Techpressions Brand/Tech3.png';

function Footer() {
    return (

        <>
            <footer id="site-footer">
                <div className="hello">

                    <section className=" horizontal-footer-section" id="footer-top-section">
                        <div id="footer-logo">
                            <picture>
                                <img src={ Brand1 } className="img-fluid" alt="footer logo" role="presentation" />
                            </picture>
                        </div>
                        <div id="footer-top-menu-container" role="menubar">
                            <ul id="footer-top-menu" role="menu">
                                <li className="footer-top-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-top-menu-link">website designing</NavLink>
                                </li>
                                <li className="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                                    <NavLink to="#" className="footer-top-menu-link">Website development</NavLink>
                                </li>
                                <li className="footer-top-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-top-menu-link">SEO</NavLink>
                                </li>
                                <li className="footer-top-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-top-menu-link">Digtal marketing</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div id="footer-buttons-container">
                            <NavLink to="#" className="footer-button" role="button">View our Projects</NavLink>
                        </div>
                    </section>

                    <section className="horizontal-footer-section" id="footer-middle-section">
                        <div id="footer-about" className="footer-columns footer-columns-large">
                            <h1>Our Address</h1>
                            <address>
                                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/marker.png" />Jivraj Park, Ahmedabad, Gujarat, India</p>
                                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/phone.png" />(+91) 90993 10295</p>
                                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/mail.png" />info@techpressions.com</p>
                                <p><img src="https://img.icons8.com/ios-filled/14/eeeeee/clock.png" />12:00 AM – 12:00 PM</p>
                            </address>
                            <span className='text-white'>Web Design And Development Company Ahmedabad | Hire Web Designer and Developers India | IT Company in Ahmedabad | Top IT Companies in Ahmedabad | Best IT Company in Ahmedabad | Best IT solutions</span>
                        </div>
                        <div className="footer-columns">
                            <h1>Overview</h1>
                            <ul className="footer-column-menu" role="menu">
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">Services </NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">Pricing</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">Portfolio</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">News</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-columns">
                            <h1>quick links</h1>
                            <ul className="footer-column-menu" role="menu">
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">website designing</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">website development</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">seo</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">digital marketing</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">graphic design</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-columns ">
                            <h1>Information</h1>
                            <ul className="footer-column-menu" role="menu">
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">About Us</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">careers</NavLink>
                                </li>
                                <li className="footer-column-menu-item">
                                    <NavLink to="#" className="footer-column-menu-item-link" role="menuitem">blog</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">contact</NavLink>
                                </li>
                                <li className="footer-column-menu-item" role="menuitem">
                                    <NavLink to="#" className="footer-column-menu-item-link">porfolio</NavLink>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="horizontal-footer-section pb-0" id="footer-bottom-section">
                        <div id="footer-copyright-info" className='text-white'>
                            &copy; Techpressions Inc. 2022. All rights reserved.
                        </div>
                        <div id="footer-social-buttons">
                            <img src="" /><span className='text-white fs-5'><FaFacebook /></span>
                            <img src="" /><span className='text-white fs-5'><FaTwitter /></span>
                            <img src="" /><span className='text-white fs-5'><FaInstagram /></span>
                            <img src="" /><span className='text-white fs-5'><FaLinkedin /></span>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer