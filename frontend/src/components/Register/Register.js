import React, {useState} from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""

    })

    const handleChange = e => {
        
        const{ name,value } = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const Register = () => {
        const { name, email, password, reEnterPassword } = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:6500/register", user)
            .then( Response => {
                alert(Response.data.message)
                Navigate('/login')
            })
        }else{
            alert("Invalid Entry")
        }
    }

    return(
        <div className="Register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Register}>Register</div>
            <div>or</div>
            <div className="button"  onClick={ () => Navigate('/login')}>Login</div>
        </div>
        
    )
}

export default Register