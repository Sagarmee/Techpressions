import React from 'react'
import s1 from './images/a1.png'
import s2 from './images/a2.png'
import s3 from './images/a3.png'
import s4 from './images/a4.png'
import s5 from './images/a5.png'
import s6 from './images/a6.png'

function Whyus() {
    return (
        <>
            <section id="whyus">
                <div className="container">
                    <div className="heading">
                        <span>we are incredible</span>
                        <h4>why us</h4>
                    </div>

                    <div className="row boxes">
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s1 } className="img-fluid d-block" alt="" />
                                <span className='text-center py-2'>Customized and individualised IT solutions</span>
                            </div>
                        </div>
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s2 } className="img-fluid d-block" alt="" />
                                <span className='text-center px-2 py-2'>Providing a one-stop-shop for all of your online business needs</span>
                            </div>
                        </div>
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s3 } className="img-fluid d-block" alt="" />
                                <span className='text-center py-2'>utilizing cutting-edge technology</span>
                            </div>
                        </div>
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s4 } className="img-fluid d-block" alt="" />
                                <span className='text-center py-3'>Quality work in prescribed time period</span>
                            </div>
                        </div>
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s5 } className="img-fluid d-block" alt="" />
                                <span className='text-center py-4'>a talented and motivated team</span>
                            </div>
                        </div>
                        <div className="bg-white px-1 shadow-sm bg-body rounded">
                            <div className="box d-flex justify-content-center align-items-center flex-column">
                                <img src={ s6 } className="img-fluid d-block" alt="" />
                                <span className='text-center py-3'>The best post-purchase assistance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus
