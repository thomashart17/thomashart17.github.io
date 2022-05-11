import React, {useRef} from 'react'
import './contact.css'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fidk0wh', 'template_ypa2u2j', form.current, 'TkQedBsjNr-nTjMPQ');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>thomas.hart@uwaterloo.ca</h5>
            <a href='mailto:thomas.hart@uwaterloo.ca'>Send Message</a>
          </article>
          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>(778) 387-0195</h5>
            <a href='tel:778-387-0195'>Call Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact