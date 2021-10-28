import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Event from '../Event/Event';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/myEvent/${user.uid}`)
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, [])
    
    const handleDelete = (id) => {
        // const proceed = window.confirm('Are you sure, you want to delete?');
        // if (proceed) {
            const url = `https://infinite-fortress-64339.herokuapp.com/myEvent/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingVolunteers = myEvents.filter(volunteer => volunteer._id !== id);
                        // console.log(remainingVolunteers);
                        setMyEvents(remainingVolunteers);
                        // window.reload();
                        // window.location.reload();
                    }
                });
        // }
    }
    
    return (
        <Container>
            <Row xs={1} md={3} className="g-3">
            {
                myEvents.map(event => <Col>
                        <Card className='shadow rounded-card border-0'>
                            <Card.Img className='img-fluid w-100' variant="top" src={event.img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{event.service}</Card.Title>
                                <p className='text-center'>{event.email}</p>
                                <p className='text-center'>{event.date}</p>
                                <button onClick={()=>handleDelete(event._id)} className='btn btn-secondary w-100'>Delete</button>
                            </Card.Body>
                        </Card>
                    </Col>)
            }
            </Row>
        </Container>
    );
};

export default MyEvents;