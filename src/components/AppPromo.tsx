import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AppPromo() {
  return (
    <section id="deals" className="py-20 bg-[#FFC72C] overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E61C23] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FDFDFD] rounded-3xl shadow-2xl overflow-hidden border-4 border-black">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#E61C23] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest w-max mb-6">
                <Smartphone className="w-4 h-4" /> Download the App
              </div>
              
              <h2 className="text-5xl sm:text-6xl font-black italic text-black tracking-tighter mb-6 leading-[0.9] uppercase">
                Free fries on your first app order.
              </h2>
              
              <ul className="space-y-4 mb-8">
                {['Skip the line, order ahead', 'Exclusive daily deals', 'Earn points for free food'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold uppercase tracking-wider text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-[#E61C23] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-black text-white px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg flex items-center justify-center gap-2 border-4 border-black"
                >
                  <Download className="w-5 h-5" /> iOS App
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-transparent text-black px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm border-4 border-black flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors"
                >
                  <Download className="w-5 h-5" /> Android App
                </motion.button>
              </div>
            </div>
            
            <div className="bg-[#E61C23] relative min-h-[400px] lg:min-h-full flex items-center justify-center p-8 overflow-hidden border-t-4 lg:border-t-0 lg:border-l-4 border-black">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               <img 
                 src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                 alt="Person using phone to order food" 
                 className="relative z-10 w-full max-w-sm rounded-2xl shadow-2xl rotate-[-5deg] border-4 border-white"
               />
               
               {/* Floating UI Elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 className="absolute top-1/4 right-8 bg-[#FDFDFD] p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border-4 border-black"
               >
                 <div className="w-12 h-12 bg-[#FFC72C] rounded-full flex items-center justify-center text-2xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">🍟</div>
                 <div>
                   <div className="text-xs text-[#E61C23] font-black uppercase tracking-widest">Reward</div>
                   <div className="font-black text-black uppercase">Free Fries Unlocked!</div>
                 </div>
               </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
