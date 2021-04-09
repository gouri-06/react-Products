import React, {useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

export default function Products(){
  const value= useContext(DataContext)
    const [Products] = value.Products
    const addCart = value.addCart
    return(
        <div className="products">
            {
                Products.map(Product =>(
                    <div className="card" key={Product._id}>
                    <Link to={`/Products/${Product._id}`}>
                      <img src={Product.images[0]} alt=""/>
                    </Link>
                    <div className="box">
                      <h3 title={Product.title}>
                        <Link to={`/Products/${Product._id}`}>{Product.title}</Link>
                      </h3>
                      <p>{Product.description}</p>
                      <h4>${Product.price}</h4>
                      <button onClick={() => addCart(Product._id)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
    
                ))
            }
         </div>  
    )
}