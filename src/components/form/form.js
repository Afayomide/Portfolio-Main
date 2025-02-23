import React, { useRef, useState } from "react";
import "./form.css";
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

function Form() {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (form.current) {
      emailjs.sendForm('service_1hlo9gm', 'template_e3plaus', form.current, '-uGNesM2dn2b2lqIY')
        .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
        }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="animated-form">
        <div className="input-group">
          <FaUser className="input-icon" />
          <input placeholder="Your Full Name" name="name" required />
        </div>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input placeholder="Your Email" name="email" type="email" required />
        </div>
        <div className="input-group">
          <FaCommentAlt className="input-icon" />
          <textarea placeholder="Your Message" name="message" required />
        </div>
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <FaPaperPlane className="button-icon" />
        </button>
      </form>
      {submitStatus === 'success' && (
        <div className="success-message">I have gotten your message! I will reply you soonest.</div>
      )}
      {submitStatus === 'error' && (
        <div className="error-message">An error occurred. Please try again.</div>
      )}
    </div>
  );
}

export default Form;
