import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const handleAddDoctor = data =>{

    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
              <input type='text' {...register("name",{required:"Name is required"})} className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
              <input type='email' {...register("email",{required: true})} className="input input-bordered w-full max-w-xs" />
              {errors.email && <p className='text-red-500'>{errors.email.messages}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
              <input type='password' {...register("password",{required:"Password is required",
              minLength:{value:6,message:"Password must contain 6 characters"},
              pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
              message: 'Password must have uppercase, number and special characters' }})} 
              className="input input-bordered w-full max-w-xs" />
              {errors.password && <p className='text-red-500'>{errors.password.messages}</p>}
            </div>
            <input className="btn btn-accent w-full mt-4" value='Sign Up' type="submit" />
          </form>
        </div>
    );
};

export default AddDoctor;