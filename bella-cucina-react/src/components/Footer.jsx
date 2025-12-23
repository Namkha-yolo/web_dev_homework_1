export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-6">Business Hours</h3>
            <p className="text-gray-400 mb-3">Monday - Thursday: 11:00 AM - 10:00 PM</p>
            <p className="text-gray-400 mb-3">Friday - Saturday: 11:00 AM - 11:00 PM</p>
            <p className="text-gray-400">Sunday: 12:00 PM - 9:00 PM</p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-6">Contact Info</h3>
            <p className="text-gray-400 mb-3">123 Italian Street, New York, NY 10001</p>
            <p className="text-gray-400 mb-3">(555) 123-4567</p>
            <p className="text-gray-400">namkhatashee@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-6 justify-center md:justify-start flex-wrap">
              <a
                href="#"
                className="text-gray-400 no-underline hover:text-gold transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 no-underline hover:text-gold transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 no-underline hover:text-gold transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800 text-gray-500">
          <p className="text-gold text-2xl font-bold italic mb-4">Bella Cucina</p>
          <p>&copy; 2025 Bella Cucina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
