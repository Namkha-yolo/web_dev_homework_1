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
    <section id="contact" className="py-20 px-[5%] bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold font-inherit text-base"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold font-inherit text-base"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-gold font-inherit text-base resize-y"
              />
              <button
                type="submit"
                className="inline-block px-8 py-4 bg-gold text-black rounded font-bold hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <p className="leading-relaxed">
                <strong>Address:</strong> 123 Italian Street, New York, NY 10001
              </p>
              <p className="leading-relaxed">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="leading-relaxed">
                <strong>Email:</strong> namkhatashee@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
