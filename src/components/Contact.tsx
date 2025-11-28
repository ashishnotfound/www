import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Visit Us</h2>
          <p className="text-xl text-gray-300">
            We'd love to welcome you to Savoria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300 leading-relaxed">
                  123 Culinary Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a
                  href="tel:+12125551234"
                  className="text-gray-300 hover:text-amber-600 transition-colors"
                >
                  (212) 555-1234
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:info@savoria.com"
                  className="text-gray-300 hover:text-amber-600 transition-colors"
                >
                  info@savoria.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p>Sunday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Find Us on the Map</h3>
            <div className="w-full h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784668459395!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959988995!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                title="Restaurant location map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Savoria. All rights reserved. Crafted with passion and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
