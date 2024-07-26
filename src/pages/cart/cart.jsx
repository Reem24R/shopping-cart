// import React from 'react'
import PRODUCTS from "../../dat/products";
import { ShopContext } from "../../context/productContext";
import { Row } from "react-bootstrap";
import { useContext } from "react";
import CartItem from "./cartitem";
export default function Cart() {
  const {  cartitems } = useContext(ShopContext);

  return (
    <div>
      <h1 className="text-4xl mb-5">This is your Cart</h1>
      <Row xs={3} className="mt-3">
        {PRODUCTS.map((product) => {
          if(cartitems[product.id]!==0){
           return <CartItem  data={product} key={product.id}/>
          }
        })}
      </Row>
    </div>
  );
}
