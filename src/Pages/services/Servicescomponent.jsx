import React from 'react'
import { Link } from "react-router-dom"
import s1img from '../services/webstie-dev.png'
import s2img from '../services/webstie-design.png'
import s3img from '../services/digital-marketing.png'
import s4img from '../services/app-dev.png'
import s5img from '../services/software-dev.png'
import s6img from '../services/graphic.png'
import s7img from '../services/seo.png'
import s8img from '../services/gmb.png'

const Servicescomponent = () => {
    return (
        <>
            <section id="services-part">
                <div className="container">
                    <div className="heading d-flex justify-content-center align-items-center flex-column py-5">
                        <h5>our services</h5>
                        <p>techpressions boasts of providing the best website design and development services with proven results</p>
                    </div>
                    <div className="row">
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s1img } className="img-fluid" alt="" />
                                </div>
                                <h4>website designing</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s2img } className="img-fluid" alt="" />
                                </div>
                                <h4>website development</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s3img } className="img-fluid" alt="" />
                                </div>
                                <h4>digital marketing</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link href="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s4img } className="img-fluid" alt="" />
                                </div>
                                <h4>application development</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link href="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s5img } className="img-fluid" alt="" />
                                </div>
                                <h4>software development</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s6img } className="img-fluid" alt="" />
                                </div>
                                <h4>graphic design</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s7img } className="img-fluid" alt="" />
                                </div>
                                <h4>search engine optimizations</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                        <div className="services-card">
                            <Link to="" className='d-flex justify-content-center align-items-center flex-column'>
                                <div className="services-img">
                                    <img src={ s8img } className="img-fluid" alt="" />
                                </div>
                                <h4>google my business</h4>
                                <p className='text-center'>The right background, the most articulate content, attractive design, what, and where; we have got all the solutions</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicescomponent