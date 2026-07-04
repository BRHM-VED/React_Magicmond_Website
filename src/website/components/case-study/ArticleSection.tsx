import { BlockSection } from './BlockSection';
import type { ArticleBlock } from '../../../data/types';

interface Props {
  blocks: ArticleBlock[];
}

export function ArticleSection({ blocks }: Props) {
  return (
    <article className="cs-article">
      {blocks.map((block, i) => (
        <BlockSection key={i} block={block} />
      ))}
    </article>
  );
}
export default ArticleSection;
