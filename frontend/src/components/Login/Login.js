import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        
        const{ name,value } = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const Login = () =>{
        axios.post("http://localhost:6500/login", user)
        .then( Response => {
                            alert(Response.data.message)
                            setLoginUser(Response.data.user)
                            Navigate('/')
                        })
    }




    return(
        <div className="Login">
            <h1>Login</h1>
            <input type="text"  name="email" value={user.email} placeholder="Enter Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Login}>Login</div>
            <div>or</div>
            <div className="button" onClick={ () => Navigate('/register')}>Register</div>
        </div>
    )
}

export default Login