import { useLocation } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';
import { FONTS } from '../../utils/constants/fonts';
import { InputField } from './InputField';
import { useBookingForm } from './useBookingForm';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
  onClose?: () => void;
}

export function BookingForm({ onSubmitSuccess, onClose }: BookingFormProps) {
  const location = useLocation();
  const { formData, loading, error, isSubmitted, handleChange, handleSubmit, handleClose } = useBookingForm(
    onSubmitSuccess,
    onClose
  );

  if (isSubmitted) {
    let buttonText = 'Back to Home';
    if (location.pathname.includes('/sports')) {
      buttonText = 'Back to Sports';
    } else if (location.pathname.includes('/infraedge')) {
      buttonText = 'Back to Infra Edge';
    }

    return (
      <div className="flex flex-col items-center text-center p-4 pb-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c055e5]/10 flex items-center justify-center text-[#c055e5] mb-6">
          <CheckCircle2 size={32} className="md:w-[38px] md:h-[38px] animate-bounce" />
        </div>

        <h3 className={`${FONTS.head} text-[24px] md:text-[28px] font-bold text-white mb-3`}>
          Submission Successful!
        </h3>

        <p className={`${FONTS.inter} text-[15px] md:text-[16.5px] text-white/80 leading-relaxed mb-8 px-2`}>
          Thank you, <span className="text-[#c055e5] font-semibold">{formData.name}</span>! We have successfully received your consultation request and will get in touch with you shortly.
        </p>

        <button
          type="button"
          onClick={handleClose}
          className={`${FONTS.inter} w-full md:w-auto h-[48px] px-6 rounded-lg bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:from-[#ab4ad4] hover:to-[#cb64ef] text-white font-medium shadow-[0_0_15px_rgba(193,86,230,0.25)] transition-all flex items-center justify-center gap-2`}
        >
          <Home size={18} />
          <span>{buttonText}</span>
        </button>
      </div>
    );
  }

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
        <InputField
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="phone"
          placeholder="Phone Number *"
          required
          pattern="[0-9]{10}"
          title="Please enter exactly 10 digits"
          prefixText="+91"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={3}
          value={formData.message}
          onChange={handleChange as any}
          className={`${FONTS.inter} w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors resize-none`}
        />
      </div>

      {error && (
        <p className={`${FONTS.inter} text-[13px] text-red-400`}>
          {error}
        </p>
      )}

      <div className="mt-2">
        <button
          type="submit"
          disabled={loading}
          className={`${FONTS.inter} w-full h-[48px] rounded-lg bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:from-[#ab4ad4] hover:to-[#cb64ef] text-white font-medium shadow-[0_0_15px_rgba(193,86,230,0.25)] transition-all disabled:opacity-50 flex items-center justify-center gap-2`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
