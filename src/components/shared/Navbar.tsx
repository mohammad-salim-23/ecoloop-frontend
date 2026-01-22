import { Leaf } from "lucide-react";

export default function Navbar() {
    return (
        <div>
               <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-forest-green rounded-lg text-white">
              <Leaf size={24} />
            </div>
            <span className="text-2xl font-black text-dark-green tracking-tighter">EcoLoop</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-semibold">
            <a href="#features" className="hover:text-forest-green transition">Marketplace</a>
            <a href="#how" className="hover:text-forest-green transition">Collector Guide</a>
            <button className="bg-forest-green text-white px-8 py-3 rounded-xl font-bold hover:bg-dark-green transition-all shadow-lg shadow-green-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>
        </div>
    )
}