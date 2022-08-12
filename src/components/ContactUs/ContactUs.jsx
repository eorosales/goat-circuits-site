import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './_ContactUs.css'

const ContactUs = () => {
  const [ data, setData ] = useState({from_name: '', reply_to: '', subject: '', message: '', buttonText: 'Send'});
  
  const handleChange = (e) => {
    const {name, value} = e.target
        setData({
            ...data,
            [name]: value
    })
  }

  const form = useRef();

  // EmailJS Implementation
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_goat-circuits';
    const templateID = 'contact-us';
    const publicKey = 'mvydpsn5m_uTqibp1';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setData({
          ...data,
          buttonText: 'Sent',
        })
        setTimeout(() => {
          resetForm()
      }, 2000)
    }, (error) => {
      setData({
        ...data,
        buttonText: 'Fail'
      })
      setTimeout(() => {
          resetForm();
      }, 2000)
    });
  }

  const resetForm = () => {
    setData({
        from_name: '',
        reply_to: '',
        message: '',
        buttonText: 'Submit'
    });}

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__text">
          <h2>Let's Chat</h2>
          <p>Goat Circuits is open to considering any and all project's electrical needs that you may have. Even if you think it may be something out of our scope, still reach out and, if able, I can point you in the right direction.</p>
        </div>
        <form ref={form} className="contact__form" id="contact-form" onSubmit={sendEmail} method="POST">
          <input placeholder="Full Name" type="text" name="from_name" value={data.from_name} onChange={handleChange}  />
          <input placeholder="Your Email" type="email" name="reply_to" value={data.reply_to} onChange={handleChange}  />
          <textarea placeholder="Message" name="message" value={data.message} onChange={handleChange} />
          <button type="submit" className="btn btn-primary">{data.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
