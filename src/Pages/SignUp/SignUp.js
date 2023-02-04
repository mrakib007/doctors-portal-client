import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError,setSignUpError] = useState(null);
    const handleSignUp = (data) =>{
      setSignUpError('');
        createUser(data.email,data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfully');
            //coming form context
            const userInfo = {
              displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(error => console.log(error));
        })
        .catch(error=> {
          console.error(error);
          setSignUpError(error.message);
        });
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
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
            {signUpError && <p className='text-red-500'>{signUpError}</p>}
          </form>
          <p>Already have an account? <Link to="/login" className="text-secondary">Please Login</Link></p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;