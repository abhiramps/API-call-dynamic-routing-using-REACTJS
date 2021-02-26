import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"




import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-grid-system';



export default function Login() {


    const history = useHistory();

    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState()
    const data = [{
        'userName': 'rono',
        'password': 'rono',
        'role': 'admin'
    },
    {
        'userName': 'messi',
        'password': 'messi',
        'role': 'hr'
    }]

    let userNameChangeHandler = (e) => {
        setuserName(e.target.value);
        // debugger
    }
    let passwordbodyChangeHandler = (e) => {
        setpassword(e.target.value)
        // debugger
    }
    let handleSubmit = (e) => {
        debugger;
        // history.push('/Welocme')
        e.preventDefault()
        let cred=data.filter(e=>e.userName ==userName && e.password ==password) 
        if (cred.length>0) {
            debugger;
            history.push("/welcome/"+cred[0].role)

        }
        else {
            seterror('invalid')
        }
    }


    return (

        <div>
            <h1>login</h1>
            <h1>{error}</h1>

            <Container>
                <Row>
                    <Col sm={4} >
                    </Col>




                    <Col sm={4} >
                        <form>

                            <h3>login </h3>

                            <div className="form-group">
                                <label>username</label>
                                <input type="text" onChange={userNameChangeHandler} className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" onChange={passwordbodyChangeHandler} className="form-control" placeholder="Enter password" />
                            </div>


                            <button type="submit" onClick={handleSubmit} className="btn btn-dark btn-lg btn-block">submit</button>
                            {/* <input type="button" value="submit" onClick={Submit}></input> */}
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </Col>
                    <Col sm={4}>


                    </Col>
                </Row>

            </Container>

        </div>
    )
}
