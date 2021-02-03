import React, { Component } from "react";

import {Container,Button} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BsFillTrashFill} from 'react-icons/bs';

import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (id) =>
    dispatch({ type: "UNLIKE_JOB", payload: id }),
});

class Favourites extends Component {
  render() {
    console.log(this.props.favourites)
  
   
    return (
      <Container>
      <div className="row">
        HELLO
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {this.props.favourites.map((job, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => this.props.removeFromFavourites(job.id)}
              >
                <BsFillTrashFill id="trashIcon" />
              </Button>
           
              {job}
              {/* {job.company}
              {job.location} */}

            </li>
          ))}
        </ul>
       
      </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);