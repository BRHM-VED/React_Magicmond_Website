import { Link } from 'react-router-dom';
import { Seo } from '../../common/Seo';
import { FONTS } from '../../utils/constants/fonts';

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen bg-[#010502] flex flex-col items-center justify-center p-6 overflow-hidden text-white">
      {/* Background stars */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        src="/assets/images/common/hero-bg-stars.webp"
        alt=""
        aria-hidden="true"
      />

      <Seo title="Page Not Found" noIndex={true} />

      <div className="relative z-10 text-center max-w-[480px]">
        {/* 404 number */}
        <p
          className={`${FONTS.head} text-[96px] md:text-[140px] font-bold leading-none text-white/10 select-none`}
          aria-hidden="true"
        >
          404
        </p>

        <h1 className={`${FONTS.head} text-[28px] md:text-[36px] font-bold -mt-4 mb-4 text-white`}>
          Page Not Found
        </h1>

        <p className={`${FONTS.inter} text-[15px] md:text-[16px] text-white/60 leading-relaxed mb-8`}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          to="/"
          className={`${FONTS.inter} inline-flex items-center gap-2 h-[48px] px-8 rounded-full bg-gradient-to-r from-[#9c3fc2] to-[#c055e5] hover:opacity-90 text-white font-medium transition-all duration-200`}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
