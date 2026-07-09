import React from 'react';
import { FONTS } from '../../utils/constants/fonts';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixText?: string;
}

export function InputField({ prefixText, className, ...props }: InputFieldProps) {
  if (prefixText) {
    return (
      <div className="flex w-full h-[48px] rounded-lg bg-white/5 border border-white/10 focus-within:border-[#c055e5] transition-colors overflow-hidden">
        <span className={`${FONTS.inter} flex items-center justify-center px-4 bg-white/5 border-r border-white/10 text-white/60 select-none text-[15px]`}>
          {prefixText}
        </span>
        <input
          {...props}
          className={`${FONTS.inter} flex-1 bg-transparent px-4 text-white placeholder-white/40 focus:outline-none ${className || ''}`}
        />
      </div>
    );
  }

  return (
    <input
      {...props}
      className={`${FONTS.inter} w-full h-[48px] px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#c055e5] transition-colors ${className || ''}`}
    />
  );
}

export default InputField;
