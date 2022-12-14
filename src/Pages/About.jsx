import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/About.css'
import aboutimg from '../images/All Img/ab.png'
import vission from '../images/svg/vision-svgrepo-com.svg'
import mission from '../images/svg/mission-svgrepo-com.svg'
import Whyus from './about/Whyus'
import Process from './about/Process'

function About() {

    const about = useLocation()

    return (
        <>
            <header>
                <div className="about">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize" aria-current="page">{ about.pathname.replace("/", '') }</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>{ about.pathname.replace("/", '') } techpressions</h4>
                    </div>
                </div>
            </header>
            <section id="aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <div className="about-img">
                                <img src={ aboutimg } className="img-fluid" alt="aboutimg" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="about-heading py-2">
                                <span>about us</span>
                                <h2>about techpressions</h2>
                                <p>At Techpressions, we are extremely motivated to meet the ongoing requirement to satisfy clients. We are driven with enthusiasm, operate with great dedication, and are well-versed in creativity. Since we first began offering our services in 2021, we have become recognized as a leading IT organization. We are dedicated to providing you with IT solutions that will enable you to expand your online business.</p>
                                <p>High-caliber PHP developers, Dot Net developers, Android developers, IOS developers, coding experts, testers, analyzers, and project managers make up our technical team. Our greatest strength is that we have all the practical knowledge required to operate with the most up-to-date software and technologies. You inform us of your requirements, and we will choose the appropriate programming language—Java, Ruby, Python, or another.</p>
                                <p>We employ the most latest tools, technologies, and techniques to provide you with the best online business solution. We are ready to adopt new technology when they emerge and are open to them. We consistently work to inform you about cutting-edge trends in the digital world that you can use to develop your online business enormously.</p>
                                <p>In our industry, we are the Jacks. We can assist you in expanding your online business by providing the best answers to your issues with the digital world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vision-card py-3 py-xl-0">
                <div className="container">
                    <div className="row">
                        <div className="py-3 border border-1 border-info shadow bg-body rounded">
                            <div className="vission d-flex flex-column flex-xl-row justify-content-center align-items-center">
                                <div className="vission-img pe-3">
                                    <img src={ vission } className="img-fluid" alt="" />
                                </div>
                                <div className="heading-text d-flex  justify-content-center align-items-center flex-column">
                                    <h6>vission</h6>
                                    <p>To establish ourselves as the most trusted IT partner that clients can count on.</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 border border-1 border-info  shadow bg-body rounded">
                            <div className="vission d-flex flex-column flex-xl-row justify-content-center align-items-center">
                                <div className="vission-img pe-3">
                                    <img src={ mission } className="img-fluid" alt="" />
                                </div>
                                <div className="heading-text d-flex justify-content-center align-items-center flex-column">
                                    <h6>mission</h6>
                                    <p>To take care of our clients' business' online platform through transparency in our work that can lead them to trust us and thus, bring them a sense of happiness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Whyus />
            <Process />
        </>
    )
}

export default About