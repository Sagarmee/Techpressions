import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Career() {

    const career = useLocation()

    return (
        <>
            <header>
                <div className="career">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">career</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>techpressions { career.pathname.replace("/", "") }</h4>
                    </div>
                </div>
            </header>
            <div className="py-3">
                <h1 className='text-capitalize text-center'>coming soon</h1>
            </div>
        </>
    )
}

export default Career