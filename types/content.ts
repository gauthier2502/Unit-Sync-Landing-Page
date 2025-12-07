import { ReactNode } from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  cta: string;
  imageComponent: ReactNode;
  align: 'left' | 'right';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
