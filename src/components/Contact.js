import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false)

  const submit = (e) => {

    e.preventDefault()

    if(name && validEmail(email) && message){
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const userId = process.env.REACT_APP_USER_ID;
      const formParams = {
        name,
        email,
        message
      };
      setError(false)
      emailjs.send(serviceId, templateId, formParams, userId)
        .then(response => {
          console.log(response)
        })
        .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true)
    }
    else if(!name || !email || !message) alert('Please fill in all fields.')
    else if(!validEmail(email)) setError(true) 
  };

  const validEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email));
  }

  return (
    <section id="contact" className="contact">
      <p>I'm always interested in hearing about new projects, 
        so if you'd like to chat please get in touch &#128073;
      </p>
      <form>
        <input type='text' id="name" placeholder='Your name' maxLength={50} value={name} onChange={e => setName(e.target.value)} required />
        <input type='email' id="email" placeholder='Your email address' value={email} onChange={e => setEmail(e.target.value)} required />
        {error ? <small className="error">please enter a valid email address</small> : null}
        <textarea placeholder="your message" id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button type="submit" onClick={e => submit(e)}>Send message</button>
        <small className= { emailSent ? "success" :  "hide"} >
          Thank you for getting in touch i will get back to you shortly &#128591;
        </small>
      </form>
    </section>
  )
};

export default Contact;
