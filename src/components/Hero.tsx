import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#FDFDFD] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
          
          {/* Content */}
          <div className="flex flex-col items-start text-center lg:text-left relative p-6 lg:p-12">
            <div className="hidden lg:block absolute top-0 left-12 w-24 h-1 bg-[#FFC72C]"></div>
            
            <div className="inline-flex items-center gap-2 bg-[#FFC72C] text-black px-3 py-1 rounded-full font-bold text-sm tracking-wide uppercase mb-6">
              <Star className="w-4 h-4 fill-current" /> Limited Time Offer
            </div>
            
            <h1 className="text-6xl sm:text-[80px] lg:text-[110px] leading-[0.85] font-black italic tracking-tighter uppercase mb-6 text-black">
              The Double<br />
              <span className="text-[#E61C23]">Smash</span> Combo
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed mb-8">
              Two perfectly seared smashed beef patties, melty American cheese, crispy fries, and a large drink. Only $8.99 on the app.
            </p>
            
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#E61C23] text-white py-5 rounded-xl font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Get the Deal <ArrowRight className="w-5 h-5" />
                </motion.button>
                <button className="flex-1 border-4 border-black py-5 rounded-xl font-bold text-lg uppercase tracking-wider flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                  View Full Menu
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Over <span className="text-black">2M+</span> served today
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative mt-8 lg:mt-0 bg-[#F9F9F9] rounded-3xl p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-[120%] h-[120%] rounded-full bg-[#FFC72C] opacity-10"></div>
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative z-10 w-full max-w-[480px] aspect-square rounded-full shadow-2xl bg-white border-[12px] border-white flex items-center justify-center overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" 
                alt="Delicious Double Smash Burger" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating Price Tag */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute top-8 right-8 lg:top-24 lg:right-24 bg-[#FFC72C] text-black w-24 h-24 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 border-4 border-black z-20"
            >
              <span className="text-xs font-black uppercase">Only</span>
              <span className="text-3xl font-black">$8.99</span>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
