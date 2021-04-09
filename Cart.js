import React,{useContext, useState,useEffect} from 'react'
import {DataContext} from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import {Link} from 'react-router-dom'

export default function Cart(){
    const value = useContext(DataContext)
    const [cart,setCart] = value.cart;
    const [total,setTotal] = useState(0)
    

    useEffect(()=>{
        const getTotal = () =>{
          const res = cart.reduce((prev, item) =>{
              return prev + (item.price * item.count)
          },0)
          setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id =>{
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id =>{
        cart.forEach(item => {
        
            if(item._id === id){
                item.count += 1;
            }
        })
        setCart([...cart])
    }
    
    const removeProducts = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item,index) =>{
              if(item._id === id){
                  cart.splice(index,1)
              }
            })
            setCart([...cart])
        }
    }
    

    if(cart.length === 0)
    return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>
    return(
        <>
        {
            cart.map(Product =>(
               <div className="details cart" key={Product._id}>
                   <div className="img-container" 
                   style={{backgroundImage: `url(${Product.images[0]})`}}   />
                
                 <div className="box-details">
                     <h2 title={Product.title}>{Product.title}</h2>
                     <h3>${Product.price}</h3>
                     <Colors colors={Product.colors} />
                     <Sizes sizes={Product.sizes} />
                     <p>{Product.description}</p>
                     <p>{Product.content}</p>
                     <div className="amount">
                         <button className="count" onClick={() => reduction(Product._id)}> - </button>
                         <span>{Product.count}</span>
                         <button className="count" onClick={() => increase(Product._id)}> + </button>

                     </div>
                     <div className="delete" onClick={() => removeProducts(Product._id)}>X</div>
                 </div>
               </div>
            ))
        }
        <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total: $ {total}</h3>
        </div>
        </>
    )
}