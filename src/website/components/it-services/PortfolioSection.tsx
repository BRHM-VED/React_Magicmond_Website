import { SectionHeading } from '../../../common/SectionHeading';
import { useIsDesktop } from '../../../hooks/useIsDesktop';
import { itPortfolio } from '../../../data/itServices/itServices';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioSection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeading
          titleNormal="Products"
          titleSerif="We've Shipped"
          description="Nine live products across six industries — built, launched, and still growing."
          align="center"
        />

        <div className="flex flex-col gap-6 md:gap-8 mt-12">
          {itPortfolio.map((item, index) => (
            <PortfolioCard key={item.name} item={item} index={index} isDesktop={isDesktop} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PortfolioSection;
