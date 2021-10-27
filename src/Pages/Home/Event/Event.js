import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const Event = ({ event }) => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myEvent')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, []);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myEvent/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingVolunteers = volunteers.filter(volunteer => volunteer._id !== id);
                        setVolunteers(remainingVolunteers);
                        // window.reload();
                        window.location.reload();
                    }
                });
        }
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <Col>
                        <Card className='shadow rounded-card border-0'>
                            {/* <Card.Img className='img-fluid w-100' variant="top" src={img} /> */}
                            <Card.Body>
                                <Card.Title className='text-center'>{event.service}</Card.Title>
                                <p className='text-center'>{event.email}</p>
                                <p className='text-center'>{event.date}</p>
                                <button onClick={()=>handleDelete(event._id)} className='btn btn-secondary w-100'>Delete</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default Event;