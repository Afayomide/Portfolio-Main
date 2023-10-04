import React from  "react"
import "./form.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form (){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yyeo66h', 'template_e3plaus', form.current, '-uGNesM2dn2b2lqIY')
        .then(function(result){
            alert("Appointment Booked Successfuly, await our call or text to confirm.")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
        <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Your Full Name" name="name"/><br/>
            <input placeholder="Your Email" name="email"/><br/>
            <textarea placeholder="Your Message" name="message"/><br/>
            <button>Send Message</button>
        </form>
        </>
    )
}

export default Form 