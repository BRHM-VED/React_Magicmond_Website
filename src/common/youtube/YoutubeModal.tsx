import { useEffect } from 'react';
import { X } from 'lucide-react';

interface YoutubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export function YoutubeModal({ isOpen, onClose, videoId }: YoutubeModalProps) {
  // Prevent body scroll when the modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      {/* Backdrop Close Click area */}
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      {/* Video Content Card */}
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 animate-scale-up border border-white/10">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-200 focus:outline-none z-20 border border-white/10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
