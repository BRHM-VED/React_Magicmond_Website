import { FONTS } from '../../utils/constants/fonts';
import { InputField } from './InputField';
import { useBookingForm } from './useBookingForm';

interface BookingFormProps {
  onSubmitSuccess?: () => void;
  onClose?: () => void;
}

export function BookingForm({ onSubmitSuccess, onClose }: BookingFormProps) {
  const { formData, loading, error, handleChange, handleSubmit } = useBookingForm(
    onSubmitSuccess,
    onClose
  );

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
