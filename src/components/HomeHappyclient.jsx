import React, { Component } from 'react'
import client1 from '../images/happy Client/client-one.jpg'

export class HomeHappyclient extends Component {
    render() {
        return (
            <>
                <section id="client-review">
                    <div className="review-background-img">
                        <div className="container">
                            <div className="title text-center py-5">
                                <h6 className='fs-1 text-white text-'>what our client say</h6>
                            </div>
                            <div className="row testimonial">
                                <div className="col-12 col-xl-6  review-card shadow rounded">
                                    <div className="profile">
                                        <img src={ client1 } alt="clientprofile" className='img-fluid' />
                                    </div>
                                    <div className="review">
                                        <p>We at techpressions Service were very impressed with the all aspects of our new website. We would highly reccomend Thrive to anyone looking to build a new website.</p>
                                        <strong>-sharpnoxpumps</strong>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 mt-3 mt-xl-0 review-card shadow rounded">
                                    <div className="profile">
                                        <img src={ client1 } alt="clientprofile" className='img-fluid' />
                                    </div>
                                    <div className="review">
                                        <p>We thoroughly enjoyed our experience working with techpressions! They helped us get outside of our comfort zone to create the kind of marketing we truly needed. We look forward to our future projects!</p>
                                        <strong>-Toch & glow unisex salon</strong>
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

//
export default HomeHappyclient