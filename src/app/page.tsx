import React from 'react';
import { Leaf, MapPin, Recycle, Wallet, ChevronRight } from 'lucide-react'; 
import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/shared/Footer';

export default function LandingPage() {

  const stats = [
    { label: 'Active Posts', value: '850+' },
    { label: 'Waste Collected', value: '4.2 Tons' },
    { label: 'Eco-Collectors', value: '320' },
    { label: 'Points Redeemed', value: '15k' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar></Navbar>
    
      <Banner></Banner>
      {/* --- Stats Section --- */}
      <section className="bg-dark-green py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-5xl font-black text-lime-400 tracking-tight">{stat.value}</div>
              <div className="text-green-100 font-medium opacity-80 uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- How it Works (Flowchart logic) --- */}
      <section className="py-24 px-6 bg-green-50/50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-dark-green mb-4">How EcoLoop Works</h2>
          <p className="text-gray-500">সহজ তিনটি ধাপে আপনার এলাকাকে করুন প্লাস্টিক মুক্ত</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Leaf />, title: 'Post Waste', desc: 'আপনার জমানো প্লাস্টিকের পরিমাণ ও ছবি দিয়ে পোস্ট করুন।' },
            { icon: <Wallet />, title: 'Earn Coins', desc: 'কালেক্টররা ক্যাটাগরি অনুযায়ী ১০-৫০ কয়েন খরচ করে তথ্য আনলক করতে পারবেন।' },
            { icon: <ChevronRight />, title: 'Instant Cash', desc: 'কালেক্টর সরাসরি এসে মাল নিয়ে যাবে এবং আপনি ক্যাশ টাকা পাবেন।' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-green-50 shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center text-forest-green mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark-green mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    <Footer></Footer>
    </div>
  );
}