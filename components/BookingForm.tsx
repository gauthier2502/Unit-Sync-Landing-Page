import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface BookingFormProps {
  selectedDate: Date | null;
  selectedTime: string | null;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  bedsCount: string;
  notes: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedDate, selectedTime }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    bedsCount: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      setErrorMessage('Please select a date and time for your demo');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('demo_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            organization: formData.organization,
            role: formData.role,
            beds_count: formData.bedsCount,
            booking_date: selectedDate.toISOString().split('T')[0],
            booking_time: selectedTime,
            notes: formData.notes,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        bedsCount: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setErrorMessage('Failed to submit booking. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
          <p className="text-slate-600 mb-6">
            We've received your demo booking request. Our team will send you a confirmation email shortly.
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-slate-600 mb-1">
              <span className="font-semibold text-slate-900">Date:</span> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Time:</span> {selectedTime}
            </p>
          </div>
          <Button onClick={() => setSubmitStatus('idle')} variant="outline">
            Book Another Demo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Your Details</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
            placeholder="Dr. Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
            placeholder="jane.smith@hospital.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-2">
            Hospital / Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
            placeholder="City General Hospital"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
          >
            <option value="">Select your role</option>
            <option value="Hospital Director">Hospital Director</option>
            <option value="Chief Medical Officer">Chief Medical Officer</option>
            <option value="Chief Information Officer">Chief Information Officer</option>
            <option value="Department Head">Department Head</option>
            <option value="IT Manager">IT Manager</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="bedsCount" className="block text-sm font-semibold text-slate-700 mb-2">
            Number of Beds *
          </label>
          <select
            id="bedsCount"
            name="bedsCount"
            value={formData.bedsCount}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all"
          >
            <option value="">Select bed count</option>
            <option value="50-100">50-100 beds</option>
            <option value="100-200">100-200 beds</option>
            <option value="200-300">200-300 beds</option>
            <option value="300-500">300-500 beds</option>
            <option value="500+">500+ beds</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">
            Special Requirements (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition-all resize-none"
            placeholder="Any specific areas you'd like us to focus on during the demo?"
          />
        </div>

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !selectedDate || !selectedTime}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Confirm Booking'
          )}
        </Button>

        {!selectedDate || !selectedTime ? (
          <p className="text-sm text-slate-500 text-center">
            Please select a date and time from the calendar
          </p>
        ) : null}
      </form>
    </div>
  );
};
