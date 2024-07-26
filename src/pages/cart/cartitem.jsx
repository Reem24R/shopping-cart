// import React from 'react'
import { Card,Col,Button } from 'react-bootstrap'
// import React from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from "../../context/productContext";
import { useContext } from 'react';
CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CartItem({ data }) {
  const { id,productName, productImage,price } = data;
  const {  DeleteFromCart,cartitems } = useContext(ShopContext);
const cartItemCount=cartitems[id];
  return (
    <div>
      <Col>
        <Card style={{ width: '18rem', height:'20rem' }}>
          <Card.Img variant="top" src={productImage} style={{height:'8rem'}} />
          <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Title>{price}</Card.Title>
          </Card.Body>
          <Button onClick={()=>DeleteFromCart(id)}>Remove From Cart <> ({cartItemCount})</></Button>
        </Card>
      </Col>
    </div>
  );
}
