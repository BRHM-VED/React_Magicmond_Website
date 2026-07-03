import { CsBlock } from './CsBlock';
import type { ArticleBlock } from '../../data/types';

interface Props {
  blocks: ArticleBlock[];
}

export function CsArticle({ blocks }: Props) {
  return (
    <article className="cs-article">
      {blocks.map((block, i) => (
        <CsBlock key={i} block={block} />
      ))}
    </article>
  );
}
export default CsArticle;
