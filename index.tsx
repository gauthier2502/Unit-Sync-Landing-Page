
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ABTestProvider } from './contexts/ABTestContext';
import { VariantA } from './pages/VariantA';
import { VariantB } from './pages/VariantB';
import { BookDemoVariantA } from './pages/BookDemoVariantA';
import { BookDemoVariantB } from './pages/BookDemoVariantB';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ABTestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VariantA />} />
          <Route path="/variant-b" element={<VariantB />} />
          <Route path="/book-demo-a" element={<BookDemoVariantA />} />
          <Route path="/book-demo-b" element={<BookDemoVariantB />} />
        </Routes>
      </BrowserRouter>
    </ABTestProvider>
  </React.StrictMode>
);
