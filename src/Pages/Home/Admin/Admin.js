import React from 'react';
import AddEvent from '../AddEvent/AddEvent';
import AllUsers from '../AllUsers/AllUsers';

const Admin = () => {
    return (
        <div>
            <AllUsers></AllUsers>
            <AddEvent></AddEvent>
        </div>
    );
};

export default Admin;