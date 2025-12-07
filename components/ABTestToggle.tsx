import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';

export const ABTestToggle: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  const isVariantB = location.pathname === '/variant-b' || location.pathname === '/book-demo-b';
  const currentVariant = isVariantB ? 'B' : 'A';

  const handleToggle = () => {
    if (location.pathname === '/book-demo-a') {
      navigate('/book-demo-b');
    } else if (location.pathname === '/book-demo-b') {
      navigate('/book-demo-a');
    } else if (location.pathname === '/variant-b') {
      navigate('/');
    } else {
      navigate('/variant-b');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-200">
            Switch to Variant {currentVariant === 'A' ? 'B' : 'A'}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        )}

        <button
          onClick={handleToggle}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative w-14 h-14 bg-[#2E5BFF] hover:bg-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center active:scale-95"
          aria-label={`Switch to variant ${currentVariant === 'A' ? 'B' : 'A'}`}
        >
          <FlaskConical className="w-6 h-6 transition-transform group-hover:rotate-12" />

          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#2E5BFF] font-bold text-xs border-2 border-[#2E5BFF] shadow-md">
            {currentVariant}
          </div>

          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </button>
      </div>
    </div>
  );
};
