import type { ArticleBlock } from '../../data/types';

interface Props {
  block: ArticleBlock;
}

export function CsBlock({ block }: Props) {
  switch (block.type) {
    case 'label':
      return <p className="cs-label reveal">{block.text}</p>;
    case 'h3':
      return <h3 className="reveal">{block.text}</h3>;
    case 'h4':
      return <h4 className="reveal">{block.text}</h4>;
    case 'p':
      return <p className="reveal">{block.text}</p>;
    case 'figure':
      return (
        <figure className="reveal">
          <img src={block.image} alt={block.alt ?? ''} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case 'pair':
      return (
        <div className="cs-img-pair reveal">
          <img src={block.images![0]} alt={block.alt ?? ''} />
          <img src={block.images![1]} alt={block.alt ?? ''} />
        </div>
      );
    default:
      return null;
  }
}
export default CsBlock;
