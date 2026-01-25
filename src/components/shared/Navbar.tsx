"use client";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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
          {/* Mobile hamberger menu */}
          <div className="md:hidden">
              <button 
              onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <X size={28}/> : <Menu size={28}/>}
              </button>
          </div>
        </div>
        {/* Mobile menu overlay */}
        {isOpen && (
            <div className="md:hidden  top-20 left-0 w-full bg-white border-b border-green-100 shadow-xl ">
                <div className="flex flex-col p-6 space-y-4 font-semibold text-gray-600">
                    <a href="#features" className="hover:text-forest-green transition">Marketplace</a>
                    <a href="#how" className="hover:text-forest-green transition">Collector Guide</a>
                    <button className="bg-forest-green text-white px-8 py-3 rounded-xl font-bold hover:bg-dark-green transition-all shadow-lg shadow-green-200 w-full">
                      Get Started
                    </button>
                </div>
            </div>
        )}
       
      </nav>
        </div>
    )
}