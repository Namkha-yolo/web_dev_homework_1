export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>BELLA CUCINA</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience authentic Italian cuisine in a warm, welcoming atmosphere. Our family recipes have been passed down through generations.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#b8860b] hover:text-[#b8860b] transition-colors"
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#b8860b] uppercase tracking-wider text-sm mb-4">Hours</h4>
            <p className="text-gray-400 text-sm mb-2">Mon-Thu: 11am-10pm</p>
            <p className="text-gray-400 text-sm mb-2">Fri-Sat: 11am-11pm</p>
            <p className="text-gray-400 text-sm">Sun: 12pm-9pm</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#b8860b] uppercase tracking-wider text-sm mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">123 Italian Street</p>
            <p className="text-gray-400 text-sm mb-2">New York, NY 10001</p>
            <p className="text-gray-400 text-sm mb-2">(555) 123-4567</p>
            <p className="text-gray-400 text-sm">namkhatashee@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2025 Bella Cucina. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-[#b8860b] transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#b8860b] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
