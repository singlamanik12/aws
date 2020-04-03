import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ss from "./logo.jpg";
class Nav extends Component{
    render()
    {
        return<>
          <nav class="navbar navbar-expand-lg bg-dark ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
<img src={ss} style={{width:"100px"}}></img>&nbsp;&nbsp;<h4 style={{color:"green"}}>Express-Food</h4>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <Link to="/"><button class="btn btn-outline-success my-2 my-sm-0">logout</button></Link>&nbsp;&nbsp;&nbsp;
    </form>
  </div>
</nav>
          </>
    }
}
export default Nav;