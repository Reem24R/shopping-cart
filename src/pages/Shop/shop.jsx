// import React from 'react'
import PRODUCTS from "../../dat/products";
import Product from "./product";
import {Row} from 'react-bootstrap'
export default function Shop() {
  // let quantiy = 1;
  return (
    <div>
        <h1 className="text-5xl font-bold mt-5">This is Shop</h1>
        <div className="mt-20">
          <Row xs={3} lg={3} className="flex justify-around">
            {PRODUCTS.map((product) => (
             <Product  data={product} key={product.id}/>
            ))}
          </Row>
        </div>
    </div>
  );
}
