import React,{useContext, useState,useRef} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import {Link} from 'react-router-dom'

export default function Details(){
    const {id} =useParams();
    const value = useContext(DataContext)
    const [Products] = value.Products
    const addCart= value.addCart
    
    const [index, setIndex] =useState(0)
    const imgDiv = useRef();

    const details = Products.filter((Product, index) =>{
        return Product._id === id
    })

    const handleMouseMove = e =>{
        const {left, top, width, height} =e.target.getBoundingClientRect();
        const x= (e.pageX -left) / width * 100
        const y= (e.pageY -top) / height * 100
        imgDiv.current.style.backgroundPosition =`${x}% ${y}%`
    }
    
    return(
        <>
        {
            details.map(Product =>(
               <div className="details" key={Product._id}>
                   <div className="img-container" onMouseMove={handleMouseMove}
                   style={{backgroundImage: `url(${Product.images[index]})`}} ref={imgDiv}  
                    onMouseLeave={() => imgDiv.current.style.backgroundPosition ="center"}/>
                 <div className="box-details">
                     <h2 title={Product.title}>{Product.title}</h2>
                     <h3>${Product.price}</h3>
                     <Colors colors={Product.colors} />
                     <Sizes sizes={Product.sizes} />
                     <p>{Product.description}</p>
                     <p>{Product.content}</p>
                     <DetailsThumb images={Product.images}  setIndex={setIndex}/>
                     <Link to="/cart" className="cart" onClick={() => addCart(Product._id)}>
                         Add to cart
                     </Link>
                 </div>
               </div>
            ))
        }
        </>
    )
}