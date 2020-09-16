import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const ProfileTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div> 
      <Nav tabs className="tabs1">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' }),"tab"}
            onClick={() => { toggle('1'); }}
          >
            <i className="fa fa-th mr-1" aria-hidden="true"></i>
            POSTS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' }),"tab"}
            onClick={() => { toggle('2'); }} 
          >
            <i className="fa fa-video-camera mr-1" aria-hidden="true"></i>
                IGTV
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' }),"tab"}
            onClick={() => { toggle('3'); }} 
          >
            <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i>
            SAVED
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink 
            className={classnames({ active: activeTab === '4' }),"tab"}
            onClick={() => { toggle('4'); }} 
          >
           <i className="fa fa-user mr-1" aria-hidden="true"></i>
                TAGGED
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="gallery">
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
                        <img  className="item" src="https://images.hellogiggles.com/uploads/2018/08/15062417/taylor-swift-reputation-tour-e1534339494618.jpg"/> 
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h4>IGTV VIDEO</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>SAVED</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>TAGGED</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default ProfileTabs;