
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
    makeJobsGlobal: (jobs) =>
      dispatch({
        type: "ADD-ALL-JOBS",
        payload: jobs,
      }),
  });
 class Home extends Component {
    state={
        position:"",
        location:"",
        joblist:[],
      }

      fetchJobs = async () => {
          
        try {
        
          let position = this.state.position;
          let location = this.state.location;
          let response = await fetch(
            `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&location=${location}`,
            {
              method: "GET",
            }
          );
          if (response.ok) {
            const jobs = await response.json();
            console.log(jobs);
            this.setState({ joblist: jobs });
            this.makeJobsGlobal(jobs)
          }
        } catch (error) {
          console.log(error);
        }
      };
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
                    <Button variant="outline-primary" onClick={this.fetchJobs}>
              Search
            </Button>
                        
                    </Form>

                    <Row className="mt-4 mb-4">
            {this.state.joblist !==[] && this.state.joblist.map((job,index) => (<SingleJob key={index} job={job} />))}
            </Row>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
