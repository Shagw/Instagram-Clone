import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link}  from 'react-router-dom'

const CreatePost = (props) => {
  return (
    <div className="container">
            <div className="row card-body-signup" >
                <div>
                    <Card body>
                        <CardTitle className="insta-logo-signup">Instagram</CardTitle>
                        <CardText style={{textAlign:"center"}} className="px-4">Upload Photos, Videos</CardText>
                        <span className="px-4">
                        {/* <Button className="btn btn-sm" color="primary" block>
                            <span className="fb-button">
                                    <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com">
                                        <i className="fa fa-file" aria-hidden="true"></i>
                                    </a>
                            </span>
                            Browse Files  
                        </Button> */}
                        <Input type="file" accept="images/*"/>
                        </span>
                        <Form className="px-4">
                            <FormGroup >
                                <Input type="text" name="title" required/>
                                <Label>Title</Label>
                            </FormGroup>
                            <FormGroup >
                                <Input type="text" name="caption" required/>
                                <Label>Caption</Label>
                            </FormGroup>
                            <Button className="btn btn-sm" color="primary" block>Upload</Button>
                        </Form>
                    </Card>
                    <div className="py-2"></div>
                    <Card body style={{paddingTop:"20px"}}>
                        <CardText style={{textAlign:"center"}}>If not logged in??<Link className="ml-1" to="/signin">Log in</Link></CardText>
                    </Card>
                </div>
            </div>
        </div>
  );
};

export default CreatePost;