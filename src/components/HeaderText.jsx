import React from 'react'


function HeaderText(props) {


    return (
        <>
            <div className="showcase-text">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-text">
                            <div className="heading text-white">
                                <h2 className='text-capitalize'>{ props.heading }  </h2>
                            </div>
                            <div className="short-text mt-0 mt-lg-1">
                                <p>{ props.secondinfo }</p>
                            </div>
                            <div className="short-info mt-0 mt-lg-4">
                                <p>{ props.shortinfo }</p>
                            </div>
                            <div className="btn-call mt-0 mt-lg-5">
                                <a href="tel" className='btn text-decoration-none'>{ props.btn }</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-img">
                            <img src={ props.imagepath } alt="vector-img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderText
