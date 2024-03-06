import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useEffect,useRef, useState } from "react";
import Login from './login';
function SignUp() {
    const fname=useRef();
    const lname=useRef();
    const email=useRef();
    const password=useRef();
    const localSignUp=localStorage.getItem("signUp");
    var  islogged=false;
    const [showLogin,setShowLogin]=useState(false);
    useEffect(()=>{

        if(localSignUp)
        {
            setShowLogin(true);

            
        }
    });
const handleClick=(e)=>{
    e.preventDefault();
    console.log(fname.current.value,lname.current.value,email.current.value,password.current.value);
    if(fname.current.value&&lname.current.value&&email.current.value&&password.current.value)
    {
        localStorage.setItem("fname",fname.current.value);
        localStorage.setItem("lname",lname.current.value);
        localStorage.setItem("email",email.current.value);
        localStorage.setItem("password",password.current.value);
        localStorage.setItem("signUp",email.current.value);
        localStorage.setItem("islogged",islogged);
        alert("Created successfully!")
        window.location.reload();
    }
}
    return(
        
        <div className="signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary" >
        {showLogin?<Login/>:
        <div className="w-50 p-5 rounded bg-white">
        <form>
            <h3 className="text-center">Sign Up</h3>
            <div className="mb-2">
            <label >First Name</label>
            <input type="text" placeholder="Enter First Name" className="form-control" ref={fname}/>
            </div>
            <div className="mb-2">
            <label >Last Name</label>
            <input type="text" placeholder="Enter last Name" className="form-control"  ref={lname}/>
            </div>
            <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control" ref={email}/>
            </div>
            <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" ref={password}/>
            </div>
            <div className="mb-2">
            <input type="checkbox" placeholder="Enter Password" className="custom-control custom-checkbox" id="check"/>
            <label htmlFor="check" className="custom-input-label ms-2">Remember Me</label>
            </div>
            <div className="d-grid">
            <button className="btn btn-primary" onClick={handleClick}>Sign Up</button>
            </div>
            <p className="text-end mt-2">
    
            Already Registered<Link to="/login" className="ms-2">SignIn</Link>
    
    
            </p>
    
        </form>
    
    </div>
        }
        </div>
        
       );
 
}

export default SignUp;