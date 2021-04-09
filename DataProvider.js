import React, {createContext, useState,useEffect} from 'react';


export const DataContext = createContext();
export const DataProvider = (props) => {
    const [Products, setProducts] = useState([
        {
            "id":"1",
            "title": "Handbag Product 01",
            "images":[
                  "https://www.upsieutoc.com/images/2020/07//18/img1.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img2.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img3.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img4.png"
            ],
            "description":"How to add tutorial videos of cool CSS effects,web Design ideas,javascript libraries, mode,",
            "Content": "Welcome to our channel Dev AT.Here you can learn web designing. U1/UX designing, html CSS tutorial, CSS animations and CSS effects,javascript",
            "colors": ["red","black","teal"],
            "sizes":["xL","L","M","XM","LX"],
            "price": 101,
            "count":1
            },
            {
            "id":"2",
            "title": "Handbag Product 02",
            "images":[
                  "https://www.upsieutoc.com/images/2020/07//18/img2.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img1.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img3.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img4.png"
            ],
            "description":"How to add tutorial videos of cool CSS effects,web Design ideas,javascript libraries, mode,",
            "Content": "Welcome to our channel Dev AT.Here you can learn web designing. U1/UX designing, html CSS tutorial, CSS animations and CSS effects,javascript and jq",            "Cloros": ["red","black","teal"],
            "size   s":["xL","L","M","XM","LX"],
            "price": 102,
            "count":1
            },
            {
            "id":"3",
            "title": "Handbag Product 03",
            "images":[
                  "https://www.upsieutoc.com/images/2020/07//18/img3.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img2.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img1.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img4.png"
            ],
            "description":"How to add tutorial videos of cool CSS effects,web Design ideas,javascript libraries, mode,",
            "content": "Welcome to our channel Dev AT.Here you can learn web designing. U1/UX designing, html CSS tutorial, CSS animations and CSS effects,javascript and jq",
            "colors": ["red","black","teal"],
            "sizes":["xL","L","M","XM","LX"],
            "price": 103,
            "count":1
            },
            {
            "id": "4",
            "title": "Handbag Product 04",
            "images":[
                  "https://www.upsieutoc.com/images/2020/07//18/img4.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img3.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img2.png",
                  "https://www.upsieutoc.com/images/2020/07//18/img1.png"
            ],
            "description": "How to add tutorial videos of cool CSS effects,web Design ideas,javascript libraries, mode,",
            "content": "Welcome to our channel Dev AT.Here you can learn web designing. U1/UX designing, html CSS tutorial, CSS animations and CSS effects,javascript and jq",
            "colors": ["red","black","teal"],
            "sizes": ["xL","L","M","XM","LX"],
            "price": 104,
            "count":1
            }
            
            
    ])

    const [cart,setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !==id
        })
        if(check){
            const data= Products.filter(Product =>{
                return Product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The Product has been added to cart.")
        }
    }

    useEffect(() =>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    },[])


    useEffect(() =>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])

    
    const value = {
        Products: [Products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    return(
        <DataContext.Provider value={value}>
            {props.childern}
        </DataContext.Provider>
    )
}