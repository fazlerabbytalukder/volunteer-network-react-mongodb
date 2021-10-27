import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
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
            <h2 className='text-center mt-5'>Add Event</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='title' {...register("title")} />
                    <input placeholder='img link' {...register("img")} />
                    <textarea placeholder="Description" type='textarea' className='w-100 mt-4 rounded' {...register("description")} />
                    <input placeholder='date' type='date' {...register("date")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddEvent;