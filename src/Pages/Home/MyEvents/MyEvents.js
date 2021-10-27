import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyEvents = () => {
    const [services, setServices] = useState([]);
    const { email } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/myEvent/${email}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [email])
    return (
        <div>
            <h2>my events: {services.description}</h2>
        </div>
    );
};

export default MyEvents;