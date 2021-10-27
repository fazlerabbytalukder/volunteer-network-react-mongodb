import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Event from '../Event/Event';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const { email } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/myEvent`)
            .then(res => res.json())
            .then(data => setMyEvents(data.filter(vol => vol.email === email)));
    }, [email])
    return (
        <div className='conatiner'>
            <Row xs={1} md={3} className="g-3">
            {
                myEvents.map(event => <Event event={event}></Event>)
            }
            </Row>
        </div>
    );
};

export default MyEvents;