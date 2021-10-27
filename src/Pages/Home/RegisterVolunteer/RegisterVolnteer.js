import React, { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './RegisterVolunteer.css';

const RegisterVolnteer = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [serviceId])







    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('http://localhost:5000/regUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order processed successfully');
                    reset();
                }
            })
    };


    return (
        <div>
            <h2 className='text-center mt-5'>Register as a volunteer</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    {
                        services.title && <input defaultValue={services.title} {...register("service")} />
                    }
                    <input placeholder='date' type='date' {...register("date")}/>
                    <textarea placeholder="Description"  type='textarea' className='w-100 mt-4 rounded' {...register("description")}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default RegisterVolnteer;