import React, { Component } from 'react'
import wsvector from '../images/svg/website vector.svg'
import mgvector from '../images/svg/marketing vector.svg'
import seovector from '../images/svg/branding vectpr.svg'
import graphicvector from '../images/svg/appdevelopment vector.svg'
import { FaArrowRight } from 'react-icons/fa'


import { NavLink } from 'react-router-dom'

export class HomeServices extends Component {
    render() {
        return (
            <>
                <section id="services">
                    <div className="services">
                        <div className="container title d-flex flex-column align-items-center justify-content-center py-5">
                            <span className='text-capitalize mb-2'>what we are providing</span>
                            <h4 className='text-capitalize'>our services</h4>
                        </div>
                    </div>
                    <div className="services-category">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-xl-3 pr-2">
                                    <div className="card Website py-5 text-center shadow p-3 mb-5 bg-body rounded">
                                        <img src={ wsvector } className="card-img-top img-fluid" alt="wsimage" />
                                        <div className="card-body text-center mt-0 mt-xl-2">
                                            <h5 className="card-title">Website Design & Development</h5>
                                            <p className="card-text">We have all of the solutions: the proper background, the most articulate content, attractive design, what, and where.</p>
                                        </div>
                                        <div className="read-btn  text-center">
                                            <NavLink to="/website-designing">read more <span><FaArrowRight /></span> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3 pr-2">
                                    <div className="card Digital py-5 text-center shadow p-3 mb-5 bg-body rounded">
                                        <img src={ mgvector } className="card-img-top img-fluid" alt="marketingimg" />
                                        <div className="card-body text-center mt-0 mt-xl-2">
                                            <h5 className="card-title">Digital Marketing Service</h5>
                                            <p className="card-text">Our top digital marketing services will increase the profitability of your company.</p>
                                        </div>
                                        <div className="read-btn text-center">
                                            <NavLink to="/digital-markerting">read more <span><FaArrowRight /></span> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3 pr-2">
                                    <div className="card Search py-5 text-center shadow p-3 mb-5 bg-body rounded">
                                        <img src={ seovector } className="card-img-top img-fluid" alt="seoimage" />
                                        <div className="card-body text-center mt-0 mt-xl-2">
                                            <h5 className="card-title">Search Engine Optimization (SEO)</h5>
                                            <p className="card-text">SEO is a method used by search engines to identify which websites are deserving of top rankings for each query typed in.</p>
                                        </div>
                                        <div className="read-btn text-center">
                                            <NavLink className="btnread" to="/seo">read more <span><FaArrowRight /></span> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3 pr-2">
                                    <div className="card Graphic py-5 text-center shadow p-3 mb-5 bg-body rounded">
                                        <img src={ graphicvector } className="card-img-top" alt="graphicimage" />
                                        <div className="card-body text-center mt-0 mt-xl-2">
                                            <h5 className="card-title">Graphic & Branding Service</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                        <div className="read-btn text-center">
                                            <NavLink to="">read more <span><FaArrowRight /></span> </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="viewmore text-center">
                                <NavLink to="/services" className="btn btn-viewmore">view more <span><FaArrowRight /></span> </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HomeServices