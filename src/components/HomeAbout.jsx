import React, { Component } from 'react'
import vector from '../images/header-part-imgage/web_development.png'

export class HomeAbout extends Component {
    render() {
        return (
            <>
                <section className="homeabout">
                    <div className='container-fluid'>
                        <div className="row innerabout">
                            <div className="col-12 col-lg-6">
                                <img src={ vector } alt="vectorimg" className='img-fluid' />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="abouttext py-3">
                                    <h5 className='title'>we are creative agency.</h5>
                                    <h2 className='heading text-uppercase mt-3'>About techpressions</h2>
                                    <p className='desc mt-3'>We are proud to say that we have established ourselves as the fastest growing provider of Web Solutions, Software Solutions, and Branding Solutions, that may assist you in growing your business online. Techpressions takes care of all of your business's digital demands in today's competitive environment, from establishing the company's digital presence through a website to increasing the number of customers through digital marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default HomeAbout
