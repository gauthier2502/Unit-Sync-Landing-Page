import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Variant = 'A' | 'B';

interface ABTestContextType {
  currentVariant: Variant;
  setVariant: (variant: Variant) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
};

interface ABTestProviderProps {
  children: ReactNode;
}

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children }) => {
  const [currentVariant, setCurrentVariant] = useState<Variant>(() => {
    const stored = localStorage.getItem('ab-test-variant');
    return (stored === 'A' || stored === 'B') ? stored : 'A';
  });

  useEffect(() => {
    localStorage.setItem('ab-test-variant', currentVariant);
  }, [currentVariant]);

  const setVariant = (variant: Variant) => {
    setCurrentVariant(variant);
  };

  return (
    <ABTestContext.Provider value={{ currentVariant, setVariant }}>
      {children}
    </ABTestContext.Provider>
  );
};
