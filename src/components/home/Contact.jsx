import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setStatus(
      'Thanks! Your message is validated locally. Connect an API to send it.'
    );
  };

  return (
    <section id="contact" className="section container">
      <SectionTitle
        eyebrow="07 / CONTACT"
        title="Have a project or opportunity? Let’s talk."
      />

      <div className="contact-grid">
        <div>
          <p>
            Whether you want to discuss a role, collaborate on a project or
            exchange ideas, feel free to reach out.
          </p>

          <a className="email" href="mailto:yogimk17124@gmail.com">
            yogimk17124@gmail.com
          </a>
        </div>

        <form onSubmit={submit}>
          {['name', 'email', 'subject'].map((field) => (
            <input
              key={field}
              required
              placeholder={
                field[0].toUpperCase() + field.slice(1)
              }
              value={form[field]}
              onChange={(e) =>
                setForm({
                  ...form,
                  [field]: e.target.value,
                })
              }
            />
          ))}

          <textarea
            required
            rows="5"
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <button className="btn" type="submit">
            Send Message ↗
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}