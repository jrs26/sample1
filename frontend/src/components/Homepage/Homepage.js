import React from "react";
import "./Homepage.css";

const Homepage = ({setLoginUser}) => {
    return(
        <div className="Homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={ () => setLoginUser({})}> Logout</div>    
        </div>
    )
}

export default Homepage