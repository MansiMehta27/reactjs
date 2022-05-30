import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';

import * as yup from 'yup';

function Login(props) {
    const [useType, setUseType] = useState("Login");

    let Login = {
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let SignUp = {
        name: yup.string().required("please Enter Name"),
        email: yup.string().email("please enter valid email").required("please enter email"),
        password: yup.string().required("please enter Password"),
    }

    let forgetPassowrd = {
        email: yup.string().email("please enter valid email").required("please enter email"),
    }

    let schema, initiValue;

    if(useType === "Login"){
        schema = yup.object().shape(Login);
        initiValue = {
            email: "",
            password: ""
        }

    }else if(useType === "SignUp"){
        schema = yup.object().shape(SignUp);  
        initiValue = {
            name: "",
            email: "",
            password: ""
        }      
    }else if(useType === "forgetPassowrd"){
        schema = yup.object().shape(forgetPassowrd); 
        initiValue = {
            email: ""
        } 
    }
    
    // const schema = yup.object().shape(Login);
    
    const formik = useFormik({
        initialValues : initiValue,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            
            if(useType === "Login"){
                console.log("Successfully Login 👍");
            }else if(useType === "SignUp"){
                console.log("Successfully SignUp 👍");
            }else if(useType === "forgetPassowrd"){
                console.log("Successfully Forget Passowrd 👍");
            }
            resetForm()
        },
    });

    console.log(formik.errors.email);


 return (

        <main id="main">
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                           <Formik>
                            <Form action method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>

                                 
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>

                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </Form>
                            </Formik>
                       
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Contect;