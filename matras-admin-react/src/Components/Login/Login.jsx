import React, { useState } from "react";
import Account from "../../Assets/Images/Profile (1).png";
import Lock from "../../Assets/Images/Lock.png";
import "./Login.css";
import { useAuth } from "../../Context/AuthContext";
import UserService from "../../services/userService";

const Login = () =>{
// const [btn,setBtn] = useState("button");
let className ="form-login";
let classNames ="form-password";
const [error, setError] = useState("");
const [token,setToken] = useAuth();

const submit = async (event) =>{
    event.preventDefault();
    const login = event?.target[0]?.value;
    const password =  event?.target[1]?.value;    

    // console.log(login,password)
   
    if(!(login && password)) return;

    let response = await UserService.LoginAccount(login,password);
    
    if(response?.data?.token) setToken(response?.data?.token);

    
}

return (
<div className="login">
    <div className="container">
        <div className="login-box">
            <h2 className="login-title">

                Kirish
            </h2>
            <form className="login-form" onSubmit={submit} method="POST">
                <label className="form-label">
                    <img className="form-account" src={Account} alt="Account" />
                    <input type="password" className={className}  placeholder="Login" name="login"/>

                </label>

                <label className="form-label">
                    <img className="form-lock" src={Lock} alt="Lock" />
                    <input type="password" className={classNames}  placeholder="Parol" name="password"/>

                </label> 

                <button type="submit" className={`form-btn ${error ? error : ""} `} onClick={() => {
                    setError("btn-submit") 
                }} >
                   Kirish
                </button>

            </form>
        </div>
    </div>
</div>

)
}

export default Login;