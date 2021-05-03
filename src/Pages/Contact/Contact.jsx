import React, { useState } from 'react'
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar'
import {AiFillCheckCircle} from 'react-icons/ai';
import * as emailjs from 'emailjs-com';
const Contact = (props) => {
    const [userInfo, setUserInfo ] = useState({name:'', email:'', subject:'', message:''});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setUserInfo({
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_k5ohipm",
            "template_x4fmqjb",
            ".form-area",
            "user_t8b4xwjnGyPzGdgw5xPPn"
        )
        .then(response => {
           if(response.text === 'OK'){
               setSuccess(true)
           }
        })
        .catch()

        setUserInfo({
            name:"", message:"",subject:'', email:''
        })
    }

    return (
        <>
            <section className="contact-main-area">
                <Navbar isBg={true} />
                <div className="container padding">
                    <div className="location-area">
                        <h1>Home {props.location.pathname}</h1>
                    </div>


                <form onSubmit={handleSubmit} className='form-area'>
                    <fieldset>
                    <legend>CONTACT FORM</legend>
                        <input onChange={handleChange} type="text" placeholder='Name' value={userInfo.name} name='name'/> <br/>
                        <input onChange={handleChange} type="email" placeholder='Email' value={userInfo.email} name='email'/> <br/>
                        <input onChange={handleChange} type="text" placeholder='Subject' value={userInfo.subject} name='subject'/> <br/>
                        <textarea onChange={handleChange} placeholder='Message' name='message' value={userInfo.message} cols="30" rows="5"></textarea>

                        {
                            success && <h5 className='success-message'> <AiFillCheckCircle className='i'/> successfully sent</h5>
                        }

                        <button type="submit">Send</button>
                    </fieldset>
                </form>
                </div>
            </section>   
        </>
    )
}

export default Contact
