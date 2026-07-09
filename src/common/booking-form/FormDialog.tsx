import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';

interface FormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export function FormDialog({ isOpen, onClose, onSubmitSuccess }: FormDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Dialog Box Container */}
      <div className="relative w-full max-w-[500px] bg-[#0c0416] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl z-10 transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <BookingForm onSubmitSuccess={onSubmitSuccess} onClose={onClose} />
      </div>
    </div>
  );
}
