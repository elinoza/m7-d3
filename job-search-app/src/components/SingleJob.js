import React, { Component } from 'react'
import { Card,  Col  } from 'react-bootstrap'
import {AiOutlineHeart } from 'react-icons/ai';
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  likeTheJob: (id) =>
    dispatch({
      type: "LIKE_A_JOB",
      payload: id,
    }),
});

class JobPost extends Component {
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
                      <Card.Link onClick={() => this.props.likeTheJob(job.id)} >See more</Card.Link>
                      <Card.Link><AiOutlineHeart onClick={() => this.props.likeTheJob(job.id)} className="ml-auto"/></Card.Link>
                      
                    </Card.Body>
                  </Card>
                  </Col>

                
                
              
         
         
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobPost);
