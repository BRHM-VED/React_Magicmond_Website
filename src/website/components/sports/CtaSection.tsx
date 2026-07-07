import { CommonCtaSection } from '../../../common/CommonCtaSection';
import { CALENDLY } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <CommonCtaSection
      titleNormal="Let’s Bring Your Brand"
      titleItalic="into the Game."
      titleItalicColor="#00ac79"
      description="From jersey sleeves to digital streams — we’ll help you make your mark in cricket’s biggest moments."
      buttonText="Transform my business"
      buttonHref={CALENDLY}
      buttonType="sports"
      raysTheme="green"
      cardBackground="#08050f"
      sectionBg="#010502"
      bgType="dots"
    />
  );
}

export default CtaSection;
