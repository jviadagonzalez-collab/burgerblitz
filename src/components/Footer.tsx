export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-[16px] border-[#FFC72C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-black tracking-tighter text-[#E61C23]">
                BURGER<span className="text-[#FFC72C]">BLITZ.</span>
              </span>
            </div>
            <p className="text-gray-400 font-bold text-sm mb-6 uppercase tracking-widest leading-relaxed">
              Serving smiles and smashing burgers since 1998. Fast, fresh, and unapologetically delicious.
            </p>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FFC72C] text-xs mb-4">Our Menu</h4>
            <ul className="space-y-4 text-white font-bold text-sm uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Combos</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Burgers</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Chicken & More</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Sides</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Drinks & Shakes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FFC72C] text-xs mb-4">About Us</h4>
            <ul className="space-y-4 text-white font-bold text-sm uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Newsroom</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-[#FFC72C] text-xs mb-4">Support</h4>
            <ul className="space-y-4 text-white font-bold text-sm uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-[#E61C23] transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BurgerBlitz International. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Do Not Sell My Info</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
