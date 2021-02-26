import React from 'react'
import {useHistory,useLocation,useParams} from "react-router-dom"

export default function Welcome() {

    const history = useHistory();
    const location=useLocation();
    const paramms=useParams();
    const {role}=paramms;
    return (
        <div>
            <h1>Welcome to home page</h1>
            <h2>location:{location.pathname}</h2>
            <h2>role:{role}</h2>

            <input type="button" value="go back" onClick={()=>history.goBack()}></input>
        </div>
    )
}

