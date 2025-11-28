import { useState } from 'react';
import { Utensils, Wine, Coffee, Cake } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function Menu() {
  const categories: MenuCategory[] = [
    {
      id: 'appetizers',
      name: 'Appetizers',
      icon: <Utensils size={24} />,
      items: [
        {
          name: 'Crispy Calamari',
          description: 'Lightly breaded squid with lemon aioli and marinara',
          price: '$14',
        },
        {
          name: 'Burrata & Tomatoes',
          description: 'Fresh burrata with heirloom tomatoes, basil, and balsamic glaze',
          price: '$16',
        },
        {
          name: 'Beef Carpaccio',
          description: 'Thinly sliced beef tenderloin with arugula, parmesan, and truffle oil',
          price: '$18',
        },
        {
          name: 'Mushroom Bruschetta',
          description: 'Wild mushrooms on toasted sourdough with herbed cream cheese',
          price: '$13',
        },
      ],
    },
    {
      id: 'mains',
      name: 'Main Courses',
      icon: <Utensils size={24} />,
      items: [
        {
          name: 'Grilled Ribeye',
          description: '16oz prime ribeye with roasted vegetables and rosemary jus',
          price: '$48',
        },
        {
          name: 'Pan-Seared Salmon',
          description: 'Atlantic salmon with asparagus, lemon butter, and herb quinoa',
          price: '$34',
        },
        {
          name: 'Lobster Risotto',
          description: 'Creamy arborio rice with fresh lobster, saffron, and parmesan',
          price: '$42',
        },
        {
          name: 'Wild Mushroom Pasta',
          description: 'Handmade pappardelle with mixed mushrooms, truffle cream, and parsley',
          price: '$28',
        },
        {
          name: 'Herb-Crusted Lamb Rack',
          description: 'New Zealand lamb with mint chimichurri and roasted fingerlings',
          price: '$45',
        },
      ],
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: <Cake size={24} />,
      items: [
        {
          name: 'Tiramisu',
          description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone',
          price: '$12',
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center, vanilla ice cream',
          price: '$13',
        },
        {
          name: 'Crème Brûlée',
          description: 'Vanilla bean custard with caramelized sugar crust',
          price: '$11',
        },
        {
          name: 'Seasonal Tart',
          description: 'Chef\'s selection of fresh fruit tart with pastry cream',
          price: '$12',
        },
      ],
    },
    {
      id: 'beverages',
      name: 'Beverages',
      icon: <Wine size={24} />,
      items: [
        {
          name: 'House Wine Selection',
          description: 'Red, white, or rosé by the glass',
          price: '$12',
        },
        {
          name: 'Premium Cocktails',
          description: 'Craft cocktails made with premium spirits',
          price: '$16',
        },
        {
          name: 'Artisan Coffee',
          description: 'Espresso, cappuccino, or specialty coffee drinks',
          price: '$6',
        },
        {
          name: 'Fresh Juices',
          description: 'Orange, grapefruit, or seasonal blend',
          price: '$7',
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState('appetizers');

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with passion using the finest seasonal ingredients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activeCategoryData?.items.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="text-xl font-bold text-amber-600">{item.price}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
