import React, { Component } from 'react'
import faqs from '../images/All Img/faqs.jpg'

export class Homefaqs extends Component {
    render() {
        return (
            <>
                <section id="faqs">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <img src={ faqs } alt="faqimage" className='img-fluid' />
                            </div>
                            <div className="col-12 col-lg-6">
                                <strong className='text-uppercase d-block text-center mt-2 fs-2'>faq</strong>
                                <div className="accordion accordion-flush py-3" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Can I see at my website while it's being built?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Yes. We create your website on the development server and provide you with an account and password so that you can track its progress. We welcome your suggestions since we believe in transparency and a flexible development plan to help you fulfill your aims. Even if your custom website is online, you can still monitor its functionality from the backend.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Are your Websites Custom? Do you use templates?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Yes, everything we make is completely custom, with unlimited design modifications. We create everything from the design to the administrative section so you can manage the website yourself.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Do you also offer website design and hosting?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Yes, sir! We are one of the greatest website development firms, providing end-to-end custom software development services. We handle everything from registering a domain name to designing and developing your website, as well as maintaining it for years.

                                                Our staff also keeps a close eye on the most important areas of custom website development to avoid typical blunders before the launch.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                After the launch of the custom website, do you help in marketing?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">Without a doubt! We can help you with a variety of services in addition to creating a responsive custom website for your business. Our primary goal is to assist you in achieving online success. We intend to stay for the long term. Our experts are dedicated to your success, and we offer a variety of online marketing packages that include SEO, SMM and more</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                What makes your company different from the rest?
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">We've been working in the IT business for almost a decade. We build high-quality custom websites and provide ongoing support and maintenance. Our skilled website developers are committed to not only providing custom web development solutions, but also to establishing long-term relationships with our clients. We want your company to have a strong online presence and achieve success. We're different because we care about your business goals and are dedicated to achieving them.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Homefaqs