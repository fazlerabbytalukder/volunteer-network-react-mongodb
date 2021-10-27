import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <Row xs={1} md={4} className="g-3">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;