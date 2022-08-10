import React, { useState } from 'react'
import axios from 'axios'
import './_Contact.css'


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState("Submit");
  // Input Handlers
  const onNameChange = (e) => {
    setName(e.target.value)
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const onSubjectChange = (e) => {
    setSubject(e.target.value)
  }
  const onMsgChange = (e) => {
    setMessage(e.target.value)
  }
  // Submit Form Handler
  const submitEmail = (e) => {
    e.preventDefault();
    const data = {
      name, email, subject, message
    }

    axios({
      method: 'post',
      url: 'http://www.goatcircuits.com/send',
      header: { 'Content-Type': 'multipart/form-data' },
      data
    }).then((response) => {
      console.log(response);
      setStatus("Sending...");
      resetForm();
      console.log(response);
    }).catch((err) => {
      console.log(`Error --> ${err}`)
    })
  }
  // Empty Input Fields When Email Successfully Submitted
  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('Sent!');
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__text">
          <h2>Let's Chat</h2>
          <p>Goat Circuits is open to considering any and all project's electrical needs that you may have. Even if you think it may be something out of our scope, still reach out and, if able, I can point you in the right direction.</p>
        </div>
        <form className="contact__form" id="contact-form" onSubmit={submitEmail} method="POST">
          <input placeholder = "Name"  id="name" type="text" className="form-control" required value={name} onChange={onNameChange} />
          <input placeholder = "Email"  id="email" type="email" className="form-control" aria-describedby="emailHelp" required value={email} onChange={onEmailChange} />
          <input placeholder = "Subject"  id="subject" type="text" className="form-control" required value={subject} onChange={onSubjectChange}/>
          <textarea placeholder = "Message"  id="message" className="form-control" rows="1" required value={message} onChange= {onMsgChange}/>
          <button type="submit" className="btn btn-primary">{status}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
