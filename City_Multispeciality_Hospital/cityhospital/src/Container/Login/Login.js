import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';



function Login(props) {

    const [userType, setUserType] = useState('Login')
    const [Reset, setReset] = useState(false)

    const Login = {
        email: yup.string().email("enter valid email").required("pls enter mail"),
        password: yup.string().required("enter your password")
    }

    const Signup = {
        Name: yup.string().required("enter your name"),
        email: yup.string().email("enter valid email").required("pls enter mail"),
        password: yup.string().required("enter your password")
    }

    let schema, initial;

    if (userType === 'Login') {
        schema = yup.object().shape(Login);
        initial = {
            email: '',
            password: ''
        }
    }

    else if (userType === 'Signup') {
        schema = yup.object().shape(Signup);
        initial = {
            Name: '',
            email: '',
            password: '',
            }
    }
    const handlelogin = (values)=>{
        console.log("loginhandle",values);
    }
    const handlesignup=(values)=>{
        console.log("signuphandle",values);
    }

    const formik = useFormik({
        initialValues: initial,
        validationSchema: schema,
        onSubmit: values => {
            if(userType==='login'){
                handlelogin(values); 
            }
            else if(userType==='signup'){
                handlesignup(values);  
            }
            // alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.errors.email);

  return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            Reset ?
                                <h2>Forgot Password</h2> :
                                userType === 'Login' ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Sign Up</h2>
                        }
                    </div>

                    <Formik values={formik}>

                        <Form onClick={formik.handleSubmit} className="php-email-form">
                            <div className="row flex-column align-items-center">
                                {
                                    Reset ?
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate" />
                                        </div> :
                                        null
                                }
                                {
                                    userType === 'Signup' ?
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />

                                            {
                                                formik.errors.name ? <p>enter your email</p> : null
                                            }

                                        </div>
                                        :
                                        null
                                }
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" onChange={formik.handleChange} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />

                                    {
                                        formik.errors.email ? <p>enter your email</p> : null
                                    }
                                </div>

                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="password" onChange={formik.handleChange} className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate" />

                                    {
                                        formik.errors.password ? <p>enter your password</p> : null
                                    }

                                </div>

                            </div>

                            {
                                Reset ?
                                    <>
                                        <div className="text-center"><button className='appointment-btn border-0 m-0' type="button">Enter Email</button></div>
                                        <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button" onClick={() => setUserType('Login')}>Login</button></div>
                                    </>
                                    :
                                    userType === 'Login' ?
                                        <>
                                            <div className="text-center"><button className='appointment-btn border-0 m-0' type="button">Login</button></div>
                                            <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button" onClick={() => setReset(true)}>Forgot Password</button></div>
                                        </>

                                        :
                                        <div className="text-center"><button className='appointment-btn border-0 m-0' type="button">Signup</button></div>
                            }

                            <div className='row'>
                                {
                                    Reset ?
                                        null
                                        :
                                        userType === 'Login' ?
                                            <div className='text-center pt-4'>
                                                <p>Create a new account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Signup')}>Sign Up</button>
                                            </div> :
                                            <div className='text-center pt-4'>
                                                <p>Already have an account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Login')}>Login</button>
                                            </div>
                                }
                            </div>

                        </Form>
                    </Formik>

                </div>
            </section>
        </main>
    );
}

export default Login;