import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from '../video/slide1.mp4';
import slide2 from '../video/slide2.mp4';
import slide3 from '../video/slide3.mp4';
import slide6 from '../video/slide4.mp4';
import HeaderText from './HeaderText';
import img1 from '../images/header-part-imgage/vector_webdevelopment.png'
import img2 from '../images/header-part-imgage/wb_vector.png'
import img3 from '../images/header-part-imgage/web_development.png'
import img4 from '../images/header-part-imgage/website_vector.png'

function Slider() {
    const [text] = useState("Digital Platform")

    return (
        <>
            <OwlCarousel
                className="owl-theme"
                loop={ true }
                margin={ 10 }
                nav={ true }
                dots={ true }
                autoplay={ true }
                autoplayTimeout={ 7000 }
                autoplaySpeed={ 2000 }
                smartSpeed={ 1500 }
                autoplayHoverPause={ true }
                items={ 1 }
            >
                <div className="slider-1 slide">
                    <video autoPlay muted loop className="myvideo">
                        <source src={ slide6 } type="video/mp4" />
                    </video>
                    {/* <div className="showcase-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6 header-text">
                                    <div className="heading text-white">
                                        <h2 className='text-capitalize'>The most trusted digital partner for your<strong className='text-uppercase'> { text }.</strong></h2>
                                    </div>
                                    <div className="short-info mt-0 mt-lg-5">
                                        <p> Techpressions is a forward-thinking webdesign firm based in Gujarat that creates industry-leading websites using cutting-edge technologies. With the support of our digital marketing experts, our websites will assist you in establishing your business online and driving sales dramatically.</p>
                                    </div>
                                    <div className="btn-call mt-0 mt-lg-5">
                                        <a href="tel" className='btn text-decoration-none'>let's discuss your project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <HeaderText heading={ `The most trusted digital partner for your ${text}` } secondinfo="let's create and promote the online identity of your business " shortinfo="Techpressions is a forward-thinking webdesign firm based in Gujarat that creates industry-leading websites using cutting-edge technologies. With the support of our digital marketing experts, our websites will assist you in establishing your business online and driving sales dramatically." btn="let's discuss your project" imagepath={ img1 } />
                </div>
                <div className="slider-2 slide">
                    <video autoPlay muted loop className="myvideo">
                        <source src={ slide2 } type="video/mp4" />
                    </video>
                    <HeaderText heading="Responsive Website Design and Development" secondinfo="provide a platform for your customers to learn about your business" shortinfo="We have smart developers at Techpressions who have the know-how, experience, and problem-solving skills to construct the iconic website from the scratch." btn="let's discuss your project" imagepath={ img2 } />
                </div>
                <div className="slider-3 slide">
                    <video autoPlay muted loop className="myvideo">
                        <source src={ slide3 } type="video/mp4" />
                    </video>
                    <HeaderText heading="SEO and social media marketing are guaranteed to produce positive results." secondinfo="Let's get people talking about your brand on social media!" shortinfo="The most proven current way to increase business is through social media marketing. The use of social media marketing aids in the growth of relevant consumers and the expansion of a company's scope." btn="let's discuss your project" imagepath={ img3 } />
                </div>
                <div className="slider-3 slide">
                    <video autoPlay muted loop className="myvideo">
                        <source src={ slide1 } type="video/mp4" />
                    </video>
                    <HeaderText heading="Graphics" secondinfo="the most accurate visual representation of your company!" shortinfo="Techpressions strive to provide you with the best digital solution for all of your business needs. We are dedicated to helping you in expanding your internet business!" btn="let's discuss your project" imagepath={ img4 } />
                </div>
            </OwlCarousel>
            {/* <div className="showcase-text">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
                            <Fade className="row" left cascade>
                                <div className="col-12 heading">
                                    <h2 className='text-capitalize'>The most trusted digital partner for your<strong className='text-uppercase'> { text }.</strong></h2>
                                </div>
                            </Fade>
                            <Fade className="row" left cascade >
                                <div className="col-12 mt-0 mt-lg-5 short-intro">
                                    <p> Techpressions is a forward-thinking webdesign firm based in Gujarat that creates industry-leading websites using cutting-edge technologies. With the support of our digital marketing experts, our websites will assist you in establishing your business online and driving sales dramatically.</p>
                                    <button className='btn btn-call'>
                                        <a href="tel" className='text-decoration-none'>let's discuss your project</a>
                                    </button>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-6 header-form">
                            <div class="wrapper">


                                <div class="header" tabindex="1">
                                    <h1 class="title" tabindex="0">Sign Up & Get One year Free Hosting</h1>
                                </div>


                                <form action="">
                                    <input type="text" id="name" placeholder="Name" required autofocus />

                                    <input type="number" id="mobile" placeholder="Number" required />

                                    <input type="email" id="email" placeholder="Email" required />

                                    <select for="services" id="services">
                                        <option value="Website Development">Website Development</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="It Consultan">It Consultant</option>
                                        <option value="Website Maintaincet">Website Maintaince</option>
                                        <option value="CMS Development">CMS Development</option>
                                        <option value="Custom Software Development">Custom Software Development</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                    </select>

                                    <div className='mt-3'>
                                        <textarea name="msg" id="msg" cols="40" rows="5">Messege</textarea>
                                    </div>

                                    <input type="submit" value="Sign in" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Slider
