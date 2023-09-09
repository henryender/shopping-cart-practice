import React from 'react'
import { Products } from '../product'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
       <header className='header'>
        <h1>Buy Your Courses Now!</h1>
      </header>

      <div className='product-container'>
      {Products.map((product)=><React.Fragment key={product.id}>
      <Product product={product} />
      </React.Fragment>)}
      </div>
    </div>
  )
}

export default Home
