import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import  {fetchProducts}  from "../rtk/slices/product-slices";
import { addToCart } from "../rtk/slices/cart-slice";
import { addToFav } from "../rtk/slices/favourites-slice";
import '../style.css'
function Home() {
  const products=useSelector((state)=>state.products)
  console.log(products);
    const dispatch=useDispatch();
    
    useEffect(()=>{
      dispatch(fetchProducts());
    },[]);
   return (
      <Container className="py-5" >
      <Row className="py-5" >
      {products.map((product)=>(
        <Col key={product.id} className="py-2" >
         <Card style={{ width: '18rem' }} className="text-center" >
        <Card.Img variant="top" src={product.image}  />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Card.Text>
            {product.category}
          </Card.Text>
          <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
          <Button variant="primary" className="ms-2" onClick={()=>dispatch(addToFav(product))}>Add to Fav</Button>


        </Card.Body>
      </Card>
      
         </Col>
      ))}
         
         
      </Row>

      </Container>
      
    );
 
}

export default Home;