import type { ArticleBlock } from '../../../data/types';

interface Props {
  block: ArticleBlock;
}

export function BlockSection({ block }: Props) {
  switch (block.type) {
    case 'label':
      return <p className="mt-[54px] font-bold text-[18px] text-[#5d007e] reveal">{block.text}</p>;
    case 'h3':
      return <h3 className="mt-[26px] font-medium text-[28px] md:text-[36px] tracking-[-0.5px] text-[#0e081d] reveal">{block.text}</h3>;
    case 'h4':
      return <h4 className="mt-[30px] font-bold italic text-[19px] text-[#0e081d] reveal">{block.text}</h4>;
    case 'p':
      return <p className="mt-4 text-[16px] md:text-[18px] leading-[1.55] text-[#1c1526] reveal">{block.text}</p>;
    case 'figure':
      return (
        <figure className="mt-[34px] mx-0 mb-0 reveal">
          <img className="w-full rounded-[16px]" src={block.image} alt={block.alt ?? ''} />
          {block.caption && <figcaption className="mt-3 text-center italic text-[14px] text-[#0e081d]/55">{block.caption}</figcaption>}
        </figure>
      );
    case 'pair':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[34px] reveal">
          <img className="w-full rounded-[14px] border border-[#0e081d]/[0.08]" src={block.images![0]} alt={block.alt ?? ''} />
          <img className="w-full rounded-[14px] border border-[#0e081d]/[0.08]" src={block.images![1]} alt={block.alt ?? ''} />
        </div>
      );
    default:
      return null;
  }
}

export default BlockSection;
