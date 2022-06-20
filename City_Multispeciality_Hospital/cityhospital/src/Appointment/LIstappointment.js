import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';

function Listappointment(props) {
    const [data, setdata] = useState([]);
    const localdata = () => {
        let localdata = JSON.parse(localStorage.getItem(("apt")))

        setdata(localdata)
    }

        useEffect(() => {


        localdata();

    },

        [])


    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    <div className='row text-center'>
                        <div className='col-6 pb-4'>
                            <NavLink to={"/bookappointment"} activeClassName={"actbtn"}>Bookappointment</NavLink>
                        </div>
                        <div className='col-6 pb-4'>
                            <NavLink to={"/listappointment"} activeClassName={"actbtn"}>listappointment</NavLink>
                        </div>
                    </div>

                </div>
                {
                    data.map((d, i) => {
                         return ( 
                            <>
                             <h1>{d.name}</h1>
                            </>
                         )
                    }
                    )
                }
            </section>
        </main>

    );
}

export default Listappointment;