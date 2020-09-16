import React from 'react';
import { Button } from 'reactstrap';
import ProfileTabs from './ProfileTabs';

const Profile = ()=>{
    return(
        <div className="container profile-container">
            <div className="row profile-data">
                <div className="col-md-4 col-sm-6 col-12">
                    <img className="profile-image" src="https://www.suntheanine.com/wp-content/uploads/2019/03/taylor-swift-image.jpg"/>
                </div>
                <div className="col-md-8 col-sm-6 col-12">
                    <div className="row">
                        <h4 className="mr-4 pl-3">_serial_escapist   </h4>
                        <Button className="btn btn-sm py-0 px-3 mr-3" color="light" style={{border:"1px solid",paddingTop:"0px"}}>Edit Profile</Button>
                        <div className="mt-1"><a className="setting-button"><i class="fa fa-2x fa-cog" aria-hidden="true"></i>
                        </a></div>
                    </div>
                    <div className="row">
                        <ul className="posts-followers-following">
                            <li>9 posts</li>
                            <li>111 followers</li>
                            <li>223 following</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-2"><h6 style={{textAlign:"start"}}>Shashank</h6></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p style={{textAlign:"start"}}>Hold on to the memories, they will hold on to you.</p></div>
                    </div>
                </div>
            </div>
            <div className="row" style={{justifyContent:"center"}}>
                <ProfileTabs/>
            </div>
        </div>
    )
}

export default Profile