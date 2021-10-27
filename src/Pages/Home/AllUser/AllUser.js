import React from 'react';

const AllUser = (props) => {
    const { service,name,email,date } = props.user;
    return (
        <div>
            <table className="table">
                <tbody>
                    <tr className='text-center'>
                        <th>{name}</th>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>{service}</td>
                        <td><button className='btn btn-secondary'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;