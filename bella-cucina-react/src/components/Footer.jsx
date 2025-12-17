export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-300 mb-2">Monday - Thursday: 11:00 AM - 10:00 PM</p>
            <p className="text-gray-300 mb-2">Friday - Saturday: 11:00 AM - 11:00 PM</p>
            <p className="text-gray-300">Sunday: 12:00 PM - 9:00 PM</p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">123 Italian Street, New York, NY 10001</p>
            <p className="text-gray-300 mb-2">(555) 123-4567</p>
            <p className="text-gray-300">namkhatashee@gmail.com</p>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#"
                className="text-gold no-underline hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gold no-underline hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gold no-underline hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700 text-gray-500">
          <p>&copy; 2025 Bella Cucina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
