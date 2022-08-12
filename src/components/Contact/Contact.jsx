import React, { useState } from 'react'
import axios from 'axios'
import './_Contact.css'

const Contact = () => {
  const [data, setData] = useState({name: '', email: '', subject: '', message: '', sent: false, buttonText: 'Submit', err: ''})

  const handleChange = (e) => {
    const {name, value} = e.target
        setData({
            ...data,
            [name]: value
    })
  }
  // Submit Form Handler
  const submitEmail = async (e) => {
    e.preventDefault();
      axios.post('api/sendmail', data)
        .then(res => {
            if(res.data.result !=='success') {
                setData({
                    ...data,
                    buttonText: 'Failed',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    resetForm()
                }, 6000)
            } else {
                setData({
                    ...data,
                    sent: true,
                    buttonText: 'Sent',
                    err: 'success'
                })
                setTimeout(() => {
                    resetForm();
                }, 6000)
            }
        }).catch( (err) => {
            //console.log(err.response.status)
            setData({
                ...data,
                buttonText: 'Failed',
                err: 'fail'
            })
        })

        const resetForm = () => {
          setData({
              name: '',
              email: '',
              message: '',
              sent: false,
              buttonText: 'Submit',
              err: ''
          });
      }
    }
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__text">
          <h2>Let's Chat</h2>
          <p>Goat Circuits is open to considering any and all project's electrical needs that you may have. Even if you think it may be something out of our scope, still reach out and, if able, I can point you in the right direction.</p>
        </div>
        <form className="contact__form" id="contact-form" onSubmit={submitEmail} method="POST">
          <input placeholder = "Name" name="name" id="name" type="text" className="form-control" required value={data.name} onChange={handleChange} />
          <input placeholder = "Email" name="email" id="email" type="email" className="form-control" aria-describedby="emailHelp" required value={data.email} onChange={handleChange} />
          <input placeholder = "Subject" name="subject" id="subject" type="text" className="form-control" required value={data.subject} onChange={handleChange}/>
          <textarea placeholder = "Message" name="message" id="message" className="form-control" rows="1" required value={data.message} onChange= {handleChange}/>
          <button type="submit" className="btn btn-primary">{data.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
