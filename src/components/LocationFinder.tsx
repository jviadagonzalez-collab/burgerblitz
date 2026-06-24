import { MapPin, Search, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationFinder() {
  return (
    <section id="locations" className="py-20 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFC72C] rounded-3xl p-8 sm:p-12 lg:p-16 border-4 border-black relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <MapPin className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full font-black text-xs tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4" /> Find a BurgerBlitz
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black italic text-black tracking-tighter uppercase mb-6 leading-tight">
              We're probably just around the corner.
            </h2>
            
            <p className="text-lg text-black font-medium mb-8">
              With over 2,000 locations nationwide, your next crave-worthy meal is never far away. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-11 pr-4 py-5 sm:text-lg border-4 border-black rounded-xl focus:ring-0 focus:outline-none font-bold placeholder-gray-500 transition-colors bg-white text-black uppercase" 
                  placeholder="Zip code or City, State" 
                />
              </div>
              
              <button className="bg-[#E61C23] hover:bg-black text-white font-black uppercase tracking-widest py-5 px-8 rounded-xl transition-colors shadow-sm shrink-0 border-4 border-black hover:text-white">
                Find Location
              </button>
            </div>
            
            <button className="mt-6 text-black font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:underline underline-offset-4">
              <Navigation className="w-4 h-4" /> Use my current location
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
