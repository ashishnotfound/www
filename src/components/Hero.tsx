import { ChefHat } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <ChefHat size={80} className="text-amber-600" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Welcome to Savoria
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
          Experience culinary excellence where tradition meets innovation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-amber-600 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg border-2 border-amber-600"
          >
            Make Reservation
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-amber-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
