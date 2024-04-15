import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="contact-form content">
      <h2 className="is-size-4">Contact Me</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          window.alert(`Hello, ${name}. Email functionality is currently not available, please email me at cstevens@richmond.edu.`)
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
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email-field" className="mt-1 label">Email:</label>
        <input
          type="email"
          required
          id="email-field"
          className="input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="message-field" className="mt-1 label">Message:</label>
        <textarea
          required
          id="message-field"
          className="textarea"
          rows="15"
          value={message}
          onChange={e => setMessage(e.target.value)}
        >
        </textarea>

        <button type="submit" className="button mt-2">Submit</button>
      </form>
    </section>
  )
}
