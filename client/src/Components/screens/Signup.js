import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link}  from 'react-router-dom'


const Signup = ()=>{
    return(
        <div className="container">
            <div className="row card-body-signup" >
                <div>
                    <Card body>
                        <CardTitle className="insta-logo-signup">Instagram</CardTitle>
                        <CardText style={{textAlign:"center"}} className="px-4">Sign up to see photos and videos from your friends.</CardText>
                        <span className="px-4">
                        <Button className="btn btn-sm" color="primary" block>
                            <span className="fb-button">
                            <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com">
                                        <i className="fa fa-facebook-official"></i>
                                    </a>
                            </span>
                            Log in with Facebook
                        </Button>
                        </span>
                        
                        <div className="row px-4 py-2">
                            <div className="col-5"><hr/></div>
                            <div className="col-2" style={{padding:"5px",fontSize:"13px",textAlign:"center"}}><span>OR</span></div>
                            <div className="col-5"><hr/></div>
                        </div>
                        <Form className="px-4">
                            <FormGroup >
                                <Input type="email" name="email" id="Email" required/>
                                <Label>Mobile Number or Email</Label>
                            </FormGroup>
                            <FormGroup >
                                <Input type="text" name="name" id="name" required/>
                                <Label>Full Name</Label>
                            </FormGroup>
                            <FormGroup >
                                <Input type="text" name="username" id="username" required/>
                                <Label>Username</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="Password" required/>
                                <Label>Password</Label>
                            </FormGroup>
                            <Button className="btn btn-sm" color="primary" block>Sign Up</Button>
                        </Form>
                        <CardText style={{textAlign:"center",fontSize:"11px",paddingTop:"8px"}} className="px-4">By signing up, you agree to our Terms , Data Policy and Cookies Policy.</CardText>
                    </Card>
                    <div className="py-2"></div>
                    <Card body style={{paddingTop:"20px"}}>
                        <CardText style={{textAlign:"center"}}>Have an account?<Link to="/signin">Log in</Link></CardText>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Signup