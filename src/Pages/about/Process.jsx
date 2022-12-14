import React from 'react'
import requirement from './images/requirement.jpg'
import prototype from './images/prototype.jpg'
import deployment from './images/deployment.jpg'
import spmt from './images/support & maintaince.jpg'

function Process() {
    return (
        <>
            <section id="process" className='py-5'>
                <div className="container">
                    <div className="heading d-flex flex-column justify-content-center align-items-center pb-3">
                        <span>Process</span>
                        <h2>Our Development Process</h2>
                        <p>We use a tried-and-true method in our design process. We build a planning template after understanding your demands.</p>
                    </div>

                    <div className="row py-2 py-xl-4">
                        <div className="col-12 col-xl-4 order-1">
                            <div className="bg-shadow-img rounded">
                                <img src={ requirement } className="img-fluid" alt="reqimg" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-7 order-2 py-3 py-xl-0 px-4 d-flex flex-column justify-content-center">
                            <span>1</span>
                            <h5>Acquiring requirements</h5>
                            <p>We begin by getting to know your requirements. We are well-versed in your industry. We study and analyze the market trends that are prominent in your sector. Following that, we decide what we want to accomplish and how we want to do it.</p>
                        </div>
                    </div>

                    <div className="row py-2 py-xl-4">
                        <div className="col-12 col-xl-7 py-3 py-xl-0 order-2 order-xl-1 d-flex flex-column justify-content-center">
                            <span>2</span>
                            <h5>prototype</h5>
                            <p>After being certain of the mental image, we build a sample or prototype to evaluate our concept and method. We use the trial-and-error approach to refine our idea to its most pertinent form. Then, in order to give you a sense of what it might be like, we share the same with you. Your recommendations would be gratefully accepted.</p>
                        </div>
                        <div className="col-12 col-xl-4  order-1 order-xl-2">
                            <div className="bg-shadow-img rounded">
                                <img src={ prototype } className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row py-2 py-xl-4">
                        <div className="col-12 col-xl-4 order-1">
                            <div className="bg-shadow-img rounded">
                                <img src={ deployment } className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-7 py-3 py-xl-0 order-2 d-flex flex-column justify-content-center">
                            <span>3</span>
                            <h5>deployment</h5>
                            <p>The newest technology is being used by our team to put the concept into action. The writing, the photography, and the designing team regularly coordinate during development. Each one synchsynchron with the others! We deliver them to you once they have been fully developed so that you can begin delivering them to your leads.</p>
                        </div>
                    </div>
                    <div className="row py-2 py-xl-4">
                        <div className="col-12 col-xl-7 py-3 py-xl-0 order-2 d-flex flex-column justify-content-center">
                            <span>4</span>
                            <h5>Support & Maintenance</h5>
                            <p>We pledge to provide you with ongoing support and maintenance from our staff. either in the course of development or as post-sale support. Our qualified team will take care of and expertly manage any concerns or questions.</p>
                        </div>
                        <div className="col-12 col-xl-4 order-1 order-xl-2">
                            <div className="bg-shadow-img rounded">
                                <img src={ spmt } className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process
