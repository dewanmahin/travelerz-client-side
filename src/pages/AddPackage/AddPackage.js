import React from 'react';
import './AddPackage.css';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Package added successfully");
                reset();
            })
    };

    return (
        <div className="addPackage">
            <h1 className="mb-5">Add Package</h1>
            <div className="container w-25">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2 py-2" {...register("picture")} placeholder="image url"/>
                    <input className="form-control mb-2 py-2" {...register("name")} placeholder="Package Name"/>
                    <input className="form-control mb-2 py-2" {...register("desc")} placeholder="Package Description"/>
                    <input className="form-control mb-2 py-2" type="number" {...register("price")} placeholder="Package Price"/>
                    <input className="form-control mb-4 py-2" defaultValue="pending" {...register("status")} />
                    <input className="btn common-btn" type="submit" value="Add"/>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;