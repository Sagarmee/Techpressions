import React, { Component } from 'react'
import html5 from "../images/Technology stack/html.jpg"
import css from '../images/Technology stack/css.jpg'
import javascript from '../images/Technology stack/javasc.jpg'
import bootstrap from '../images/Technology stack/bootstrap.png'
import python from '../images/Technology stack/Python.jpg'
import django from '../images/Technology stack/dj.jpg'
import nodejs from '../images/Technology stack/node.jpg'
import reactjs from '../images/Technology stack/react.jpg'
import angularjs from '../images/Technology stack/angular.jpg'
import vuejs from '../images/Technology stack/vue.jpg'
import mysql from '../images/Technology stack/mysql.jpg'
import sql from '../images/Technology stack/sql.jpg'
import wordpress from '../images/Technology stack/wordpress.jpg'
import php from '../images/Technology stack/php.jpg'
import laravel from '../images/Technology stack/laravel.jpg'
import mongodb from '../images/Technology stack/mongodb.jpg'


export class Hometechstack extends Component {
    render() {
        return (
            <>
                <section id="technologystack">
                    <div className="container">
                        <div className="heading d-flex flex-column justify-content-center align-items-center">
                            <h5>our technology stack</h5>
                            <p className='text-center'>Choosing the right tech stack might be difficult, but our team of expert web developers will guide you in selecting the best technologies for producing a high-quality web application with all the functionality you require.</p>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ html5 } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ css } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ javascript } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ bootstrap } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ python } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ django } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ nodejs } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ reactjs } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ angularjs } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ vuejs } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ mongodb } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ mysql } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ sql } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ wordpress } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ php } alt="html5logo" className='img-fluid' />
                            </div>
                            <div className="col-6 col-md-4 col-xl-2 tech  text-center">
                                <img src={ laravel } alt="html5logo" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Hometechstack