import React, { useEffect, useState } from 'react';
import AllUser from '../AllUser/AllUser';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://infinite-fortress-64339.herokuapp.com/myEvent')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h3 className='text-center my-4'>Users Information</h3>
            {
                users.map(user => <AllUser user={user}></AllUser>)
            }
        </div>
    );
};

export default AllUsers;