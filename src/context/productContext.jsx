/* eslint-disable react/prop-types */
// import React from 'react'
// import { useContext } from "react"
import PRODUCTS from "../dat/products"
import { createContext, useState } from "react"

export const ShopContext=createContext(null)
function GetContext(){
  let cart={};

  for(let i=1; i<PRODUCTS.length+1;i++)
  {
    cart[i]=0;
  }
  return cart;
}

export default function ShoppingProvider(props) {
  const [cartitems,setcartitems]=useState(GetContext())

 const AddToCart=(itemid)=>
  {
  setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
  }
  const DeleteFromCart=(itemid)=>{
    setcartitems((prev)=>({...prev,[itemid] : prev[itemid]-1}))
  }
  const items={cartitems,AddToCart,DeleteFromCart}
  
  console.log(cartitems)
  return (
    <ShopContext.Provider value={items}>
      
      {props.children}
    </ShopContext.Provider>
  )
}
