import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
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
				
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
								<ListGroup>
									<ListGroup id="lineCharts">
										<ListGroup.Item> <NavLink to="/line-chart"><button type="button">Line Chart</button></NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
							
						
							<Container>
								<div className="content">
									<Route path="/line-chart" component={LineChart}/>
								</div>
							</Container>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;