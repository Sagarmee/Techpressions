import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const FetchApi = () => {

    const [container, setContainer] = useState([])


    const getData = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '95cfff6012msh4ff1286907db1bfp160747jsn2f62d524c999',
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };

        fetch('https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en', options)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setContainer(data.articles)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <div className="row">
                {
                    container.map((item) => {
                        return <div className='col-4 py-3'>
                            <div className="card h-100">
                                <img src={ item.media } className="card-img-top" alt="Hollywood Sign on The Hill" />
                                <div className="card-body">
                                    <h5 className="card-title">{ item.title }</h5>
                                    <p className="card-text">
                                        { item.summary.slice(0, 250) }
                                    </p>
                                </div>
                                <a className='btn btn-danger rounded py-2 text-capitalize' href={ item.link } target="blank">read more</a>
                                <div className="card-footer">
                                    <small className="text-muted">{ new Date(item.published_date).toString() }</small>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default FetchApi
