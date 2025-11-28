import { useState } from 'react';
import { Calendar, Clock, Users, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    party_size: '2',
    special_requests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase.from('reservations').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          date: formData.date,
          time: formData.time,
          party_size: parseInt(formData.party_size),
          special_requests: formData.special_requests || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        party_size: '2',
        special_requests: '',
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Reserve Your Table
          </h2>
          <p className="text-xl text-gray-600">
            Book your dining experience with us
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="party_size" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline mr-2" size={18} />
                  Party Size *
                </label>
                <select
                  id="party_size"
                  name="party_size"
                  required
                  value={formData.party_size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline mr-2" size={18} />
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="inline mr-2" size={18} />
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="special_requests"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Special Requests
              </label>
              <textarea
                id="special_requests"
                name="special_requests"
                value={formData.special_requests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none transition-colors resize-none"
                placeholder="Any dietary restrictions, allergies, or special occasions..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg">
                <p className="font-semibold">Reservation submitted successfully!</p>
                <p className="text-sm mt-1">We'll send you a confirmation email shortly.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-lg">
                <p className="font-semibold">Failed to submit reservation.</p>
                <p className="text-sm mt-1">Please try again or call us directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send size={20} />
                  Book Your Table
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
