import React, { Component } from 'react'
import { Card,  Col  } from 'react-bootstrap'
import {AiOutlineHeart } from 'react-icons/ai';

export default class JobPost extends Component {
    render() {

      const {job}=this.props
        return (
            <>
                
                
                    <Col md={2} lg={3}>
                    <Card className="mb-3" className="shadow" style={{ width: 'auto', height:"auto", border:"2px solid beige" }}>
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                      <Card.Text>
                        {job.type}
                      </Card.Text>
                      <Card.Text className="text-muted">
                        {job.location}
                      </Card.Text>
                      <Card.Link>See more</Card.Link>
                      <AiOutlineHeart className="ml-auto"/>
                    </Card.Body>
                  </Card>
                  </Col>

                
                
              
         
         
            </>
        )
    }
}
