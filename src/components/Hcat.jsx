import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hcat() {
    let [cat, setCat] = useState([''])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories').then((res) => res.json()).then((data) => setCat(data))
    }, [])
    return (
        <>
            <ul class="list-group">
                {cat.map((a)=>(
                <li class="list-group-item"><Link to={`/cat/${a}`}> {a}</Link></li>
                ))}
            </ul>
        </>
    )
}
