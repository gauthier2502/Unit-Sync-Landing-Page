import { useState, useCallback } from 'react';

export const useFAQ = (initialOpenIndex: number | null = 0) => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const isOpen = useCallback((index: number) => openIndex === index, [openIndex]);

  return {
    openIndex,
    toggleFAQ,
    isOpen
  };
};
