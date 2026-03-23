import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-mocha font-sans selection:bg-caramel selection:text-cream">
      {/* Navigation */}
      <nav className="fixed w-full bg-cream/90 backdrop-blur-md z-40 border-b border-latte">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">YoYo's Brew.</div>
          <div className="hidden md:flex space-x-8 font-medium text-mocha/80">
            <a href="#menu" className="hover:text-mocha transition-colors">Menu</a>
            <a href="#process" className="hover:text-mocha transition-colors">The Process</a>
            <a href="#contact" className="hover:text-mocha transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-block bg-mocha text-cream px-6 py-2 rounded-full font-medium hover:bg-mocha/90 transition-colors">
            Visit Us
          </a>
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a href="#contact" className="block w-full bg-mocha text-cream text-center py-4 rounded-full font-bold shadow-xl shadow-mocha/20 active:scale-95 transition-transform">
          Visit Us
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-mocha">
              Crafted for the <br/><span className="text-caramel italic">Modern Soul.</span>
            </h1>
            <p className="text-lg md:text-xl text-mocha/70 max-w-md leading-relaxed">
              Experience coffee elevated to an art form. We source the finest beans and meticulously prepare every cup to awaken your senses.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-block bg-mocha text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-mocha/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Find Our Shop
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-caramel/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop" 
              alt="Barista expertly pouring a latte" 
              className="relative z-10 rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-cream relative overflow-hidden">
        {/* Decorative Bean */}
        <svg className="absolute -right-24 top-24 w-64 h-64 text-latte/30 rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C7.58172 22 4 18.4183 4 14C4 8 8 2 12 2C16 2 20 8 20 14C20 18.4183 16.4183 22 12 22ZM12 20C15.3137 20 18 17.3137 18 14C18 9.5 15 4.5 12 4.5C9 4.5 6 9.5 6 14C6 17.3137 8.68629 20 12 20Z" />
          <path d="M10.5 18.5C10.0858 18.5 9.75 18.1642 9.75 17.75C9.75 14.5 11.5 10.5 14.5 7.5C14.7929 7.20711 15.2678 7.20711 15.5607 7.5C15.8536 7.79289 15.8536 8.26777 15.5607 8.56066C12.8536 11.2678 11.25 14.8536 11.25 17.75C11.25 18.1642 10.9142 18.5 10.5 18.5Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-caramel mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Coffees */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-caramel">Coffees</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Espresso', price: '$3.50' },
                  { name: 'Americano', price: '$4.00' },
                  { name: 'Cappuccino', price: '$5.00' },
                  { name: 'Latte (Vanilla/Caramel)', price: '$5.50' },
                  { name: 'Mocha', price: '$5.75' },
                  { name: 'Cold Brew', price: '$5.25' },
                  { name: 'Nitro Cold Brew', price: '$6.00' },
                ].map((item) => (
                  <li key={item.name} className="flex justify-between items-center border-b border-latte pb-4">
                    <span className="font-medium text-lg">{item.name}</span>
                    <span className="font-bold text-caramel">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Foods */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-caramel">Foods</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Butter Croissant', price: '$4.25' },
                  { name: 'Chocolate Croissant (Pain au Chocolat)', price: '$4.75' },
                  { name: 'Almond Croissant', price: '$5.00' },
                  { name: 'Savory Ham & Cheese Croissant', price: '$6.50' },
                  { name: 'Blueberry Muffin', price: '$3.75' },
                  { name: 'Avocado Toast (Sourdough)', price: '$11.00' },
                ].map((item) => (
                  <li key={item.name} className="flex justify-between items-center border-b border-latte pb-4">
                    <span className="font-medium text-lg">{item.name}</span>
                    <span className="font-bold text-caramel">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Gallery Section */}
      <section id="process" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Bean */}
        <svg className="absolute -left-24 top-12 w-64 h-64 text-latte/30 -rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C7.58172 22 4 18.4183 4 14C4 8 8 2 12 2C16 2 20 8 20 14C20 18.4183 16.4183 22 12 22ZM12 20C15.3137 20 18 17.3137 18 14C18 9.5 15 4.5 12 4.5C9 4.5 6 9.5 6 14C6 17.3137 8.68629 20 12 20Z" />
          <path d="M10.5 18.5C10.0858 18.5 9.75 18.1642 9.75 17.75C9.75 14.5 11.5 10.5 14.5 7.5C14.7929 7.20711 15.2678 7.20711 15.5607 7.5C15.8536 7.79289 15.8536 8.26777 15.5607 8.56066C12.8536 11.2678 11.25 14.8536 11.25 17.75C11.25 18.1642 10.9142 18.5 10.5 18.5Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-caramel mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop" 
                  alt="Raw coffee beans being roasted" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Bean</h3>
              <p className="text-mocha/70">Ethically sourced, single-origin beans roasted in-house to unlock their truest flavor profiles.</p>
            </div>
            
            {/* Column 2 */}
            <div className="group md:mt-12">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" 
                  alt="Barista pulling an espresso shot" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Craft</h3>
              <p className="text-mocha/70">Precision temperature, exact pressure, and the human touch combine for the perfect extraction.</p>
            </div>
            
            {/* Column 3 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                  alt="Sleek modern cafe interior" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Atmosphere</h3>
              <p className="text-mocha/70">A minimalist, welcoming sanctuary designed for connection, focus, and relaxation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact" className="py-24 bg-cream relative overflow-hidden">
        {/* Decorative Bean */}
        <svg className="absolute -right-32 bottom-0 w-96 h-96 text-latte/40 rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C7.58172 22 4 18.4183 4 14C4 8 8 2 12 2C16 2 20 8 20 14C20 18.4183 16.4183 22 12 22ZM12 20C15.3137 20 18 17.3137 18 14C18 9.5 15 4.5 12 4.5C9 4.5 6 9.5 6 14C6 17.3137 8.68629 20 12 20Z" />
          <path d="M10.5 18.5C10.0858 18.5 9.75 18.1642 9.75 17.75C9.75 14.5 11.5 10.5 14.5 7.5C14.7929 7.20711 15.2678 7.20711 15.5607 7.5C15.8536 7.79289 15.8536 8.26777 15.5607 8.56066C12.8536 11.2678 11.25 14.8536 11.25 17.75C11.25 18.1642 10.9142 18.5 10.5 18.5Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Info */}
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cream p-3 rounded-full text-caramel">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Address</h4>
                      <p className="text-mocha/70 mt-1">123 Artisan Ave<br/>Hoover, AL 35244</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cream p-3 rounded-full text-caramel">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Phone</h4>
                      <p className="text-mocha/70 mt-1">(205) 555-0199</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cream p-3 rounded-full text-caramel">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Hours</h4>
                      <p className="text-mocha/70 mt-1">Mon-Fri: 6am - 7pm<br/>Sat-Sun: 7am - 8pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Map Placeholder */}
              <div className="h-96 md:h-auto relative bg-latte">
                {/* Monochrome brown filter overlay */}
                <div className="absolute inset-0 bg-mocha/20 mix-blend-multiply z-10 pointer-events-none"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.388837775193!2d-86.8045!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzE0LjIiTiA4NsKwNDgnMTYuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) sepia(40%) hue-rotate(330deg) contrast(110%)' }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Location Map"
                  className="absolute inset-0 w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mocha text-cream py-12 px-6 border-t border-mocha/20 pb-28 md:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">YoYo's Brew.</div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-cream/70 hover:text-caramel transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-cream/70 hover:text-caramel transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-cream/70 hover:text-caramel transition-colors">
              <Twitter size={24} />
            </a>
          </div>
          
          <div className="text-sm text-cream/50 text-center md:text-right">
            &copy; {new Date().getFullYear()} YoYo's Brew. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
