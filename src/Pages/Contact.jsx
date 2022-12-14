import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/contact.css';
import { FaBookReader, FaEnvelope, FaLocationArrow, FaPhone, FaHeadphones, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [mobileno, setmobileno] = useState("")
    const [textarea, settextarea] = useState("")

    const processtheform = (e) => {
        e.preventDefault()

        setfirstname("")
        setlastname("")
        setemail("")
        setmobileno("")
        settextarea("")
    }

    const contact = useLocation()

    return (
        <>
            <header>
                <div className="contact">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item fs-3"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active text-capitalize fs-3" aria-current="page">{ contact.pathname.replace("/", "") }</li>
                        </ol>
                    </nav>
                    <div className="title">
                        <h4 className='text-white text-capitalize fs-1'>contact us</h4>
                    </div>
                </div>
            </header>
            <section id="contact-details">
                <div className="container">
                    <div className="heading d-flex align-items-center justify-content-between">
                        <div className="title">
                            <h4>how can we help?</h4>
                            <p>A good place to enter contact details.</p>
                        </div>
                        <div className="btn btn-quotes">
                            <FaBookReader className='text-white' /><Link to="" id="getqutoes">get quote</Link>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col-12 col-xl-4">
                                <div className="card">
                                    <Link to="" className='d-block fs-2 text-center'><FaPhone /></Link>
                                    <div className="number py-3">
                                        <Link to="" className='d-block text-center'>+91 90993 10295</Link>
                                        <Link to="" className='d-block text-center'>+91 99981 53508</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 mt-xl-0 col-xl-4">
                                <div className="card">
                                    <Link to="" className='d-block fs-2 text-center'><FaEnvelope /></Link>
                                    <div className="number py-3">
                                        <Link to="" className='d-block text-center'>web@techpressions.com</Link>
                                        <Link to="" className='d-block text-center'>webservices2024@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 mt-xl-0 col-xl-4">
                                <div className="card">
                                    <Link href="" className='d-block fs-2 text-center'><FaLocationArrow /></Link>
                                    <div className="number py-3">
                                        <Link to="" className='d-block text-center'>k-06 Kamplesh Park society, jivaraj park, ahmedabad 380051, gujarat</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="news">
                <div className="container">
                    <div className="news">
                        <h2>Stay Tuned With Our News</h2>

                        <form action="" className='d-flex align-items-center justify-content-between'>
                            <div className="name">
                                <input type="text" size="40" placeholder='name' required />
                            </div>
                            <div className="email">
                                <input type="text" size="40" placeholder='email' required />
                            </div>
                            <div className="btn">
                                <input type="submit" className='px-4' value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section id="inq">
                <div className="container">
                    <div className="row shadow bg-body rounded">
                        <div className="col-12 col-xl-5 left-container">
                            <div className="inner-left">
                                <h4>let's chat</h4>
                                <p>Whether you have a question, want to start a project or simply want to connect.</p>
                                <p>Feel free to send me a message in the contact form</p>
                            </div>
                        </div>
                        <div className="col-12 col-xl-7 right-container">
                            <h4 className='text-center text-capitalize mt-3'>contact</h4>

                            <form action="" className='py-0 py-xl-5 px-0 px-xl-5' onSubmit={ processtheform }>
                                <div className='identy d-flex justify-content-between align-items-center'>
                                    <div className="firstname">
                                        <label htmlFor="firstname" className='d-block'>Full Name</label>
                                        <input type="text" name='firstname' value={ firstname } onChange={ (e) => setfirstname(e.target.value) } id="firstname" placeholder='Enter Your First Name' autoComplete='off' />
                                    </div>
                                    <div className="lastname">
                                        <label htmlFor="lastname" className='d-block'>Last Name</label>
                                        <input type="text" name='lastname' value={ lastname } onChange={ (e) => setlastname(e.target.value) } id="lastname" placeholder='Enter Your Last Name' autoComplete='off' />
                                    </div>
                                </div>
                                <div className='identy d-flex justify-content-between align-items-center'>
                                    <div className="email">
                                        <label htmlFor="email" className='d-block'>Email</label>
                                        <input type="email" name="email" value={ email } onChange={ (e) => setemail(e.target.value) } id="email" placeholder='Enter Your Email' autoComplete='off' />
                                    </div>
                                    <div className="mobileno">
                                        <label htmlFor="mobile" className='d-block'>Mobile No</label>
                                        <input type="number" name='mobile' onChange={ (e) => setmobileno(e.target.value) } value={ mobileno } id="number" autoComplete='off' />
                                    </div>
                                </div>
                                <div className="text mt-3">
                                    <label htmlFor="message" className='d-block'>Messege</label>
                                    <textarea name="messege" value={ textarea } onChange={ (e) => settextarea(e.target.value) } id="messege" cols="70" rows="4" autoComplete='off'></textarea>
                                </div>
                                <button className='btn btn-danger text-capitalize'>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="parrlex">
                <div className="showcase">
                    <div className="container">
                        <div className="call-to-action">
                            <strong>do you <FaHeart className='text-danger' /> like <span> our work</span></strong>
                            <Link to="" className="contact">
                                <FaHeadphones className='headphone' />
                                <Link to="">contact now</Link>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact