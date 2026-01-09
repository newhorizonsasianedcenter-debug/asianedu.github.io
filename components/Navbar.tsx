import React, { useState } from 'react';
import { Menu, X, GraduationCap, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Programs', href: '#/programs' },
    { name: 'Impact', href: '#/impact' },
    { name: 'Resources', href: '#/resources' },
    { name: 'Volunteer', href: '#/volunteer' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 leading-tight">
                New Horizons <br/>
                <span className="text-xs font-medium uppercase text-blue-600">Asian Education Center</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95"
            >
              <Heart size={18} />
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#/donate"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold text-center"
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};
