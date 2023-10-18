import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const { createUser, updateUser, setUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();


    // EMAIL PASSWORD REGISTRATION
    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Creation Successfull!');
                reset()
                navigate('/login')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        savedUser(data.name, data.email, data.role);
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })

    }

    // GOOGLE LOGIN 
    const handleGoogleLogin = (event) => {
        event.preventDefault()
        //console.log('clicked google');
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('User Creation Successfull!');
                savedUser(user.displayName, user.email, user.role = 'buyer');
                // navigate('/')
            }).catch((error) => {
                setLoginError(error.message)
            });
    }

    // STORE USER DATA FOR NEXT 
    const savedUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (

        <div className='flex justify-center items-center my-32'>
            <div className='w-96 lg:w-1/2  p-7 rounded-2xl shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className='' >
                    <div className="form-control w-full ">
                        <label className="mb-4">Name</label>
                        <input {...register("name", { required: "Please enter your name" })} type="text" placeholder='Enter Your Name' className="input input-bordered w-full" />
                        {errors.name && <label className='text-red-500'>{errors.name?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Email</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" placeholder='Enter Your Email' className="input input-bordered w-full" />
                        {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Password</label>
                        <input {...register("password", { required: "Please enter your password", minLength: { value: 6, message: "please enter atleast 6 charecters" } })} type="password" placeholder='Enter Your Password' className="input input-bordered w-full" />
                        {errors.password && <label className='text-red-500'>{errors.password?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Type Of Your Account</label>
                        <select {...register('role')} className="select select-bordered">
                            <option disabled>Pick Your Type</option>
                            <option>seller</option>
                            <option>buyer</option>
                        </select>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value='SIGN UP' className="input w-full bg-[#FF7A00] text-white mt-2 cursor-pointer" />
                    </div>
                    <p className='text-xs my-[11px] text-center'>Already have an account?  <Link to='/login' className='text-[#FF7A00]'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline border-2 hover:border-none border-[#FF7A00] hover:bg-[#FF7A00] w-full'>CONTINUE WITH GOOGLE</button>
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
            </div >
        </div >
    );
};

export default Register;