import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';

interface FormBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export function FormBottomSheet({ isOpen, onClose, onSubmitSuccess }: FormBottomSheetProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger slide up transition
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex flex-col justify-end md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Bottom Sheet Drawer */}
      <div 
        className={`relative w-full bg-[#0c0416] border-t border-white/10 rounded-t-3xl p-6 pb-10 shadow-2xl z-10 transition-transform duration-300 transform ${
          animate ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Notch / Handle for bottom sheet */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-5" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close sheet"
        >
          <X size={20} />
        </button>

        <BookingForm onSubmitSuccess={onSubmitSuccess} onClose={onClose} />
      </div>
    </div>
  );
}
