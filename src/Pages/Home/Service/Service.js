import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { title, img } = props.service;
    return (
        <div>
            <Col>
                <Card className='shadow h-100 service-card rounded'>
                    <Card.Img className='mx-auto service-img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;