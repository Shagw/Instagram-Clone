import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link}  from 'react-router-dom'


const Login = ()=>{
    return(
        <div className="container">
            <div className="row" >
                <div className="col-md-6 floated-div">
                    <img style={{width:"550px",height:"500px",marginTop:"30px"}} src="https://goodmockups.com/wp-content/uploads/2017/10/Free-Instagram-iPhone-Android-UI-Feed-Screen-Mockup-PSD-Template-File.jpg"/>
                </div>
                <div className="col-md-5 col-12 card-body" style={{padding:"29px"}}>
                    <Card body>
                        <CardTitle className="insta-logo">Instagram</CardTitle>
                        <Form className="px-4">
                            <FormGroup >
                                <Input type="text" name="email" id="Email" required/>
                                <Label>Phone number, username or email</Label>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="Password" required/>
                                <Label>Password</Label>
                            </FormGroup>
                            <Button className="btn btn-sm" color="primary" block>Log In</Button>
                        </Form>
                        <div className="row px-4">
                            <div className="col-5"><hr/></div>
                            <div className="col-2" style={{padding:"5px",fontSize:"13px",textAlign:"center"}}><span>OR</span></div>
                            <div className="col-5"><hr/></div>
                        </div>
                        
                        <div style={{textAlign:"center"}} className="py-2">
                            <Link style={{textDecoration:"none",color:"#4267B2"}}>
                                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com">
                                        <i className="fa fa-facebook-official"></i>
                                    </a>
                                    Log in with Facebook
                            </Link>
                        </div>
                        <div style={{textAlign:"center",fontSize:"12px"}} className="pb-1"><Link style={{textDecoration:"none",color:"#4267B2"}}>Forgot password?</Link></div>
                    </Card>
                    <div className="py-2"></div>
                    <Card body style={{paddingTop:"20px"}}>
                        <CardText style={{textAlign:"center"}}>Don't have an account?<Link to="/signup">Sign Up</Link></CardText>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login