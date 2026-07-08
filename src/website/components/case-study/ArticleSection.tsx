import type { ArticleBlock } from '../../../data/common/types';
import { BlockSection } from './BlockSection';

interface Props {
  blocks: ArticleBlock[];
}

export function ArticleSection({ blocks }: Props) {
  return (
    <article className="max-w-[700px] mx-auto px-5 pb-[100px]">
      {blocks.map((block, i) => (
        <BlockSection key={i} block={block} />
      ))}
    </article>
  );
}

export default ArticleSection;
