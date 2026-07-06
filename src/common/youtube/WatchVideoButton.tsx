import { useState } from 'react';
import { YoutubeModal } from './YoutubeModal';

interface Props {
  className?: string;
  videoUrl?: string;
  videoId?: string;
}

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export function WatchVideoButton({ className = '', videoUrl, videoId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const finalVideoId = videoId || (videoUrl ? getYouTubeId(videoUrl) : null) || 'p4mArfDZEgc';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 sm:gap-2.5 text-white/90 hover:text-white font-inter font-medium text-[14px] sm:text-[16px] transition-colors focus:outline-none cursor-pointer whitespace-nowrap shrink-0 ${className}`}
        type="button"
      >
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors shrink-0">
          <svg className="w-1.5 h-2 sm:w-2 sm:h-2.5" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5V8.5L7 5L1 1.5Z" fill="currentColor" />
          </svg>
        </span>
        <span className="underline decoration-white/20 underline-offset-4 hover:decoration-white">
          Watch our video
        </span>
      </button>
      <YoutubeModal isOpen={isOpen} onClose={() => setIsOpen(false)} videoId={finalVideoId} />
    </>
  );
}

export default WatchVideoButton;

