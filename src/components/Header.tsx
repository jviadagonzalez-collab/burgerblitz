import { Menu, MapPin, Smartphone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-[#E61C23]">
              BURGER<span className="text-[#FFC72C]">BLITZ.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#menu" className="hover:text-black transition-colors">Menu</a>
            <a href="#deals" className="hover:text-black transition-colors">Deals</a>
            <a href="#locations" className="hover:text-black transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Locations
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <div className="text-xs text-right hidden sm:block font-medium">
              <p className="text-gray-400 uppercase tracking-tighter">Nearest Location</p>
              <p className="text-black">122 Main St, Downtown</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E61C23] text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-colors shadow-lg"
            >
              Order Now
            </motion.button>
            <button className="md:hidden p-2 text-gray-600 hover:text-black bg-gray-50 rounded-full">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
