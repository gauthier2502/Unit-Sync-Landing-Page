import { NavItem, Testimonial, FAQItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Finally, a solution that fits a public hospital budget but performs like a premium enterprise tool.",
    author: "Dr. Sarah Jenkins",
    role: "Hospital Director, Mercy General"
  },
  {
    id: '2',
    quote: "The Morning Brief feature changed how our ED runs. I spend less time on logistics and more time treating patients.",
    author: "James Miller",
    role: "Head of Emergency, St. Luke's"
  },
  {
    id: '3',
    quote: "Implementation was a breeze. It didn't replace our EHR; it just made it smarter.",
    author: "Elena Rodriguez",
    role: "Chief Information Officer"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do we need to replace our current ERP or EHR?",
    answer: "No. UnitSync acts as an intelligent layer that integrates bi-directionally with your existing systems (Epic, Cerner, etc.) to enhance their capabilities without replacement."
  },
  {
    question: "Is this affordable for public hospitals?",
    answer: "Yes. Unlike enterprise suites like SAP or IBM Watson, UnitSync is priced specifically for mid-sized public sector budgets, with no hidden implementation fees."
  },
  {
    question: "How long does implementation take?",
    answer: "Our standardized Pilot Phase allows for rapid deployment in Emergency Departments. Most hospitals are live within 4-6 weeks and see ROI within the first quarter."
  },
  {
    question: "Is data handling HIPAA & GDPR compliant?",
    answer: "Absolutely. We maintain the highest security standards with end-to-end encryption, regular audits, and full compliance with HIPAA, GDPR, and local data residency laws."
  },
  {
    question: "Can I customize the dashboard views?",
    answer: "Yes. Every department head can configure their own 'Control Tower' view to track the KPIs that matter most to their specific workflow and staff."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 dedicated support for critical issues, along with a dedicated Success Manager who helps you optimize workflows during and after onboarding."
  },
  {
    question: "Does it work on mobile devices?",
    answer: "UnitSync is fully responsive and secure on mobile. Doctors can access schedules, handoff notes, and alerts directly from their secure hospital-issued tablets or phones."
  },
  {
    question: "How do updates work?",
    answer: "As a SaaS platform, updates are automatic and seamless. You always have access to the latest features and security patches without any downtime or IT maintenance."
  }
];
