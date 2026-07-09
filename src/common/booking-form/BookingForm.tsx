import React, { useState } from 'react';
import { FONTS } from '../../utils/constants/fonts';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
  onClose?: () => void;
}

export function BookingForm({ onSubmitSuccess, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Form submission logic will be implemented here
      onSubmitSuccess?.();
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div>
        <h3 className={`${FONTS.head} text-[22px] md:text-[26px] font-semibold text-white mb-1`}>
          Book a Consultation
        </h3>
        <p className={`${FONTS.inter} text-[14px] text-white/60`}>
          Let's discuss how we can help scale your business.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
          className={`${FONTS.inter} w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
          className={`${FONTS.inter} w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors`}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={handleChange}
          className={`${FONTS.inter} w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors`}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className={`${FONTS.inter} w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors`}
        />
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`${FONTS.inter} w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors resize-none`}
        />
      </div>

      {error && (
        <p className={`${FONTS.inter} text-[13px] text-red-400`}>
          {error}
        </p>
      )}

      <div className="flex gap-3 mt-2">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className={`${FONTS.inter} flex-1 h-[48px] rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium`}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className={`${FONTS.inter} flex-1 h-[48px] rounded-lg bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:from-[#ab4ad4] hover:to-[#cb64ef] text-white font-medium shadow-[0_0_15px_rgba(193,86,230,0.25)] transition-all disabled:opacity-50`}
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}
