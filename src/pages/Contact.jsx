import { useState } from 'react';
import Notify from '../components/Notification'

export default function Contact() {
  // states and setters
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // email validation; this is the regex the HTML form uses for validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return (
    <section className="contact-form content">
      <h2 className="is-size-4">Contact Me</h2>
      <form
        className="box"
        onSubmit={e => {
          e.preventDefault();
          setError(
            `Hello, ${name}. This form cannot set an email yet, please email me at cstevens@richmond.edu by clicking the email icon below.`
          )
          setName('');
          setEmail('');
          setMessage('');
        }}
      >
        <label htmlFor="name-field" className="mt-1 label">Name:</label>
        <input
          type="text"
          required
          id="name-field"
          className="input"
          value={name}
          onChange={e => {
            setName(e.target.value);
            if (e.target.value) setError('');
          }}
          onBlur={() => {
            if (name === '') setError('Name cannot be empty.');
          }}
        />

        <label htmlFor="email-field" className="mt-1 label">Email:</label>
        <input
          type="email"
          required
          id="email-field"
          className="input"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (e.target.value) setError('');
          }}
          onBlur={() => {
            if (email === '') setError('Email cannot be empty.');
            else if (!emailRegex.test(email)) setError('Please enter valid email address.')
          }}
        />

        <label htmlFor="message-field" className="mt-1 label">Message:</label>
        <textarea
          required
          id="message-field"
          className="textarea"
          rows="15"
          value={message}
          onChange={e => {
            setMessage(e.target.value);
            if (e.target.value) setError('');
          }}
          onBlur={() => {
            if (message === '') setError('Message cannot be empty.');
          }}
        >
        </textarea>

        {/* display error notification when triggered */}
        {error && <Notify message={error} />}

        <button type="submit" className="button mt-2">Submit</button>
      </form>
    </section>
  )
}
