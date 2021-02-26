import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'

import EnhancedTable from './todotable'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col } from 'react-grid-system';

// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";


class TodoRegistration extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            resp: {},
            obj: {},
            header: ''
        }

    }


    titleChangeHandler = (event) => {
        this.setState({ 'title': event.target.value })
    }
    bodyChangeHandler = (event) => {
        this.setState({ 'body': event.target.value })
    }
    handleSubmit = () => {
        debugger;
        this.state.obj = {
            title: this.state.title,
            body: this.state.body,
            userId: 12,
        }
        this.state.header = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }

        alert('data is' + this.state.resp)
    }


    componentDidMount() {


        axios.post('https://jsonplaceholder.typicode.com/todos/', this.state.obj, {
            "headers": this.state.header
        }).then(res => {
            debugger;

            // this.setState({'resp':res.data.id.toString()})
            this.setState({ 'resp': res.data.id })


        }
        ).catch((error) => {
            alert("error occured" + error)
        })
        debugger;

    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4} > </Col>

                        <Col  sm={4} >
                            <form>

                                <h3>Registration </h3>

                                <div className="form-group">
                                    <label>title</label>
                                    <input type="text" onChange={this.titleChangeHandler} className="form-control" placeholder="Enter title" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" onChange={this.bodyChangeHandler} className="form-control" placeholder="Enter body" />
                                </div>


                                <button type="submit" onClick={this.handleSubmit} className="btn btn-dark btn-lg btn-block">submit</button>
                                <p className="forgot-password text-right">
                                    Forgot <a href="#">password?</a>
                                </p>
                            </form>
                        </Col>
                        <Col sm={4}>
                        
                       

                        </Col>
                    </Row>

                </Container>

                <EnhancedTable></EnhancedTable>

            </div>


        )
    }
}
export default TodoRegistration;