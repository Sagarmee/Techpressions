import React from 'react'
import { Link } from 'react-router-dom'
import FetchApi from './Blog/fetchApi'
import { useLocation } from 'react-router-dom'

function Blog() {

    const blog = useLocation()

    return (
        <>
            <header>
                <div className="blog">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize" aria-current="page">blog</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-3'>techpressions { blog.pathname.replace("/", "") }</h4>
                    </div>
                </div>
            </header>
            <section id="blog">
                <div className="container">
                    <div className="heading">
                        <h5 className='text-center fs-2 text-capitalize text-center'>the blog</h5>
                    </div>

                    <FetchApi />
                </div>
            </section>
        </>
    )
}

export default Blog
