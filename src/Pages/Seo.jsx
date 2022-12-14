import React from 'react'
import { Link, useLocation } from "react-router-dom"

function Seo() {

    const seo = useLocation()

    return (
        <>
            <header>
                <div className="seo">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize" aria-current="page">{ seo.pathname.replace("/", '') }</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>techpressions { seo.pathname.replace }</h4>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Seo