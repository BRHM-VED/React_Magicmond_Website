import { CommonCtaSection } from '../../../common/CommonCtaSection';
import { CALENDLY } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <CommonCtaSection
      titleNormal="Take your business to"
      titleItalic="new heights!"
      titleItalicColor="#e0b6ff"
      description="At magicmond, we’re transforming traditional businesses into digitally strong brands that drive growth."
      buttonText="Transform my business"
      buttonHref={CALENDLY}
      buttonType="home"
      raysTheme="cta"
      cardBackground="#08050f"
      sectionBg="#0d0817"
      bgType="dots"
    />
  );
}

export default CtaSection;
