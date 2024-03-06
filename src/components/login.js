import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
function Login() {
    const email=useRef();
    const password=useRef();
    const localEmail=localStorage.getItem('email');
    const localPassword=localStorage.getItem('password');
    var IsLogged=localStorage.getItem('islogged');
    const [showHome,setShowHome]=useState(false);
    const SignIn=(e)=>{
        e.preventDefault();
        if(localEmail==email.current.value&&localPassword==password.current.value)
        {
            IsLogged=true;
            console.log(IsLogged);
            localStorage.setItem('islogged',IsLogged)
            setShowHome(true);
            alert("Logged successfully!")
           
            
            

        }

    };
   
   return(
   
    
    <div className=" w-100 vh-100 bg-primary">
    {showHome?<Home/>:<div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary">
    <div className="w-50 p-5 rounded bg-white">
    <form>
        <h3 className="text-center">Login</h3>
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
        <button className="btn btn-primary" onClick={SignIn}>Sign In</button>
        </div>
        <p className="text-end mt-2">

        Forget<a href="" className="ms-2">Password</a><Link to="/" className="ms-2">SignIn</Link>


        </p>

    </form>
    
</div>
    
    </div>
    }
</div>
   );
 
}

export default Login;