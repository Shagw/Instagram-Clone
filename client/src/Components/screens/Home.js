import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardLink, Input, Label
  } from 'reactstrap';

const Home = ()=>{
    return(
        <div className="container" style={{width:"65%",marginTop:"30px"}}>
            <div className="row">
                <div className="col-lg-8 col-12">
                    <Card style={{height:"100px",marginBottom:"25px"}}>
                        <CardBody>
                        <CardText>Stories</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <div className="card-title-part">
                            <Link><img className="profile-post-image mr-3"/></Link>
                            <Link style={{textDecoration:"none",color:"black"}}>_serial_escapist</Link>
                            <Button className="button-3dots"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Button>
                        </div>
                        <CardImg top width="100%" height="500px" src="https://th.bing.com/th/id/OIP.n2YM1-kFNuh89c9vNROETwHaEK?pid=Api&rs=1" alt="Card image cap" />
                        <div>
                            <Button style={{border:"none",backgroundColor:"white",color:"black",fontSize:"25px"}} className="px-2"><i class="fa fa-heart-o" aria-hidden="true"></i></Button>
                            <Button style={{border:"none",backgroundColor:"white",color:"black",fontSize:"25px"}} className="px-2"><i class="fa fa-comment-o" aria-hidden="true"></i></Button>
                            <Button style={{border:"none",backgroundColor:"white",color:"black",fontSize:"25px"}} className="px-2"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></Button>
                            <Button style={{border:"none",backgroundColor:"white",color:"black",fontSize:"25px",float:"right"}} className="px-2"><i class="fa fa-bookmark-o" aria-hidden="true"></i></Button>

                        </div>
                        <div className="ml-2"><strong>3808 Likes</strong></div>
                        <div className="ml-2">
                            <strong className="mr-2"><Link style={{textDecoration:"none",color:"black"}}>_serial_escapist</Link></strong>
                            caption
                        </div>
                        <div style={{fontSize:"12px",marginTop:"2px",marginLeft:"8px"}}>
                            3 hours ago
                        </div>
                        <hr style={{margin:"0px"}}></hr>
                            <Label className="comment-label">
                                <Input type="text" placeholder="Add a comment...." className="comments"/>
                                <Button className="post-button">Post</Button>
                            </Label>
                    </Card>
                </div>
                <div className="col-lg-4 col-12 suggestions mt-4">
                    <div className="row">
                        <div className="col-3">
                            <Link><img className="suggestion-profile-image mr-3"/></Link>
                        </div>
                        <div className="col-9">
                            <div className="row"><Link style={{textDecoration:"none",color:"black"}}>_serial_escapist</Link></div>
                            <div className="row" style={{fontSize:"13px"}}>Shashank</div>
                        </div>
                    </div>
                    <div className="mt-3 row">
                        <div className="col-8" style={{fontSize:"13px"}}>Suggestions For You</div>
                        <div className="col-4 ml-auto" style={{fontSize:"13px"}}>See All</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home