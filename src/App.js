import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import img1 from './assets/5.jpg'
import img2 from './assets/7.jpg'
import img3 from './assets/8.jpg' 
import {Link} from 'react-router-dom';
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
class App extends Component{
  render(){
    return <><div>
          <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
          <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/fetch">Find</Link></Nav.Link>
            <Nav.Link><Link to="/">Logout</Link></Nav.Link>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
          </Nav> 
          </Navbar.Collapse>
          </Navbar>
            </div>
          <div className="App">
          <Slide {...properties}>
                <div>
                    <img src={img1} style={{width:'800px'}} style={{height:'800px'}}/>
                    
                </div>
                <div>
                    <img src={img2} style={{width:'800px'}} style={{height:'800px'}} />
                    
                </div>
                <div>
                    <img src={img3} style={{width:'800px'}} style={{height:'800px'}} />
                </div>
            </Slide>
            </div>
    

          </>
  }
}
export default App;

