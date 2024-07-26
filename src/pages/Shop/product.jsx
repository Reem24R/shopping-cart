import { useContext } from "react";
import { ShopContext } from "../../context/productContext";
import { Col, Button } from "react-bootstrap";

export const Product = (props) => {
  const { AddToCart, cartitems } = useContext(ShopContext);
//   eslint-disable-next-line react/prop-types
  const { id, price, productImage, productName } = props.data;
  const cartItemCount = cartitems[id];
  return (
    <div>
      <Col
        key={id}
        className="flex flex-col justify-between m-3 border-b-4  bg-slate-100"
        style={{ width: "18rem" , height:'20rem'}}
      >
        <img src={productImage} alt="img" style={{height:'10rem'}} />
        <h2 className="text-2xl">{productName}</h2>
        <p className="text-xl">{price}</p>
        <div>
          <Button onClick={() => AddToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </Button>
        </div>
          <div>
           
        </div>
      </Col>
    </div>
  );
};
export default Product;
 {/* <div className="flex justify-center items-center">
              <Button variant="primary" onClick={() => AddToCart(id)}>
                <i className="fa-solid fa-plus"></i>
              </Button>
              <h1 className="mx-4">{cartitems} in the Cart</h1>
              <Button variant="primary" onClick={() => DeleteFromCart(id)}>
                <i className="fa-solid fa-minus"></i>
              </Button>
            </div>
            <Button variant="danger">Remove</Button>
          </div> */}