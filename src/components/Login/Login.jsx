import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Login.css'

import googlelogo from '../../assets/icons/google-logo.png';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const { userLogin, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // EMAIL PASSWORD LOGIN
    const handleLogin = (data) => {
        console.log(data);
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfull!');
                reset()
                navigate('/')
            })
            .catch(error => {
                setLoginError(error.message);
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
                toast.success('User Login Successfull!');

            }).catch((error) => {
                setLoginError(error.message)
            });
    }


    return (
        <div className='flex justify-center items-center my-32'>
            <div className='w-96 lg:w-1/2  p-7 rounded-2xl shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='' >
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Email</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" placeholder='Enter Your Email' className="input input-bordered w-full" />
                        {errors.email && <label className='text-red-500'>{errors.email?.message}</label>}
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="mb-4">Password</label>
                        <input {...register("password", { required: "Please enter your password", minLength: { value: 6, message: "please enter atleast 6 charecters" } })} type="password" placeholder='Enter Your Password' className="input input-bordered w-full" />
                        {errors.password && <label className='text-red-500'>{errors.password?.message}</label>}
                        <label className="text-[10px] text-[#FF7A00] mt-2 cursor-pointer">Forgot Your Password ?</label>
                    </div>
                    <div className="form-control w-full mt-4">
                        <input type="submit" value='LOGIN' className="input w-full bg-[#FF7A00] text-white mt-2 cursor-pointer" />
                    </div>
                    <p className='text-xs my-[11px] text-center'>Don't have an account?  <Link to='/signup' className='text-[#FF7A00]'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline border-2 hover:border-none border-[#FF7A00] hover:bg-[#FF7A00] w-full'>CONTINUE WITH GOOGLE</button>
                    {
                        loginError && <p className='text-red-500'>{loginError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;