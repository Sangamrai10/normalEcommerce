import React from 'react'
import Hcat from '../components/Hcat'
import LatestProduct from '../components/LatestProduct'
import Hehe from './Hehe'

export default function Home() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
            <div className="col-lg-3">
              <Hcat/>
            </div>
            <div className="col-lg-9">
              <img className='w-100' src="https://icms-image.slatic.net/images/ims-web/ad424e22-66e0-4965-9252-24d311804dca.jpg" alt="" />
            </div>
        </div>
        <h2 className='py-4 text-center'>latest product</h2>
        <LatestProduct/>
        <Hehe/>
      </div>
    </>
  )
}

