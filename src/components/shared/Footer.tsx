import { Leaf } from "lucide-react";

export default function Footer(){
    return (
        <div>
              {/* --- Footer --- */}
      <footer className="bg-white border-t border-green-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-forest-green rounded-lg text-white">
              <Leaf size={20} />
            </div>
            <span className="text-xl font-black text-dark-green tracking-tighter">EcoLoop</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2026 EcoLoop Initiative. Built for a Greener Future.
          </div>
        </div>
      </footer>
        </div>
    )
}