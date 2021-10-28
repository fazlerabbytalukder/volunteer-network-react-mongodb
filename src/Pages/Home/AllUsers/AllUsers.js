import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllUser from '../AllUser/AllUser';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://infinite-fortress-64339.herokuapp.com/myEvent')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center my-4'>Users Information</h3>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Reg. Date</th>
                        <th>Service Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    users.map(user => <AllUser user={user}></AllUser>)
                }
            </Table>
        </div>
    );
};

export default AllUsers;