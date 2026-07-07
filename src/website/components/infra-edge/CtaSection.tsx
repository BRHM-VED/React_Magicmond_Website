import { CommonCtaSection } from '../../../common/CommonCtaSection';
import { CALENDLY } from '../../../utils/constants/constants';

export function CtaSection() {
  return (
    <CommonCtaSection
      titleNormal="Take your business to"
      titleItalic="new heights!"
      titleItalicColor="#7db9ff"
      description={
        <>
          More leads. More sales. More growth. RealCons<br />
          makes it happen for real traditional businesses.
        </>
      }
      buttonText="Transform my business"
      buttonHref={CALENDLY}
      buttonType="infra"
      raysTheme="blue"
      cardBackground="#060a16"
      sectionBg="#0e081d"
      bgType="stars"
    />
  );
}

export default CtaSection;
