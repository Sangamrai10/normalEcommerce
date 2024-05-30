import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Category() {
    let {cid}=useParams()
    let [cat, setCat] = useState([''])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${cid}`).then((res) => res.json()).then((data) => setCat(data))
    }, [])
  return (
    <>
    <div className="container py-3">
<h1 className='text-uppercase'>{cid}</h1>
<div className='row'>
            {cat.map((a) => (
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
    </div>
    </>
  )
}
