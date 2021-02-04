

import React, { Component } from 'react'
import {
   Navbar
  } from "react-bootstrap";
  import {AiFillHeart } from 'react-icons/ai';
  import { GiDreamCatcher } from 'react-icons/gi';
  import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = (state) => state;
class NavBar extends Component  {
    render(){
       
  
  return (
    <>
<Navbar bg="dark" variant="dark" className="mt-4 mb-4">
<Navbar.Brand href="#home">
<GiDreamCatcher className="mr-5"/>
 Search Your Dream Job!
</Navbar.Brand>

<AiFillHeart onClick={() =>this.props.history.push("/favourites")} className="ml-auto text-white " style={{fontSize:"30px"}} />
</Navbar>

    </>
  );
    }
}
export default withRouter(connect(mapStateToProps)(NavBar));