import React from 'react'
import '../Styles/Services.css'
import { Link, useLocation } from "react-router-dom"
import servicesimg from "../Pages/services/services.jpg"
import { GoVerified } from "react-icons/go";
import Servicescomponent from './services/Servicescomponent';
import Process from './about/Process';

function Services() {

    const services = useLocation()

    return (
        <>
            <header>
                <div className="services">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize" aria-current="page">{ services.pathname.replace("/", "") }</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>techpressions { services.pathname.replace("/", "") }</h4>
                    </div>
                </div>
            </header>
            <section id="services-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="services-img">
                                <img src={ servicesimg } className="img-fluid" alt="servicesimg" />
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <div className="info-part py-3 py-xl-0">
                                <h4 className='text-capitalize fs-6 fs-xl-5'>Trustworthy solutions. transparently done work. In business, complete solvency. Happy-making outcomes as a result.</h4>
                                <small>What more could you ask for?</small>

                                <ul className='mt-2'>
                                    <li><GoVerified className='fs-4 me-2' style={ { color: "orange" } } />You may build your online business by using a single location-based solution for all of your needs.</li>
                                    <li><GoVerified className='fs-4 me-2' style={ { color: "orange" } } /> We firmly believe in keeping up with the newest technologies and utilising them to introduce additional advancements into our industry.</li>
                                    <li><GoVerified className='fs-4 me-2' style={ { color: "orange" } } />Our innovation team strives for excellence. Our promise is to deliver within the specified timeframe.</li>
                                    <li><GoVerified className='fs-4 me-2' style={ { color: "orange" } } />Creativity can only be driven by passion. Only innovation can make you stand out. Our young, motivated team, which includes project managers, developers, testers, analysts, designers, and writers, is driven to excel. Our staff has a strong understanding of the concept of reciprocal growth. Their life experience ultimately contributes to the success of the firm as a whole, just as the investment helps to their personal growth.</li>
                                    <li><GoVerified className='fs-4 me-2' style={ { color: "orange" } } />Concerned about the post-purchase support? Let us manage your issues. Don't let the occasional new upgrades and changes bother you. Wake us up.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Servicescomponent />
            <Process />
        </>
    )
}

export default Services