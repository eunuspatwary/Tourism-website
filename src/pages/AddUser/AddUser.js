import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddUser.css'

const AddUser = () => {
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-refuge-76569.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset()
                }
            })
    }

    return (
        <div className="add-services">
            <h2>Please add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <input {...register("key")} placeholder="key" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input  {...register("time")} placeholder="time" />
                <input {...register("img")} placeholder="img" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddUser;