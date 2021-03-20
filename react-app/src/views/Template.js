import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


import LineChart from "./line charts/Line Chart";


class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">CanvasJS Examples</Navbar.Brand><span className="hidden-xs text-muted">React</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						<Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
								
								<ListGroup.Item>
									<a href="#lineCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>LINE CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="lineCharts">
										<ListGroup.Item> <NavLink to="/line-chart">Line Chart</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								
							</ListGroup>
						</Nav>
					
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route path="/line-chart" component={LineChart}/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;