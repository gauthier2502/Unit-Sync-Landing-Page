import React from 'react';
import App from '../App';
import { ABTestToggle } from '../components/ABTestToggle';

export const VariantA: React.FC = () => {
  return (
    <>
      <App />
      <ABTestToggle />
    </>
  );
};
