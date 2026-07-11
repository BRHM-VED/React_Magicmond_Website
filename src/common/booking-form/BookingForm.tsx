import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { FONTS } from '../../utils/constants/fonts';
import { InputField } from './InputField';
import { useBookingForm } from './useBookingForm';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
  onClose?: () => void;
}

export function BookingForm({ onSubmitSuccess, onClose }: BookingFormProps) {
  const location = useLocation();
  const { formData, loading, error, isSubmitted, handleChange, handleSubmit } = useBookingForm(
    onSubmitSuccess,
    onClose
  );

  const isSports = location.pathname.includes('/sports');
  const isInfraEdge = location.pathname.includes('/infraedge');

  // Dynamic theme colors
  let checkBg = 'bg-[#c055e5]/10';
  let checkText = 'text-[#c055e5]';
  let nameHighlight = 'text-[#c055e5]';
  let buttonClass = 'bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:from-[#ab4ad4] hover:to-[#cb64ef] text-white font-medium shadow-[0_0_15px_rgba(193,86,230,0.25)]';
  let textareaFocus = 'focus:border-[#c055e5]';

  if (isSports) {
    checkBg = 'bg-[#1ff9b8]/10';
    checkText = 'text-[#1ff9b8]';
    nameHighlight = 'text-[#1ff9b8]';
    buttonClass = 'bg-gradient-to-r from-[#00ac79] to-[#1ff9b8] hover:from-[#00c285] hover:to-[#22dfa0] text-[#010502] font-semibold shadow-[0_0_15px_rgba(31,249,184,0.3)]';
    textareaFocus = 'focus:border-[#1ff9b8]';
  } else if (isInfraEdge) {
    checkBg = 'bg-[#0055ff]/10';
    checkText = 'text-[#0055ff]';
    nameHighlight = 'text-[#0055ff]';
    buttonClass = 'bg-[#0055ff] hover:bg-[#3572f5] text-white font-medium shadow-[0_0_15px_rgba(0,85,255,0.4)]';
    textareaFocus = 'focus:border-[#0055ff]';
  }

  if (isSubmitted) {

    return (
      <div className="flex flex-col items-center justify-center text-center p-4 min-h-[60vh] md:min-h-0">
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${checkBg} flex items-center justify-center ${checkText} mb-6`}>
          <CheckCircle2 size={32} className="md:w-[38px] md:h-[38px] animate-bounce" />
        </div>

        <h3 className={`${FONTS.head} text-[24px] md:text-[28px] font-bold text-white mb-3`}>
          Submission Successful!
        </h3>

        <p className={`${FONTS.inter} text-[15px] md:text-[16.5px] text-white/80 leading-relaxed mb-8 px-2`}>
          Thank you, <span className={`${nameHighlight} font-semibold`}>{formData.name}</span>! We have successfully received your consultation request and will get in touch with you shortly.
        </p>


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
          className={`${FONTS.inter} w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none ${textareaFocus} transition-colors resize-none`}
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
          className={`${FONTS.inter} w-full h-[42px] rounded-lg ${buttonClass} transition-all disabled:opacity-50 flex items-center justify-center gap-2`}
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
