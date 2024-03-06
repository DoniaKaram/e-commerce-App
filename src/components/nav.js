import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNav() {
  var IsLogged=localStorage.getItem('islogged');
  const fname=localStorage.getItem('fname');
  const cart=useSelector((state)=>state.carts );
  const fav=useSelector((state)=>state.fav );
  const logout=()=>{
    localStorage.clear();
    localStorage.setItem('islogged',false)
    window.location.reload();
  }
  return (
    <>
    
    <Navbar expand="lg" className="bg-white" fixed='top'>
      <Container>
        <Link to="/home" className="navbar-brand">Cart-Shop</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {
        IsLogged?
        <Nav className="me-auto"><button onClick={()=>logout()}><Link to="/login">logout</Link></button><Link to="/cart">Welcome-{fname}</Link><Link to="/home">Products</Link>
<Link to="/cart">Cart-{cart.length}</Link>
<Link to="/fav">Favourites-{fav.length}</Link></Nav>: <Nav className="me-auto">
<Link to="/login">login</Link>
<Link to="/signup">Register</Link>

</Nav>}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default AppNav;