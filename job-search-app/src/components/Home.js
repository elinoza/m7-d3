
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
    

      fetchJobswithThunk: () =>
      dispatch(async (dispatch) => {
        // let position = this.state.position;
        // let location = this.state.location;
        let response = await fetch(
          `  /positions.json?description="hr"&location="london",`,
          {
            method: "GET",
          }
        );
        const jobs = await response.json();
            console.log(jobs);
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
    state={
        position:"",
        location:"",
        joblist:[],
      }

      submitForm= () => {
          

        
          let position = this.state.position;
          let location = this.state.location;
 
          this.props.fetchJobswithThunk(position,location)}
       
    render() {
        return (
            <Container>

            
                 <Form  className="mt-5" >

                    <Form.Group controlId="position">
                    
                        <Form.Control onChange={(e)=>this.setState({position:e.currentTarget.value})}  value={this.state.position} type="text" placeholder="position" />
                    </Form.Group>
                    <Form.Group controlId="location">
                    
                    <Form.Control  onChange={(e)=>this.setState({location:e.currentTarget.value})}  value={this.state.location} type="text" placeholder="location" />
                    </Form.Group>
                    <Button variant="outline-primary" onClick={this.props.fetchJobswithThunk}>
              Search
            </Button>
                        
                    </Form>

                    <Row className="mt-4 mb-4">
            {/* {this.state.joblist !==[] && this.state.joblist.map((job,index) => (<SingleJob key={index} job={job} />))} */}
            </Row>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
