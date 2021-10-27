import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';



const Service = (props) => {
    const { _id, title, img } = props.service;
    const history = useHistory();

    const handleEventClick = () => {
        history.push(`/services/${_id}`);
    }
    const randomColor = "#" + (Math.floor(Math.random() * 16777215).toString(16));
    return (
        <div>
            <Col>
                <Card onClick={handleEventClick} className='shadow h-100 service-card rounded-card' style={{backgroundColor:randomColor}}>
                    <Card.Img className='img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;