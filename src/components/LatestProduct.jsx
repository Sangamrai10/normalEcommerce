import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LatestProduct() {
    let [lp, setLp] = useState([''])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => setLp(data))
    }, [])
    return (
        <div className='row'>
            {lp.map((a) => (
                <div className="col-lg-4">
                    <div className="card">
                    <img src={a.image} className='w-100 sangam' alt="" />
                    <div className="card-body">
                    <p className='pt-3 fw-bold'>{a.title}</p>
                    <p> $ {a.price}</p>
                    <Link to={`/details/${a.id}`} className='btn btn-sm btn-primary'>Read more</Link>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
