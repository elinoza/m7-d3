

import React, { Component } from 'react'
import {
   Navbar
  } from "react-bootstrap";
  import {AiOutlineHeart } from 'react-icons/ai';
  import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
class NavBar extends Component  {
    render(){
       
  
  return (
    <>
<Navbar bg="dark" variant="dark" className="mt-4 mb-4">
<Navbar.Brand href="#home">
  <img
    alt=""
    src="/logo.svg"
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{' '}
 Search Your Dream Job!
</Navbar.Brand>

<AiOutlineHeart  onClick={() =>this.props.history.push("/favourites")} className="ml-auto text-white " style={{fontSize:"30px"}} />
</Navbar>

    </>
  );
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));