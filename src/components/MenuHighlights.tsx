import { Plus } from 'lucide-react';
import { motion } from 'motion/react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: "$5.49",
    calories: "540 Cal",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
    popular: true
  },
  {
    id: 2,
    name: "Crispy Chicken Sandwich",
    price: "$6.29",
    calories: "620 Cal",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=400",
    popular: false
  },
  {
    id: 3,
    name: "Loaded Curly Fries",
    price: "$3.99",
    calories: "480 Cal",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=400",
    popular: true
  },
  {
    id: 4,
    name: "Oreo Milkshake",
    price: "$4.49",
    calories: "780 Cal",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400",
    popular: false
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="relative">
            <div className="absolute -top-4 left-0 w-12 h-1 bg-[#E61C23]"></div>
            <h2 className="text-5xl font-black italic text-black tracking-tighter uppercase mb-4 mt-6">Craving favorites</h2>
            <p className="text-gray-500 font-medium text-lg uppercase tracking-wider">Our most popular items, ready to be devoured.</p>
          </div>
          <button className="text-[#E61C23] font-black uppercase tracking-widest hover:text-black transition-colors hover:underline underline-offset-4">
            See Full Menu →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MENU_ITEMS.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={item.id} 
              className="bg-[#FDFDFD] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                {item.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-[#E61C23] text-white text-xs font-black px-3 py-1.5 rounded-sm uppercase tracking-widest shadow-md">
                    Popular
                  </div>
                )}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black uppercase tracking-tight leading-tight">{item.name}</h3>
                </div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-6">{item.calories}</div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-3xl font-black text-black">{item.price}</span>
                  <button className="bg-gray-100 text-black hover:bg-[#E61C23] hover:text-white p-3 rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#E61C23] outline-none flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                <button className="w-full mt-6 border-4 border-black text-black font-black uppercase tracking-widest py-3 rounded-xl hover:bg-black hover:text-white transition-colors md:hidden">
                  Add to order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
