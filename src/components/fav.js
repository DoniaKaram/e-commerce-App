import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Image} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromFav } from "../rtk/slices/favourites-slice";
function Addfavourites() {
    const fav=useSelector((state)=>state.fav);
    console.log(fav);
    const dispatch=useDispatch();
    

   return(
    <Container>
      <h1 className="text-center py-5 text-white my-5" >Welcome To Fav</h1>
      
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {fav.map((product)=>(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} style={{width:'100px' }}></Image></td>
          <td>{product.price}$</td>
          <td><Button variant="danger" onClick={()=>dispatch(deleteFromFav(product))}>Delete from fav</Button></td>
        </tr>
      ))}
        
      
      </tbody>
    </Table>
  


    </Container>

   );
 
}

export default Addfavourites;