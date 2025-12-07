import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { NAV_ITEMS } from '../config';
import { Menu, Activity } from 'lucide-react';

interface NavbarProps {
  ctaButtonText?: string;
  bookingPageUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ ctaButtonText = 'Get a Demo', bookingPageUrl = '/book-demo-a' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#2E5BFF] rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">UnitSync</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-600 hover:text-[#2E5BFF] font-medium transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to={bookingPageUrl}>
              <Button size="sm" className="hidden md:inline-flex">{ctaButtonText}</Button>
            </Link>
            <button
              className="md:hidden text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-xl animate-in slide-in-from-top-2 duration-200">
           <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 font-medium py-2 hover:text-[#2E5BFF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link to={bookingPageUrl}>
              <Button className="w-full">{ctaButtonText}</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
