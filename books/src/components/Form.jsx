import React, { useState,useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../context/ParentContext'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const { setSignup } = useContext(AppContext)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()
    const passwordRegexPattern = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~])[\w!@#$%^&*()_+{}[\]:;<>,.?/~]{10,}$/;
    const emailRegexPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const FormSubmitHandler = (data) => {
        toast("Registration successful", { theme: "light" })
        console.log(data)
        localStorage.setItem("userData",JSON.stringify(data))
        setSignup(true)
        navigate("/")
    }
    const [pass, setPass] = useState('')
    return (
        <div className="container">
            <div className='form-container'>
                <ToastContainer />
                <fieldset>
                    <legend style={{fontSize:"larger"}}>Registration Form</legend>
                    <form onSubmit={handleSubmit(FormSubmitHandler)}>
                        {isSubmitSuccessful && <div className='success'>
                            <p>Registration Successful</p>
                        </div>}

                        {/* <label>Name : </label> */}
                        <input type="text" name='firstName' {...register("Name", {
                            required: "Enter Your Name", minLength: { value: 3, message: "minimum 3 char required" }, maxLength: { value: 30, message: "Maximum 30 chars only" }
                        })} placeholder='Your Name'/>
                        <p className='err'>{errors.Name?.message} </p>

                        {/* <label>Email : </label> */}
                        <input type="text" name='email' {...register("email", {
                            required: "Enter your email", pattern: { value: emailRegexPattern, message: "please enter a valid email" }
                        })} placeholder='Your Email'/>
                        <p className='err'>{errors.email?.message} </p>

                        {/* <label>Password : </label> */}
                        <input type="password" name='password' {...register("password", {
                            required: "Enter your Password", minLength: { value: 10, message: "minimum 10 char required" }, pattern: { value: passwordRegexPattern, message: 'Password should contain atleast 1 special character' }
                        })} onChange={(e) => { setPass(e.target.value) }} placeholder='Password'/>
                        <p className='err'>{errors.password?.message} </p>

                        {/* <label>Repeat Password : </label> */}
                        <input type="password" name='passtwo' {...register("passTwo", {
                            required: "Confirm your password", minLength: { value: 10, message: "minimum 10 char required" }, validate: (value) => value == pass || 'Pass do not match',
                        })} placeholder='Confirm password'/>
                        <p className='err'>{errors.passTwo?.message} </p>

                        <input id='submit' type="submit" value={"Register"} />
                    </form>
                </fieldset>
            </div>
        </div>

    )
}

export default Form