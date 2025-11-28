import { Award, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passion for exceptional cuisine and unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing food"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Where Tradition Meets Innovation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2015, Savoria has been a cornerstone of culinary excellence in our
              community. Our journey began with a simple vision: to create a dining experience that
              honors traditional cooking techniques while embracing modern innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under the guidance of our award-winning chef, Maria Rodriguez, we've crafted a menu
              that celebrates seasonal ingredients sourced from local farms and artisans. Every dish
              tells a story, and every meal becomes a memory.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment extends beyond the plate. We believe in sustainable practices,
              supporting our local community, and creating a warm, welcoming atmosphere where every
              guest feels like family.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Award-Winning</h3>
            <p className="text-gray-700 leading-relaxed">
              Recognized with multiple culinary awards including Michelin Bib Gourmand and Best New
              Restaurant 2016
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Leaf size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm-to-Table</h3>
            <p className="text-gray-700 leading-relaxed">
              We partner with over 20 local farms to bring you the freshest seasonal ingredients at
              their peak flavor
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Made with Love</h3>
            <p className="text-gray-700 leading-relaxed">
              Every dish is prepared with care and attention to detail, ensuring an exceptional
              dining experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
