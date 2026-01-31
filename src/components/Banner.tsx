"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Recycle, X } from "lucide-react";
import PostForm from "./post/PostForm";
import { getCurrentUser } from "@/services/AuthService";


export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  
useEffect(()=>{
  const checkUser = async()=>{
    const currentUser = await getCurrentUser();
    setUser(currentUser)
  };
  checkUser();
},[])
  const handleSellClick = () => {
    if (user) {
      setIsModalOpen(true);
    } else {
      router.push("/login");
    }
  };

  const handleCollectorClick = () => {
    router.push("/register"); 
  };

  return (
    <div className="relative">
      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-dark-green rounded-full text-sm font-bold">
              <Recycle size={16} /> Best Waste Management App of 2026
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-dark-green leading-[0.9]">
              Clean Earth, <br />
              <span className="text-lime-green">Smart Earnings.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Your collected plastic is now a valuable resource. Post easily through EcoLoop and earn by selling directly to verified collectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleSellClick}
                className="bg-forest-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-dark-green transition-all transform hover:-translate-y-1 shadow-2xl"
              >
                I want to Sell
              </button>
              <button 
                onClick={handleCollectorClick}
                className="bg-white border-2 border-forest-green text-forest-green px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all"
              >
                Become a Collector
              </button>
            </div>
          </div>

          {/* Marketplace Preview (Right Side) */}
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-200/50 rounded-[40px] blur-3xl" />
            <div className="relative bg-white border border-green-100 rounded-[32px] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl">Marketplace Preview</h3>
                <span className="text-forest-green font-bold text-sm">Live Updates</span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center text-forest-green">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-gray-200 rounded-md mb-2" />
                      <div className="h-3 w-20 bg-gray-100 rounded-md" />
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-dark-green">৳ 120</div>
                      <div className="text-xs text-gray-400">Locked</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-sm font-medium text-gray-400">
                Login to view 150+ more listings near you
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Modal System --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-dark-green/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-all z-10"
            >
              <X size={20} />
            </button>
            
            <div className="p-2">
               <PostForm /> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
}