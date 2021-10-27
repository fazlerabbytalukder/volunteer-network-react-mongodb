import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <h2 className='text-center text-uppercase mt-5 mb-3'>I grow by helping people in need</h2>
            <div className="input-group mb-3 w-25 mx-auto mb-5">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                <button className ="btn btn-primary" type ="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Banner;