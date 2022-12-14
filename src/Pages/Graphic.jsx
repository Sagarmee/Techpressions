import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Graphic() {

    const graphic = useLocation()

    return (
        <>
            <header>
                <div className="graphic">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize" aria-current="page">{ graphic.pathname.replace("/", '') }</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>techpressions { graphic.pathname.replace("/", '') }</h4>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Graphic