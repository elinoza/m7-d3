
import React, { Component } from 'react'
import {
    Container,
    Form,
    Button,
    Row
  } from "react-bootstrap";
  import SingleJob from "./SingleJob"



export default class Home extends Component {
    state={
        position:"",
        location:"",
        joblist:[],
      }

      fetchJobs = async () => {
          
        try {
          let proxy = "https://miksflame-observablehq.herokuapp.com/";
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
          }
        } catch (error) {
          console.log(error);
        }
      };
    render() {
        return (
            <Container>

                <h1> SEARCH YOUR DREAM JOB</h1>
            
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

                    <Row>
            {this.state.joblist !==[] && this.state.joblist.map((job,index) => (<SingleJob key={index} job={job} />))}
            </Row>
            </Container>
        )
    }
}
