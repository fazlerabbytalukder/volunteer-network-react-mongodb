import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Event from '../Event/Event';

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const { email } = useParams();
    useEffect(() => {
        fetch(`https://infinite-fortress-64339.herokuapp.com/myEvent`)
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