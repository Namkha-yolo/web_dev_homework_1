import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name} - Bella Cucina`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:namkhatashee@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ backgroundColor: '#faf8f5', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Contact</p>
          <h2 style={{ fontSize: '40px', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Get in Touch</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#b8860b', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Info */}
          <div>
            <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>Visit Us</h3>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Address</h4>
              <p style={{ color: '#666' }}>123 Italian Street, New York, NY 10001</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Phone</h4>
              <p style={{ color: '#666' }}>(555) 123-4567</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '4px' }}>Hours</h4>
              <p style={{ color: '#666' }}>Mon-Thu: 11am-10pm</p>
              <p style={{ color: '#666' }}>Fri-Sat: 11am-11pm</p>
              <p style={{ color: '#666' }}>Sun: 12pm-9pm</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  resize: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#b8860b',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
