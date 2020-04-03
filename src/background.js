import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
class Back extends Component{
    render()
    {
        return<>
          <footer class="page-footer font-small pt-4" style={{background:"#8B9191"}}>
<div class="container-fluid text-center text-md-left">
  <div class="row">
    <div class="col-md-6 mt-md-0 mt-3">
      <h5 class="text-uppercase"><b>About Us :-</b></h5>
      <p>Express Food is basically a website which enables a user to find the<br></br> restaurants in a respective city.After Searching for a respective <br></br>restaurant user can order his food.<br></br>Our Team is comprised of Aditya and Anshul Jindal.<br></br>Both has B.tech in Computer Science from Chitkara University.   </p>

    </div>

    <hr class="clearfix w-100 d-md-none pb-3"/>
    <div class="col-md-3 mb-md-0 mb-3">
      <h5 class="text-uppercase">Links</h5>

      <ul class="list-unstyled">
        <li>
          <a href="https://en-gb.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/login">Twitter</a>
        </li>
        <li>
          <a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Gmail</a>
        </li>
      </ul>


    </div>
  </div>
</div>
<div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
<div class="footer-copyright text-center py-3">© 2020 Copyright:
</div>
</footer>
          </>
    }
}
export default Back;
