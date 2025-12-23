import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${formData.name} - Bella Cucina Website`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:namkhatashee@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-[5%]" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gold mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          We&apos;d love to hear from you
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#ffffff' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-inherit text-base transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-inherit text-base transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 font-inherit text-base resize-y transition-all"
              />
              <button
                type="submit"
                className="inline-block px-10 py-4 bg-gold text-black rounded-full font-bold text-lg hover:bg-gold-dark hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Visit Us
            </h3>
            <div className="p-8 rounded-2xl shadow-lg space-y-6" style={{ backgroundColor: '#ffffff' }}>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold text-gray-800">Address</p>
                  <p className="text-gray-600">123 Italian Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold text-gray-800">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <p className="text-gray-600">namkhatashee@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
