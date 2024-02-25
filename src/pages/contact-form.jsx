import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  // adds error messages to the form
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
          setFormMessage('Invalid email. Please fix.');
        } else {
          setFormMessage('');
        }
    } else {
      if (!e.target.value.length) {
        const name =  e.target.name;
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <Form onSubmit={sendEmail} id="contactForm">
      <Form.Group controlId="name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control required name="name" placeholder="Monkey D. Luffy" onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control required name="email" type="email" placeholder="luffythepirateking@onepiece.org"  onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control required name="subject" placeholder="Risks and Future" onBlur={handleChange} />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control required name="message" as="textarea" rows="5" placeholder="If you don't take risks, you can't create a future." onBlur={handleChange} />
      </Form.Group>

      {formMessage && <p className="form-message">{formMessage}</p>}

      <Button type="submit" className='btn'>Submit</Button>
    </Form>
  )
}

export default ContactForm;