import { useLocation, useNavigate } from 'react-router-dom';
import { FONTS } from '../../utils/constants/fonts';
import { CheckCircle2, Home } from 'lucide-react';
import { Seo } from '../../common/Seo';

export function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get name and from path from query parameters
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || 'Customer';
  const fromPath = searchParams.get('from') || '/';

  let buttonText = 'Back to Home';
  if (fromPath.includes('/sports')) {
    buttonText = 'Back to Sports';
  } else if (fromPath.includes('/infraedge')) {
    buttonText = 'Back to Infra Edge';
  }

  return (
    <main className="relative min-h-screen bg-[#010502] flex flex-col items-center justify-center p-4 overflow-hidden">
      <Seo title="Thank You" noIndex={true} />
      {/* Background Star Effect */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
      />

      {/* Responsive Success Card: Dialog Box on Desktop, Bottom Sheet on Mobile */}
      <div className="relative z-10 w-full max-w-[500px] flex flex-col items-center text-center bg-[#0c0416] border border-[#c055e5]/30 rounded-t-3xl md:rounded-2xl p-6 pb-12 md:pb-8 md:p-8 shadow-[0_0_50px_rgba(193,86,230,0.15)] fixed bottom-0 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto">
        {/* Mobile Handle (visible only on mobile) */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mb-6 md:hidden" />

        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c055e5]/10 flex items-center justify-center text-[#c055e5] mb-5 md:mb-6">
          <CheckCircle2 size={32} className="md:w-[38px] md:h-[38px] animate-bounce" />
        </div>

        <h1 className={`${FONTS.head} text-[24px] md:text-[28px] font-bold text-white mb-2 md:mb-3`}>
          Submission Successful!
        </h1>

        <p className={`${FONTS.inter} text-[14.5px] md:text-[16px] text-white/80 leading-relaxed mb-6 md:mb-8 px-2 md:px-0`}>
          Thank you, <span className="text-[#c055e5] font-semibold">{name}</span>! We have successfully received your consultation request and will get in touch with you shortly.
        </p>

        <button
          onClick={() => navigate(fromPath)}
          className={`${FONTS.inter} w-full md:w-auto h-[48px] px-6 rounded-lg bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:from-[#ab4ad4] hover:to-[#cb64ef] text-white font-medium shadow-[0_0_15px_rgba(193,86,230,0.25)] transition-all flex items-center justify-center gap-2`}
        >
          <Home size={18} />
          <span>{buttonText}</span>
        </button>
      </div>
    </main>
  );
}

export default ThankYouPage;
