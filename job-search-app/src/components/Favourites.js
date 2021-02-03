import React, { Component } from "react";

import {Container,Button,Card} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BsFillTrashFill} from 'react-icons/bs';

import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (job) =>
    dispatch({ type: "UNLIKE_JOB", payload: job}),
});

class Favourites extends Component {
  render() {
    console.log(this.props.favourites)
  
   
    return (
      <Container>
      <div className="row">
        
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {this.props.favourites.map((job, i) => (
            <li key={i} className="my-4">
             
              <Card className="shadow d-flex" style={{ width: 'auto', height:"auto", border:"2px solid beige" }}>
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                      <Card.Text>
                        {job.type}
                      </Card.Text>
                      <Card.Text className="text-muted d-flex ">
                        {job.location}
                        <Button
                        variant="danger"
                        className="ml-auto"
                        onClick={() => this.props.removeFromFavourites(job)}
                      >
                        <BsFillTrashFill id="trashIcon" />
                      </Button>
                      </Card.Text>
                  
                    </Card.Body>
                 
                  </Card>
              

            </li>
          ))}
        </ul>
       
      </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);