import React, { useEffect, useState } from 'react';

const AllUser = (props) => {
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        fetch('https://infinite-fortress-64339.herokuapp.com/myEvent')
            .then(res => res.json())
            .then(data => setMyEvents(data))
    }, []);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://infinite-fortress-64339.herokuapp.com/myEvent/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingVolunteers = myEvents.filter(volunteer => volunteer._id !== id);
                        setMyEvents(remainingVolunteers);
                        // window.reload();
                        window.location.reload();
                    }
                });
        }
    }


    const { _id,service,name,email,date } = props.user;
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr className='text-center'>
                        <th>{name}</th>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>{service}</td>
                        <td><button onClick={()=>handleDelete(_id)} className='btn btn-secondary'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;