import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Details() {
  let {id}=useParams()
    let [product, setProduct] = useState([''])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()).then((data) => setProduct(data))
    }, [])
  return (
    <div className='container py-3'>
      <h2>Details</h2>
      <div className="row">
        <h2>{product.title}</h2>
      <img width="150" src={product.image} alt="" />
      </div>
    </div>
  )
}
