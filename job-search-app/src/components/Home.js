
import React, { Component } from 'react'
import {
    Container,
    Form,
    Button,
    Row
  } from "react-bootstrap";
  import SingleJob from "./SingleJob"

  import { connect } from "react-redux";

  const mapStateToProps = (state) => state;
  
  const mapDispatchToProps = (dispatch) => ({
    setLocation: (location) =>
    // fetch the data
    dispatch(
      {
        type: "SET_LOCATION",
        payload: location,
      }
    ),
    setPosition: (position) =>
    // fetch the data
    dispatch(
      {
        type: "SET_POSITION",
        payload: position,
      }
    ),

      fetchJobswithThunk: (position,location) =>
      dispatch(async (dispatch) => {
        
        let response = await fetch(
          `  /positions.json?description=${position.position}&location=${location.location}`,
          {
            method: "GET",
          }
        );
        const jobs = await response.json();
           
        if (response.ok) {
          
          dispatch({
            type: "ADD-ALL-JOBS",
            payload: jobs,
          })
        } else {
          dispatch(
            {
              type: "SET_ERROR",
              payload: jobs,
            }
          )
        }
      })
  });

 
 class Home extends Component {

   
    render() {
      console.log(this.props.position)
   
        return (
            <Container>

            
                 <Form  className="mt-5  searchBox" >

                    <Form.Group controlId="position">
                    
                        <Form.Control onChange={(e)=>this.props.setPosition(e.currentTarget.value)}  type="text" placeholder="position" />
                    </Form.Group>
                    <Form.Group controlId="location">
                    
                    <Form.Control  onChange={(e)=>this.props.setLocation(e.currentTarget.value)}  type="text" placeholder="location" />
                    </Form.Group>
                    <Button variant="outline-primary" onClick={ ()=> this.props.fetchJobswithThunk(this.props.position,this.props.location)}>
              Search
            </Button>
                        
                    </Form>

                    <Row className="mt-4 mb-4">
            {this.props.joblist.joblist && this.props.joblist.joblist.length > 0 && this.props.joblist.joblist.map((job,index) => (<SingleJob key={index} job={job} />))}
            </Row>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
