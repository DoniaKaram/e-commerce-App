
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from "../rtk/slices/cart-slice";
function Cart() {
    const carts=useSelector((state)=>state.carts);
    console.log(carts);
    const dispatch=useDispatch();
    const totalPrice=carts.reduce((acc,product)=>{
      acc+=product.price*product.qty;
      return  acc;
    },0)

   return(
    <Container>
      <h1 className="text-center py-5 text-white my-5" >Welcome To Cart</h1>
      <h5 className="text-white">totalPrice:{totalPrice.toFixed(2)}</h5>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantatiy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {carts.map((product)=>(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} style={{width:'100px' }}></Image></td>
          <td>{product.price}$</td>
          <td>{product.qty}</td>
          <td><Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete from cart</Button></td>
        </tr>
      ))}
        
      
      </tbody>
    </Table>
  


    </Container>

   );
 
}

export default Cart;