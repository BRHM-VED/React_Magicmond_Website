import { BlockSection } from './BlockSection';
import type { ArticleBlock } from '../../../data/types';

interface Props {
  blocks: ArticleBlock[];
}

export function ArticleSection({ blocks }: Props) {
  return (
    <article className="max-w-[700px] mx-auto px-5 md:px-10 py-[30px] pb-[70px] md:pb-[110px] text-left">
      {blocks.map((block, i) => (
        <BlockSection key={i} block={block} />
      ))}
    </article>
  );
}

export default ArticleSection;
