import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import hc1 from '../images/happy Client/Howdydog.jpg'
import hc2 from '../images/happy Client/SN.jpg';
import hc3 from '../images/happy Client/TG.jpg'
import hc4 from '../images/happy Client/GR.jpg'
import hc5 from '../images/happy Client/EW.jpg'

export class Homehappdycustomer extends Component {
    render() {
        return (
            <>
                <section id="happycustomer">
                    <div className="container">
                        <div className="heading d-flex flex-column justify-content-center align-items-center py-3 py-xl-5">
                            <p>some of our customer</p>
                            <h5>our happy clients</h5>
                        </div>
                        <div className="gridhc">
                            <div className="shadow py-2 text-center bg-body rounded border">
                                <img src={ hc1 } alt="happyclientimg" className='img-fluid' />
                            </div>
                            <div className=" shadow py-2 text-center bg-body rounded">
                                <img src={ hc2 } alt="happyclientimg" className='img-fluid' />
                            </div>
                            <div className="shadow py-2 text-center bg-body rounded">
                                <img src={ hc3 } alt="happyclientimg" className='img-fluid' />
                            </div>
                            <div className="shadow py-2 text-center bg-body rounded">
                                <img src={ hc4 } alt="happyclientimg" className='img-fluid' />
                            </div>
                            <div className="shadow py-2 text-center bg-body rounded">
                                <img src={ hc5 } alt="happyclientimg" className='img-fluid' />
                            </div>
                        </div>
                        <div className="viewmore text-center">
                            <NavLink to="" className="btn btn-viewmore">view more <span><FaArrowRight /></span> </NavLink>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Homehappdycustomer
