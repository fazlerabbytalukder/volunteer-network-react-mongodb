import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const RegisterVolnteer = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2>This is register volunteer: {services.title}</h2>
        </div>
    );
};

export default RegisterVolnteer;